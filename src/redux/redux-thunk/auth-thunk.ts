import { AppStateType } from '../redux-store';
import { ThunkAction } from 'redux-thunk';
import { stopSubmit } from "redux-form";

import { ResultCodesEnum, ResultCodeForCapcthaEnum } from "../../api/api";
import { authAPI } from "../../api/auth-api";
import { securityAPI } from "../../api/security-api";

import { setAuthUserData, getCaptchaUrlSuccess } from "../actionCreators/auth-action-creator";
import { authActionTypes } from "../actionTypes";

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, authActionTypes>

export const getAuthUserData = (): ThunkType => async (dispatch) => {
  const maData = await authAPI.me();

  if (maData.resultCode === ResultCodesEnum.Success) {
    let { id, login, email } = maData.data;
    dispatch(setAuthUserData(id, email, login, true));
  }
}

export const getCaptchaUrl = (): ThunkType => async (dispatch) => {
  const dataCaptcha = await securityAPI.getCaptchaUrl()
  dispatch(getCaptchaUrlSuccess(dataCaptcha.url))
}

export const login = (email: string, password: string, rememberMe: boolean, captcha: string) => async (dispatch: any) => {
  const loginData = await authAPI.login(email, password, rememberMe, captcha)

  if (loginData.resultCode === ResultCodesEnum.Success) {
    dispatch(getAuthUserData())
  } else {
    if (loginData.resultCode === ResultCodeForCapcthaEnum.CaptchaIsRequired) {
      dispatch(getCaptchaUrl())
    }
    let message = loginData.messages.length > 0
      ? loginData.messages[0]
      : "Email or password is wrong"
    dispatch(stopSubmit("login", { _error: message }))
  }
}

export const logout = (): ThunkType => async (dispatch) => {
  const logoutData = await authAPI.logout()

  if (logoutData.resultCode === ResultCodesEnum.Success) {
    dispatch(setAuthUserData(null, null, null, false))
  }
}