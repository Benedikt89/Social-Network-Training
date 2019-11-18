import React from 'react';
import style from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import FeedContainer from "./News/FeedContainer";
import Preloader from "../Common/Preloader";

 const Profile = (props) => {

        return (
            <div className={style.Profile}>

                {props.profile.fullName === undefined ? <Preloader/> :
                    <ProfileInfo {...props}/>
                }
                <FeedContainer />

            </div>
        );
    };


export default Profile;
