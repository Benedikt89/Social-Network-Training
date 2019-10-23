import React from 'react';
import style from './ProileInfo.module.css'
import {Form, reduxForm} from "redux-form";
import {createField, Input, Textarea} from "../../Common/FormsControls/FormsControls";

const ProfileDataEdit = ({handleSubmit, profile, error}) => {



    return (
        <Form onSubmit={handleSubmit} className={style.PersonStats}>
            <button onClick={handleSubmit}>Save</button>
            {error && <div>
                <span className={style.error}>{error}</span>
            </div>}

            <h3><b>Name</b>{createField('Name', "fullName", [], Input)}</h3>

            <div><b>About Me</b>{createField('AboutMe', "aboutMe", [], Input)}</div>

            <div><b>Looking For A Job</b>
                {createField('', "lookingForAJob", [], Input, {type: 'checkbox'})}
            </div>
            <div><b>looking For A Job Description</b>
                {createField('lookingForAJobDescription', "lookingForAJobDescription", [], Textarea)}
            </div>

            <div>
                <b>Contacts</b>
                {Object.keys(profile.contacts).map(key => {
                    return <div key={key}>{createField(key, "contacts."+ key, [], Input)}</div>
                })}
            </div>
        </Form>
    )
};

const ProfileDataForm = reduxForm({form: 'profile'})(ProfileDataEdit);

export default ProfileDataForm;