import React from 'react';
import style from './Friends.module.css';
import UserItem from "./UserItem/UserItem";
import Paginator from "../Common/Paginator/Paginator";


let Friends = ({users, followUserProgress, followUser, unFollow, selectPage, currentPage, pageSize, totalUsersCount}) => {

    let UserItems = users.map(user =>
        <div key={user.id}>
            <UserItem
                user={user}
                followUserProgress={followUserProgress}
                followUser={followUser}
                unFollow={unFollow}
            />
        </div>);

    return (
        <div className={style.item}>
            <h2 className={style.item}>FRIENDS</h2>

            <Paginator
                selectPage={selectPage}
                currentPage={currentPage}
                pageSize={pageSize}
                totalUsersCount={totalUsersCount}/>

            {UserItems}
        </div>
    );
};

export default Friends;
