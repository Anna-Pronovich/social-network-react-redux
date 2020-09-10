import { AppStateType } from '../redux-store';
import { Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';

import { usersAPI } from "../../api/api";
import {
  toggleIsFetching,
  setCurrentPage,
  setUsers,
  setTotalUsersCount,
  toggleFollowingProgress,
  followSuccess,
  unfollowSuccess
} from "../actionCreators/user-action-creator";
import { usersActionTypes } from "../actionTypes"

type DispatchType = Dispatch<usersActionTypes>
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, usersActionTypes>

export const requestUsers = (page: number, pageSize: number): ThunkType => {
  return async (dispatch) => {
    dispatch(toggleIsFetching(true));
    dispatch(setCurrentPage(page));

    const data = await usersAPI.getUsers(page, pageSize)
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount));
  }
}
const followUnfollowFlow = async (dispatch: DispatchType,
  userId: number,
  apiMethod: any,
  actionCreator: (userId: number) => usersActionTypes) => {
  dispatch(toggleFollowingProgress(true, userId));
  let response = await apiMethod(userId);

  if (response.data.resultCode === 0) {
    dispatch(actionCreator(userId));
  }
  dispatch(toggleFollowingProgress(false, userId));
}

export const follow = (userId: number): ThunkType => async (dispatch) => (followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), followSuccess))

export const unfollow = (userId: number): ThunkType => async (dispatch) =>
  (followUnfollowFlow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), unfollowSuccess));