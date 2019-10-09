import React from 'react';
import style from './UserItem.module.css'
import {NavLink} from "react-router-dom";


const UserItem = (props) => {

    let path = "/DialogsPage/" + props.id;
    let avatar = props.avatarImg;
    let name = props.name;

    return (
        <div to={path} className={style.item}>
            <div className={style.Ava}>
                <NavLink to={'/Profile/'+props.id}>
                    <img src={avatar}/>
                </NavLink>
            </div>
            <div className={style.follow}>
                {!props.followed?
                    <button
                        disabled={props.followUserProgress.some(
                        id => id === props.id)}
                            onClick={()=>{props.followUser(props.id)}}>Follow</button>
                    :<button
                        disabled={props.followUserProgress.some(
                            id => id === props.id)}
                             onClick={()=>{props.unFollow(props.id)}}>UnFollow</button>}
            </div>
            <div className={style.Label}>
                {name}
            </div>

            <div className={style.Preview}>
                <div>
                    {'id ' + props.id}
                </div>
                <div>
                    <span>{props.status?props.status: 'no status'}</span>
                </div>
                <div>

                </div>
            </div>
        </div>

    );
}


export default UserItem;
