import { AppStateType } from '../redux-store';
import { ThunkAction } from 'redux-thunk';
import { stopSubmit } from "redux-form";

import { ResultCodesEnum } from "../../api/api";
import { profileAPI } from "../../api/profile-api";

import { ProfileType } from '../../types/types';
import {
  setUsersProfile,
  setStatus,
  savePhotoSuccess
} from "../actionCreators/profile-action-creator";

import { profileActionTypes } from "../actionTypes"

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, profileActionTypes>

export const getUserProfile = (userId: number): ThunkType => async (dispatch) => {
  const data = await profileAPI.getProfile(userId)

  dispatch(setUsersProfile(data));
}

export const getStatus = (userId: number): ThunkType => async (dispatch) => {
  const data = await profileAPI.getStatus(userId)

  dispatch(setStatus(data));
}

export const updateStatus = (status: string): ThunkType => async (dispatch) => {
  const data = await profileAPI.updateStatus(status)

  if (data.resultCode === ResultCodesEnum.Success) {
    dispatch(setStatus(status));
  }
}

export const savePhoto = (file: any): ThunkType => async (dispatch) => {
  const data = await profileAPI.savePhoto(file)

  if (data.resultCode === ResultCodesEnum.Success) {
    dispatch(savePhotoSuccess(data.data.photos));
  }
}

export const saveProfile = (profile: ProfileType) => async (dispatch: any, getState: any) => {
  const userId = getState().auth.userId;
  const data = await profileAPI.saveProfile(profile);

  if (data.resultCode === ResultCodesEnum.Success) {
    dispatch(getUserProfile(userId));
  } else {
    dispatch(stopSubmit("edit-profile", { _error: data.messages[0] }));
    return Promise.reject(data.messages[0]);
  }
}
