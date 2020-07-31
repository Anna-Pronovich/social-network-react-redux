import React from "react";
import { reduxForm } from "redux-form";

import { createField, Input, Textarea } from "../../common/FormControls/FormControls";
import styles from './ProfileInfo.module.css';


const ProfileDataForm = ({ handleSubmit, profile, error }) => {

  return <form onSubmit={handleSubmit}>
    <div><button>save</button></div>
    {error && <div className={styles.formSummaryError}>
      {error}
    </div>
    }
    <div>
      <span className={styles.fullName}>Full name: </span>{createField("Full name", "fullName", [], Input)}
    </div>
    <div>
      <span className={styles.profileJobStatus}>Loking for a job:</span> {createField("", "lookingForAJob", [], Input, { type: "checkbox" })}
    </div>

    <div>
      <span className={styles.profileJobStatus}>My professional skills:</span>
      {createField("My professional skills", "lookingForAJobDescription", [], Textarea)}
    </div>

    <div>
      <span className={styles.aboutMe}>About me:</span>
      {createField("About me", "aboutMe", [], Textarea)}
    </div>
    <div>
      <b>Contacts</b>:
            {Object.keys(profile.contacts).map(key => {
        return <div key={key}>
          <span className={styles.socialContactName}>{key}: {createField(key, "contacts." + key, [], Input)}</span>
        </div>
      })}
    </div>
  </form>
}

const ProfileDataFormReduxForm = reduxForm({ form: 'edit-profile' })(ProfileDataForm)

export default ProfileDataFormReduxForm;