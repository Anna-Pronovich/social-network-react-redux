import {
  SET_USER_DATA,
  GET_CAPTCHA_URL_SUCCESS,
} from "../constants";

export type AuthUserPayloadActionType = {
  userId: number | null,
  email: string | null,
  login: string | null,
  isAuth: boolean
}

export type SetUserDataActionType = {
  type: typeof SET_USER_DATA,
  payload: AuthUserPayloadActionType
}

export type getCaptchaUrlSuccessActionType = {
  type: typeof GET_CAPTCHA_URL_SUCCESS,
  payload: { captchaUrl: string }
}
