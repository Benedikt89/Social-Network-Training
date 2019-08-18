import React from 'react';
import style from './Navigate.module.css'
import {NavLink} from "react-router-dom";
import FriendsNavContainer from "./FriendsNav/FriendsNavContainer";

const Navigate = (props) => {

    return (
        <nav className={style.Nav}>

            <div className={style.click}>
                <NavLink to="/Profile" activeClassName={style.active}>
                    <div className={style.item}>
                        Profile
                    </div>
                </NavLink>
            </div>

            <div className={style.click}>
                <NavLink to="/DialogsPage" activeClassName={style.active}>
                    <div className={style.item}>
                        Messages
                    </div>
                </NavLink>
            </div>

            <div className={style.click}>
                <NavLink to="/News" activeClassName={style.active}>
                    <div className={style.item}>
                        News
                    </div>
                </NavLink>
            </div>

            <div className={style.click}>
                <NavLink to="/Music" activeClassName={style.active}>
                    <div className={style.item}>
                        Music
                    </div>
                </NavLink>
            </div>

            <div className={style.click}>
                <NavLink to="/Friends" activeClassName={style.active}>
                    <div className={style.item}>
                        Friends
                    </div>
                </NavLink>
            </div>


            <div className={style.friends}>
                <FriendsNavContainer />
            </div>

            <div className={style.click}>
                <NavLink to="/Settings" activeClassName={style.active}>
                    <div className={style.item}>
                        Settings
                    </div>
                </NavLink>
            </div>
        </nav>
    );
}


export default Navigate;
