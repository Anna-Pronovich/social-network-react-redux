import React from 'react';

import User from "./User/User";
import {UserType} from '../../types/types';

import Paginator from "../common/Paginator/Paginator";

import styles from "./users.module.css";

type PropsType = {
    totalUsersCount: number
    itemsPerPage: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    users: Array<UserType>
    followingInProgress: Array<number>
    unfollow: (userId: number) => void
    follow: (userId: number) => void
}


const Users: React.FC<PropsType> = ({ currentPage, totalUsersCount, itemsPerPage, onPageChanged, users, ...props }) => (
    <div>
        <Paginator currentPage={currentPage} onPageChanged={onPageChanged}
            totalItemsCount={totalUsersCount} itemsPerPage={itemsPerPage} />
        <div className={styles.usersContainer}>
            {
                users.map(user =>
                    <User
                        user={user}
                        key={user.id}
                        follow={props.follow}
                        unfollow={props.unfollow}
                        followingInProgress={props.followingInProgress}
                    />)
            }
        </div>

    </div>
)

export default Users;