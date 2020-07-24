import React from 'react';

import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import styles from './ProfileInfo.module.css';

const ProfileInfo = ({ profile, status, updateStatus }) => {
    if (!profile) {
        return <Preloader />
    }

    return (
        <div>
            <div className={styles.descriptionBlock}>
                <img src={profile.photos.small} alt='user-small' />
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