import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import FeedContainer from "./News/FeedContainer";
import Preloader from "../Common/Preloader";

 const Profile = (props) => {

        return (
            <div>

                {props.profile.fullName === undefined ? <Preloader/> :
                    <ProfileInfo {...props}/>
                }
                <FeedContainer />

            </div>
        );
    };


export default Profile;
