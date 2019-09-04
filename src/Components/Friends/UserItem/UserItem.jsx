import React from 'react';
import style from './UserItem.module.css'
import {NavLink} from "react-router-dom";


const UserItem = (props) => {

    let path = "/DialogsPage/" + props.id;
    let avatar = props.avatarImg;
    let name = props.name;
    let followerd = props.followed;
    let status = props.status;

    return (
        <NavLink to={path} className={style.item}>
            <div className={style.Ava}>
                <img src={avatar}/>
            </div>

            <div className={style.Label}>
                {name}
            </div>

            <div className={style.Preview}>
                {status}
            </div>
            <div className={style.Preview}>
                {followerd}
            </div>

        </NavLink>

    );
}


export default UserItem;
