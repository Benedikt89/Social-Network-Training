import React from 'react';
import style from './ProileInfo.module.css'
import avatarBig from '../../../assets/images/img_avatar_big.png'

const ProfileInfo = (props) => {
    return (
        <div className={style.Person}>
            <div className={style.Avatar}>
                <img src={props.profile.photos !== undefined
                    ? props.profile.photos.large : avatarBig}/>

            </div>

            <div className={style.PersonStats}>
                <h3>{props.profile.fullName !== undefined ? props.profile.fullName: 'Name'}</h3>
                <p>{props.profile.aboutMe !== undefined ? props.profile.aboutMe: 'About'}</p>
                <p>{props.profile.userId !== undefined ? props.profile.userId : 'userId'}</p>
                <p>{props.profile.lookingForAJobDescription !== undefined ? props.profile.lookingForAJobDescription: 'discription'}</p>
            </div>
        </div>
    );
}


export default ProfileInfo;
