import React, {useState, useEffect} from 'react';
import style from './ProileInfo.module.css'
import avatarBig from '../../../assets/images/img_avatar_big.png'
import ProfileInfoStatus from "./ProfileInfoStatus";
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = ({profile, status, updateUserStatus, saveProfile, authorizedId}) => {

    let [editMode, setEditMode] = useState(false);

    let avatarImg = avatarBig;
    if (profile.photos !== undefined) {
        if (profile.photos.large !== null) {
            avatarImg = profile.photos.large;
        }
    }
    let isOwner = profile.userId === authorizedId;

    let onSubmit = (formData) => {
        let newProfileData = {
            aboutMe: profile.aboutMe,
            contacts: profile.contacts,
            lookingForAJob: profile.lookingForAJob,
            lookingForAJobDescription: profile.lookingForAJobDescription,
            fullName: profile.fullName
        };
        saveProfile({...newProfileData, ...formData}).then(() => {
            setEditMode(false)
        })
    };
    return (

        <div className={style.Person}>
            <div className={style.Avatar}>
                <img src={avatarImg}/>
                <ProfileInfoStatus
                    userId={profile.userId}
                    status={status}
                    updateUserStatus={updateUserStatus}
                />
            </div>


            {!editMode ? <ProfileData profile={profile} isOwner={isOwner} goToEditMode={() => {
                    setEditMode(true)
                }}/> :
                <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit}/>}

        </div>
    );
};
export default ProfileInfo;

const Contact = ({contTitle, contValue}) => {
    return <div><b>{contTitle}</b>: {contValue}</div>
};

const ProfileData = ({profile, isOwner, goToEditMode}) => {
    return (

        <div className={style.PersonStats}>
            {isOwner && <button onClick={goToEditMode}>Edit</button>}
            <div>
                <h3>{profile.fullName !== undefined ? profile.fullName : 'Name'}</h3>

                <p>{profile.userId !== undefined ? profile.userId : 'userId'}</p>
                <p>{profile.aboutMe !== null ? profile.aboutMe : 'aboutMe'}</p>
                <p>{profile.lookingForAJobDescription !== null ?
                    profile.lookingForAJobDescription :
                    'no job discription'}
                </p>
                <p>{profile.lookingForAJob ?
                    'LOOKS TO HIDE' :
                    'I have A Job'}
                </p>
            </div>
            <div>
                <h4>Contacts</h4>
                {Object.keys(profile.contacts).map(key => {
                    return <Contact key={key} contTitle={key} contValue={profile.contacts[key]}/>
                })}
            </div>
        </div>

    )
};

