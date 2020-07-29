import React from 'react';

import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import styles from './ProfileInfo.module.css';

import userPhoto from "../../../assets/images/user.png";

const ProfileInfo = ({ isOwner, profile, status, updateStatus,savePhoto }) => {
    if (!profile) {
        return <Preloader />
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }

    return (
        <div>
            <div className={styles.descriptionBlock}>
                <img src={profile.photos.small || userPhoto} alt='user-small' className={styles.avatar} />
                {isOwner && <input type={"file"} onChange={onMainPhotoSelected} />}
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
                <div>
                    <span>fullName: </span>
                    <span>{profile.fullName}</span>
                    <p>{profile.contacts.twitter}</p>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;