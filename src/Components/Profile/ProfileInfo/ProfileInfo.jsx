import React from 'react';
import style from './ProileInfo.module.css'
import avatarBig from '../../../assets/images/img_avatar_big.png'
import ProfileInfoStatus from "./ProfileInfoStatus";

const ProfileInfo = (props) => {
    let avatarImg = avatarBig;
    if (props.profile.photos !== undefined) {
        if (props.profile.photos.large !== null) {
            avatarImg = props.profile.photos.large;
        }
    }

    return (
        <div className={style.Person}>
            <div className={style.Avatar}>
                <img src={avatarImg}/>
            </div>

            <div className={style.PersonStats}>
                <h3>{props.profile.fullName !== undefined ? props.profile.fullName: 'Name'}</h3>
                <ProfileInfoStatus
                    userId={props.profile.userId}
                    status={props.status}
                    updateUserStatus={props.updateUserStatus}
                />
                <p>{props.profile.userId !== undefined ? props.profile.userId : 'userId'}</p>
                <p>{props.profile.lookingForAJobDescription !== undefined ?
                        props.profile.lookingForAJobDescription:
                        'discription'}
                </p>
            </div>
        </div>
    );
};


export default ProfileInfo;
