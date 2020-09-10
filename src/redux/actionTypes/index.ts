import { InitializedSuccessActionType } from "./app-action-types";
import {
  SetUserDataActionType,
  getCaptchaUrlSuccessActionType
} from "./auth-action-types";
import { SendMessageCreatorActionType } from "./dialog-action-types";
import {
  AddPostActionCreatorActionType,
  SetUserProfileActionType,
  SetStatusActionType,
  SavePhotoSuccessActionType
} from "./profile-action-types";

import {
  FollowSuccessActionType,
  UnfollowSuccessActionType,
  SetUsersActionType,
  SetTotalUsersCountActionType,
  SetCurrentPageActionType,
  ToggleIsFetchingActionType,
  ToggleFollowingProgressActionType
} from "./users-action-types";


export type appActionTypes = InitializedSuccessActionType;
export type authActionTypes =  SetUserDataActionType | getCaptchaUrlSuccessActionType;
export type dialogActionTypes = SendMessageCreatorActionType;
export type profileActionTypes = AddPostActionCreatorActionType | SetUserProfileActionType
  | SetStatusActionType
  | SavePhotoSuccessActionType;
export type usersActionTypes = FollowSuccessActionType | UnfollowSuccessActionType | SetUsersActionType
  | SetTotalUsersCountActionType
  | SetCurrentPageActionType
  | ToggleIsFetchingActionType
  | ToggleFollowingProgressActionType;