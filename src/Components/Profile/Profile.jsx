import React from 'react';
import style from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import FeedContainer from "./News/FeedContainer";
import Preloader from "../Common/Preloader";

 const Profile = (props) => {

        return (
            <div className={style.Profile}>

                <div className={style.Head}>
                    <img
                        src="https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
                </div>

                {props.profile.fullName === undefined ? <Preloader/> :
                    <ProfileInfo {...props}/>
                }
                <FeedContainer />

            </div>
        );
    };


export default Profile;
