import { getAuthUserData } from "./auth-thunk";
import { initializedSuccess } from "../actionCreators/app-action-creator";

export const initializeApp = () => (dispatch:any) => {
    let promise = dispatch(getAuthUserData());

    Promise.all([promise])
        .then(() => {
            dispatch(initializedSuccess());
        });
}
