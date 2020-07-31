import React, { useState } from 'react';

import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import ProfileDataForm from './ProfileDataForm';
import styles from './ProfileInfo.module.css';

import userPhoto from "../../../assets/images/user.png";

const ProfileInfo = ({ profile, status, updateStatus, isOwner, savePhoto, saveProfile }) => {
    const [editMode, setEditMode] = useState(false);

    if (!profile) {
        return <Preloader />
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }

    const onSubmit = (formData) => {
        saveProfile(formData).then(
            () => {
                setEditMode(false);
            }
        );
    }

    return (
        <div>
            <div className={styles.descriptionBlock}>
                <div className={styles.imageWrapper}>
                    <img src={profile.photos.small || userPhoto} alt='user-small' className={styles.avatar} />
                    {isOwner && <input className={styles.loadButton} type={"file"} onChange={onMainPhotoSelected} />}

                </div>
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />

                {editMode
                    ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit} />
                    : <ProfileData goToEditMode={() => { setEditMode(true) }} profile={profile} isOwner={isOwner} />}

            </div>
        </div>
    )
}

const ProfileData = ({ profile, isOwner, goToEditMode }) => {
    return <div>
        {isOwner && <div><button onClick={goToEditMode}>Edit</button></div>}
        <div>
            <span className={styles.fullName}>Full name: </span>
            {profile.fullName}
        </div>

        <div>
            <span className={styles.profileJobStatus}>Loking for a job:</span>
            {profile.lookingForAJob ? "yes" : "no"}
            {profile.lookingForAJob && <div> <span className={styles.profileJobStatus}>My professional skills:</span> {profile.lookingForAJobDescription}</div>}
        </div>


        <div>
        <span className={styles.aboutMe}>About me:</span> {profile.aboutMe}
        </div>

        <div className={styles.listSocialContacts}>
            <p><b>Contacts:</b></p>
            {Object.entries(profile.contacts).map((item, index) =>
                <Contact key={index} contactTitle={item[0]} contactValue={item[1]} />
            )}
        </div>
    </div>
}
const Contact = ({ contactTitle, contactValue }) => {
    return <div>
        <span className={styles.socialContactName}>{contactTitle}: </span>
        {contactValue}
    </div>
}
export default ProfileInfo;
