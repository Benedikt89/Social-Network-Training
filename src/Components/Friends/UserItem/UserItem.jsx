import React from 'react';
import style from './UserItem.module.css'
import {NavLink} from "react-router-dom";


const UserItem = (props) => {

    let path = "/DialogsPage/" + props.id;
    let avatar = props.avatarImg;
    let name = props.name;
    let followed = props.followed;

    return (
        <div to={path} className={style.item}>
            <div className={style.Ava}>
                <NavLink to={'/Profile/'+props.id}>
                    <img src={avatar}/>
                </NavLink>
            </div>
            <div className={style.follow}>
                {!props.followed?<button onClick={()=>{props.followUser(props.id)}}>Follow</button>:
               <button onClick={()=>{props.unFollow(props.id)}}>UnFollow</button>}
            </div>
            <div className={style.Label}>
                {name}
            </div>

            <div className={style.Preview}>
                {'id ' + props.id}
            </div>
            <div className={style.Preview2}>
                {followed}
            </div>
            <div className={style.Preview3}>
                {props.age}
            </div>

        </div>

    );
}


export default UserItem;
