import {
  FOLLOW,
  UNFOLLOW,
  SET_USERS,
  SET_CURRENT_PAGE,
  SET_TOTAL_USERS_COUNT,
  TOGGLE_IS_FETCHING,
  TOGGLE_IS_FOLLOWING_PROGRESS,
} from "../constants";

import { UserType } from '../../types/types';

export type FollowSuccessActionType = {
  type: typeof FOLLOW
  userId: number
}
export type UnfollowSuccessActionType = {
  type: typeof UNFOLLOW
  userId: number
}
export type SetUsersActionType = {
  type: typeof SET_USERS
  users: Array<UserType>
}
export type SetCurrentPageActionType = {
  type: typeof SET_CURRENT_PAGE
  currentPage: number
}

export type SetTotalUsersCountActionType = {
  type: typeof SET_TOTAL_USERS_COUNT
  count: number
}

export type ToggleIsFetchingActionType = {
  type: typeof TOGGLE_IS_FETCHING
  isFetching: boolean
}

export type ToggleFollowingProgressActionType = {
  type: typeof TOGGLE_IS_FOLLOWING_PROGRESS
  isFetching: boolean
  userId: number
}