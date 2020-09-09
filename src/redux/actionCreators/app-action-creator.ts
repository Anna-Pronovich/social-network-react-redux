import { INITIALIZED_SUCCESS } from "../constants";
import { InitializedSuccessActionType } from "../actionTypes/app-action-types";

export const initializedSuccess = (): InitializedSuccessActionType => ({ type: INITIALIZED_SUCCESS });