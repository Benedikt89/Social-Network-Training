import React from 'react';
import style from './Friends.module.css';
import UserItem from "./UserItem/UserItem";


let Friends = (props) => {

    let UserItems = props.users.map(user =>
        <div key={user.id + 10}>
            <UserItem
                name={user.name}
                avatarImg={user.avatarImage}
                followed={user.followed}
                status={user.status}
                id={user.id}
            />
        </div>);

    return (
        <div className={style.item}>
            <h2 className={style.item}>FRIENDS</h2>

            {UserItems}

        </div>
    );
}


export default Friends;
