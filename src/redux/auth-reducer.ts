import { SET_USER_DATA, GET_CAPTCHA_URL_SUCCESS } from "./constants";

type InitialStateType = {
    userId: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean,
    captchaUrl: string | null,
}

let initialState: InitialStateType = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null,
};

const authReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
        case GET_CAPTCHA_URL_SUCCESS:

            return {
                ...state,
                ...action.payload,
            }

        default:
            return state;
    }
}

export default authReducer;
