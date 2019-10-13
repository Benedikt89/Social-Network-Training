import React from 'react';
import style from './ProileInfo.module.css'
import avatarBig from '../../../assets/images/img_avatar_big.png'
import ProfileInfoStatus from "./ProfileInfoStatus";

const ProfileInfo = ({profile, status, updateUserStatus}) => {
    let avatarImg = avatarBig;
    if (profile.photos !== undefined) {
        if (profile.photos.large !== null) {
            avatarImg = profile.photos.large;
        }
    }

    return (
        <div className={style.Person}>
            <div className={style.Avatar}>
                <img src={avatarImg}/>
            </div>

            <div className={style.PersonStats}>
                <h3>{profile.fullName !== undefined ? profile.fullName: 'Name'}</h3>
                <ProfileInfoStatus
                    userId={profile.userId}
                    status={status}
                    updateUserStatus={updateUserStatus}
                />
                <p>{profile.userId !== undefined ? profile.userId : 'userId'}</p>
                <p>{profile.lookingForAJobDescription !== undefined ?
                        profile.lookingForAJobDescription:
                        'discription'}
                </p>
            </div>
        </div>
    );
};


export default ProfileInfo;
