import React from 'react';
import style from './Friends.module.css';
import UserItem from "./UserItem/UserItem";
import userPhoto from "./../../assets/images/avatar-f.png";


let Friends = (props) => {

    let UserItems = props.users.map(user =>
        <div key={user.id + 101}>
            <UserItem
                name={user.name !== undefined ? user.name : 'none'}
                avatarImg={user.photos.small != null ? user.photos.small : userPhoto}
                followed={user.followed}
                profession={user.profession}
                id={user.id}
                age={user.age}
                followUser={props.followUser}
                unFollow={props.unFollow}
            />
        </div>);

    let classNameForPages = (i) => props.currentPage !== i ? style.pageNumber : style.pageNumberSelected;

    let pages = [];
    for (let i = 0; i < props.pagesCount; i++) {
        pages.push(i + 1);
    }
    return (
        <div className={style.item}>
            <h2 className={style.item}>FRIENDS</h2>

            {pages.map(p => <span
                className={classNameForPages(p)}
                onClick={() => {
                    props.selectPage(p)
                }}
            >{p}</span>)}

            {UserItems}
        </div>
    );
};

export default Friends;
