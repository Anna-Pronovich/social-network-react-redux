import { SET_USER_DATA, GET_CAPTCHA_URL_SUCCESS } from "../constants";
import { SetUserDataActionType, getCaptchaUrlSuccessActionType } from "../actionTypes/auth-action-types";

export const setAuthUserData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean): SetUserDataActionType => ({
  type: SET_USER_DATA,
  payload: { userId, email, login, isAuth }
})

export const getCaptchaUrlSuccess = (captchaUrl: string): getCaptchaUrlSuccessActionType => ({
  type: GET_CAPTCHA_URL_SUCCESS,
  payload: { captchaUrl }
})
