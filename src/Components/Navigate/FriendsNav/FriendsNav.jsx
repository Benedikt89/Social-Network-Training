import {NavLink} from "react-router-dom";
import React from "react";
import style from "./FriendsNav.module.css"

const FriendsNav = (props) => {

    return (
        <div className={style.friendsBlock}>

            <div className={style.ava}>
            <NavLink to="/Profile/userid">
                    <img src={props.friends[0].avatarImage}/>
            </NavLink>
            </div>

            <div className={style.ava}>
            <NavLink to="/Profile/userid">
                <img src={props.friends[1].avatarImage}/>
            </NavLink>
            </div>

            <div className={style.ava}>
            <NavLink to="/Profile/userid">
                <img src={props.friends[2].avatarImage}/>
            </NavLink>
            </div>
        </div>
    );
}

export default FriendsNav;