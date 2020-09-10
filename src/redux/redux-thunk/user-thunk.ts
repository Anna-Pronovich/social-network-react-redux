import { usersAPI } from "../../api/api";
import {
  toggleIsFetching,
  setCurrentPage,
  setUsers,
  setTotalUsersCount,
  toggleFollowingProgress,
  followSuccess,
  unfollowSuccess
} from "../actionCreators/user-action-creator"

export const requestUsers = (page: number, pageSize: number) => {
  return async (dispatch: any) => {
      dispatch(toggleIsFetching(true));
      dispatch(setCurrentPage(page));

      const data = await usersAPI.getUsers(page, pageSize)
      dispatch(toggleIsFetching(false));
      dispatch(setUsers(data.items));
      dispatch(setTotalUsersCount(data.totalCount));
  }
}
const followUnfollowFlow = async (dispatch: any, userId: number, apiMethod: any, actionCreator: any) => {
  dispatch(toggleFollowingProgress(true, userId));
  let response = await apiMethod(userId);

  if (response.data.resultCode === 0) {
      dispatch(actionCreator(userId));
  }
  dispatch(toggleFollowingProgress(false, userId));
}

export const follow = (userId: number) => async (dispatch: any) => (followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), followSuccess))

export const unfollow = (userId: number) => async (dispatch: any) =>
  (followUnfollowFlow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), unfollowSuccess));