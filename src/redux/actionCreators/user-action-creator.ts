import {
  FOLLOW,
  UNFOLLOW,
  SET_USERS,
  SET_CURRENT_PAGE,
  SET_TOTAL_USERS_COUNT,
  TOGGLE_IS_FETCHING,
  TOGGLE_IS_FOLLOWING_PROGRESS,
} from "../constants"

import {
  FollowSuccessActionType,
  UnfollowSuccessActionType,
  SetUsersActionType,
  SetCurrentPageActionType,
  SetTotalUsersCountActionType,
  ToggleIsFetchingActionType,
  ToggleFollowingProgressActionType
} from "../actionTypes/users-action-types";

import { UserType } from '../../types/types';

export const followSuccess = (userId: number): FollowSuccessActionType => ({ type: FOLLOW, userId })
export const unfollowSuccess = (userId: number): UnfollowSuccessActionType => ({ type: UNFOLLOW, userId })
export const setUsers = (users: Array<UserType>): SetUsersActionType => ({ type: SET_USERS, users })
export const setCurrentPage = (currentPage: number): SetCurrentPageActionType => ({ type: SET_CURRENT_PAGE, currentPage })
export const setTotalUsersCount = (totalUsersCount: number): SetTotalUsersCountActionType => ({ type: SET_TOTAL_USERS_COUNT, count: totalUsersCount })
export const toggleIsFetching = (isFetching: boolean): ToggleIsFetchingActionType => ({ type: TOGGLE_IS_FETCHING, isFetching })
export const toggleFollowingProgress = (isFetching: boolean, userId: number): ToggleFollowingProgressActionType => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId
})
