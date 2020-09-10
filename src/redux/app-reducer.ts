import { INITIALIZED_SUCCESS } from "./constants";
import { appActionTypes } from "./actionTypes";

type InitialStateType = {
    initialized: boolean,
}

const initialState: InitialStateType = {
    initialized: false
};

const appReducer = (state = initialState, action: appActionTypes): InitialStateType => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }

        default:
            return state;
    }
}

export default appReducer; 
