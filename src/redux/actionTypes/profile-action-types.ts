import {
  ADD_POST,
  SET_USER_PROFILE,
  SET_USER_STATUS,
  SAVE_PHOTO_SUCCESS,
} from "../constants";

import { PhotosType, ProfileType, } from '../../types/types';

export type AddPostActionCreatorActionType = {
  type: typeof ADD_POST,
  newPostText: string
}

export type SetUserProfileActionType = {
  type: typeof SET_USER_PROFILE,
  profile: ProfileType
}

export type SetStatusActionType = {
  type: typeof SET_USER_STATUS,
  status: string
}

export type SavePhotoSuccessActionType = {
  type: typeof SAVE_PHOTO_SUCCESS
  photos: PhotosType
}
