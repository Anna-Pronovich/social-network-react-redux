import {
  ADD_POST,
  SET_USER_PROFILE,
  SET_USER_STATUS,
  SAVE_PHOTO_SUCCESS,
} from "../constants";

import { PhotosType, ProfileType } from '../../types/types';
import {
  AddPostActionCreatorActionType,
  SetUserProfileActionType,
  SetStatusActionType,
  SavePhotoSuccessActionType
} from "../actionTypes/profile-action-types";


export const addPostActionCreator = (newPostText: string): AddPostActionCreatorActionType => ({ type: ADD_POST, newPostText });

export const setUsersProfile = (profile: ProfileType): SetUserProfileActionType => ({ type: SET_USER_PROFILE, profile });

export const setStatus = (status: string): SetStatusActionType => ({ type: SET_USER_STATUS, status });

export const savePhotoSuccess = (photos: PhotosType):SavePhotoSuccessActionType => ({type: SAVE_PHOTO_SUCCESS, photos})
