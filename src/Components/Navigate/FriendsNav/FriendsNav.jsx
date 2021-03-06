import {NavLink} from "react-router-dom";
import React from "react";
import style from "./FriendsNav.module.css"

const FriendsNav = (props) => {

    return (
        <div className={style.friendsBlock}>

            <div className={style.ava}>
            <NavLink to="/Profile/1572">
                    <img src={props.friends[0].avatarImage}/>
            </NavLink>
            </div>

            <div className={style.ava}>
            <NavLink to="/Profile/2">
                <img src={props.friends[1].avatarImage}/>
            </NavLink>
            </div>

            <div className={style.ava}>
            <NavLink to="/Profile/1571">
                <img src={props.friends[2].avatarImage}/>
            </NavLink>
            </div>
        </div>
    );
}

export default FriendsNav;