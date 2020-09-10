import { AppStateType } from '../redux-store';
import { ThunkAction } from 'redux-thunk';

import { usersAPI, profileAPI } from "../../api/api";
import { stopSubmit } from "redux-form";
import { ProfileType } from '../../types/types';
import {
  setUsersProfile,
  setStatus,
  savePhotoSuccess
} from "../actionCreators/profile-action-creator";

import { profileActionTypes } from "../actionTypes"

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, profileActionTypes>

export const getUserProfile = (userId: number):ThunkType => async (dispatch) => {
  const response = await usersAPI.getProfile(userId)

  dispatch(setUsersProfile(response.data));
}

export const getStatus = (userId: number):ThunkType => async (dispatch) => {
  const response = await profileAPI.getStatus(userId)

  dispatch(setStatus(response.data));
}

export const updateStatus = (status: string):ThunkType => async (dispatch) => {
  const response = await profileAPI.updateStatus(status)

  if (response.data.resultCode === 0) {
      dispatch(setStatus(status));
  }
}

export const savePhoto = (file: any):ThunkType => async (dispatch) => {
  const response = await profileAPI.savePhoto(file)

  if (response.data.resultCode === 0) {
      dispatch(savePhotoSuccess(response.data.data.photos));
  }
}

export const saveProfile = (profile: ProfileType) => async (dispatch:any, getState:any) => {
  const userId = getState().auth.userId;
  const response = await profileAPI.saveProfile(profile);

  if (response.data.resultCode === 0) {
      dispatch(getUserProfile(userId));
  } else {
      dispatch(stopSubmit("edit-profile", { _error: response.data.messages[0] }));
      return Promise.reject(response.data.messages[0]);
  }
}
