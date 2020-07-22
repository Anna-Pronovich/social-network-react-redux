import React from 'react';
import { NavLink } from "react-router-dom";

import userPhoto from "../../assets/images/user.png";
import styles from "./users.module.css";

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>
        <div className={styles.pagination}>
            {pages.map(page => {
                return <span className={`${styles.page} ${props.currentPage === page && styles.selectedPage}`}
                    onClick={(e) => { props.onPageChanged(page) }}>{page}</span>
            })}
        </div>
        <div className={styles.usersContainer}>
            {
                props.users.map(user => <div key={user.id} className={styles.userItem}>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + user.id}>

                                <img src={user.photos.small !== null ? user.photos.small : userPhoto}
                                    className={styles.userPhoto} alt='avatar' />
                            </NavLink>
                        </div>
                        <div>
                            {user.followed
                                ? <button disabled={props.followingInProgress.some(id => id === user.id)}
                                onClick={() => { props.unfollow(user.id) }}>Unfollow</button>
                                : <button disabled={props.followingInProgress.some(id => id === user.id)}
                                onClick={() => { props.follow(user.id) }}>Follow</button>}

                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{user.name}</div>
                            <div>{user.status}</div>
                        </span>
                        <span>
                            <div>{"u.location.country"}</div>
                            <div>{"u.location.city"}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>

    </div>
}

export default Users;