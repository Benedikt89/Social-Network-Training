import React from 'react';
import style from './UserItem.module.css'
import {NavLink} from "react-router-dom";
import userPhoto from "../../../assets/images/avatar-f.png";


const UserItem = ({user, followUserProgress, unFollow, followUser}) => {

    let avatar = user.photos.small != null ? user.photos.small : userPhoto;

    return (
        <div className={style.item}>
            <div className={style.Ava}>
                <NavLink to={'/Profile/'+user.id}>
                    <img src={avatar}/>
                </NavLink>
            </div>
            <div className={style.follow}>
                {!user.followed?
                    <button
                        disabled={followUserProgress.some(
                        id => id === user.id)}
                            onClick={()=>{followUser(user.id)}}>Follow</button>
                    :<button
                        disabled={followUserProgress.some(
                            id => id === user.id)}
                             onClick={()=>{unFollow(user.id)}}>UnFollow</button>}
            </div>
            <div className={style.Label}>
                {user.name !== undefined ? user.name : 'none'}
            </div>

            <div className={style.Preview}>
                <div>
                    {'id ' + user.id}
                </div>
                <div>
                    <span>{user.status ? user.status: 'no status'}</span>
                </div>
                <div>

                </div>
            </div>
        </div>

    );
}


export default UserItem;
