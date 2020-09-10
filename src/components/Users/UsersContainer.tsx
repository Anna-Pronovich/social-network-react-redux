import React from 'react';
import { connect,DefaultRootState } from "react-redux";
import { compose } from 'redux';
import { setCurrentPage, toggleFollowingProgress } from "../../redux/actionCreators/user-action-creator";
import { follow, unfollow, requestUsers } from "../../redux/redux-thunk/user-thunk";
import { UserType } from '../../types/types';
import { AppStateType } from '../../redux/redux-store';

import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount, getUsers,
} from "../../redux/users-selectors";

import Users from "./Users";

import Preloader from "../common/Preloader/Preloader";


type MapStatePropsType = {
    currentPage: number
    itemsPerPage: number
    isFetching: boolean
    totalUsersCount: number
    users: Array<UserType>
    followingInProgress: Array<number>
}

type MapDispatchPropsType = {
    getUsers: (currentPage: number, pageSize: number) => void
    unfollow: (userId: number) => void
    follow: (userId: number) => void
}

type OwnPropsType = {
    pageTitle: string
}

type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType

class UsersContainer extends React.Component<PropsType> {
    componentDidMount() {
        const { currentPage, itemsPerPage } = this.props;
        this.props.getUsers(currentPage, itemsPerPage);
    }

    onPageChanged = (pageNumber: number) => {
        const { itemsPerPage } = this.props;
        this.props.getUsers(pageNumber, itemsPerPage);
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users
                totalUsersCount={this.props.totalUsersCount}
                itemsPerPage={this.props.itemsPerPage}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: getUsers(state),
        itemsPerPage: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

export default compose(
        // TStateProps = {}, TDispatchProps = {}, TOwnProps = {}, State = DefaultRootState
        connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(
            mapStateToProps,
            {follow, unfollow, getUsers: requestUsers})
    )(UsersContainer)
//     connect(mapStateToProps, { follow, unfollow, setCurrentPage, toggleFollowingProgress, getUsers: requestUsers }),
// )(UsersContainer);