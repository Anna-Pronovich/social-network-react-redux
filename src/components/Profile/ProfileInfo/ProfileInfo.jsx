import React from 'react';

import Preloader from "../../common/Preloader/Preloader";

import s from './ProfileInfo.module.css';

const ProfileInfo = ({profile}) => {
    if (!profile) {
        return <Preloader />
    }

    return (
        <div>
            <div>
                <img
                    src='https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350' alt='user' />
            </div>
            <div className={s.descriptionBlock}>
                <img src={profile.photos.small} />
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