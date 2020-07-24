import React from 'react';
import { NavLink } from "react-router-dom";

import userPhoto from "../../../assets/images/user.png";
import styles from "./user.module.css";


const User = ({ user, followingInProgress, unfollow, follow }) => {
  return (
    <div className={styles.userItem}>

      <NavLink to={'/profile/' + user.id}>

        <img src={user.photos.small !== null ? user.photos.small : userPhoto}
          className={styles.userPhoto} alt='avatar' />
      </NavLink>

      <div>
        {user.followed
          ? <button disabled={followingInProgress.some(id => id === user.id)}
            onClick={() => { unfollow(user.id) }}>Unfollow</button>
          : <button disabled={followingInProgress.some(id => id === user.id)}
            onClick={() => { follow(user.id) }}>Follow</button>}

      </div>

      <div>
        <div>{user.name}</div>
        <div>{user.status}</div>
      </div>

    </div>)
}

export default User;