import React from 'react';

import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div>
            {/* <div>
                <img
                    src='https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350' alt='banner' />
            </div> */}
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.small} alt='user-small'/>
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
                <div>
                    <span>fullName: </span>
                    <span>{props.profile.fullName}</span>
                    <p>{props.profile.contacts.twitter}</p>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;