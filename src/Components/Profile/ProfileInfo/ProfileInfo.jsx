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

        <div className={style.profileInfoWrapper}>
                <div className={style.avatarWrapper}>
                    <img src={avatarImg}/>
                    {isOwner && <div className={style.buttonGroup}>
                    <button
                        onClick={() => {setEditMode(true)}}
                    >edit</button>
                    <button>...</button>
                    </div>}
                    {!isOwner && <div className={style.buttonGroup}>
                        <button>messages</button>
                        <button>follow</button>
                    </div>}
                </div>

            <div className={style.profileStats}>
                <h3>{profile.fullName !== undefined ? profile.fullName : 'Name'}</h3>
                <ProfileInfoStatus
                    userId={profile.userId}
                    status={status}
                    updateUserStatus={updateUserStatus}
                />

                {!editMode ? <ProfileData profile={profile} isOwner={isOwner} /> :
                    <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit}/>
                }
            </div>
        </div>
    );
};
export default ProfileInfo;

const Contact = ({contTitle, contValue}) => {
    return <span><b>{contTitle}:</b><a> {contValue}</a></span>
};

const ProfileData = ({profile}) => {
    return (

        <div>
            <div className={style.col}>
                <span>{profile.userId !== undefined ? profile.userId : 'userId'}</span>
                <span>{profile.aboutMe !== null ? profile.aboutMe : 'aboutMe'}</span>
                <span>{profile.lookingForAJobDescription !== null ?
                    profile.lookingForAJobDescription :
                    'no job discription'}
                </span>
                <span>{profile.lookingForAJob ?
                    'LOOKS TO HIDE' :
                    'I have A Job'}
                </span>
            </div>

            <div className={style.contacts}>
                <title>Contacts</title>
                {Object.keys(profile.contacts).map(key => {
                    return <Contact key={key} contTitle={key} contValue={profile.contacts[key]}/>
                })}
            </div>
        </div>

    )
};

