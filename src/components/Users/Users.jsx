import React from 'react';

import User from "./User/User";
import Paginator from "../common/Paginator/Paginator";

import styles from "./users.module.css";

const Users = ({ currentPage, totalUsersCount, pageSize, onPageChanged, users, ...props }) => (
    <div>
        <Paginator currentPage={currentPage} onPageChanged={onPageChanged}
            totalUsersCount={totalUsersCount} pageSize={pageSize} />
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