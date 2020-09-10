import { AppStateType } from '../redux-store';
import { ThunkAction } from 'redux-thunk';
import { authAPI, securityAPI } from "../../api/api";
import { stopSubmit } from "redux-form";
import { setAuthUserData, getCaptchaUrlSuccess } from "../actionCreators/auth-action-creator";

import { authActionTypes } from "../actionTypes";

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, authActionTypes>

export const getAuthUserData = ():ThunkType => async (dispatch) => {
  const response = await authAPI.me();

  if (response.data.resultCode === 0) {
      let { id, login, email } = response.data.data;
      dispatch(setAuthUserData(id, email, login, true));
  }
}

export const getCaptchaUrl = ():ThunkType => async (dispatch) => {
  const response = await securityAPI.getCaptchaUrl()

  dispatch(getCaptchaUrlSuccess(response.data.url))
}

export const login = (email: string, password: string, rememberMe: boolean, captcha: string) => async (dispatch:any) => {
  const response = await authAPI.login(email, password, rememberMe, captcha)

  if (response.data.resultCode === 0) {
      dispatch(getAuthUserData())
  } else {
      if (response.data.resultCode === 10) {
          dispatch(getCaptchaUrl())
      }
      let message = response.data.messages.length > 0
          ? response.data.messages[0]
          : "Email or password is wrong"
      dispatch(stopSubmit("login", { _error: message }))
  }
}

export const logout = ():ThunkType => async (dispatch) => {
  const response = await authAPI.logout()

  if (response.data.resultCode === 0) {
      dispatch(setAuthUserData(null, null, null, false))
  }
}