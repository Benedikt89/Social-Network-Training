import React from 'react';
import style from './DialogItem.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {

    let path = "/DialogsPage/" + props.id;
    let avatar = props.avatarImg;
    let name = props.name;

    return (
        <NavLink to={path} className={style.item}>
            <div className={style.Ava}>
                <img src={avatar}/>
            </div>
            <div className={style.label}>
                {name}
            </div>
            <div className={style.Preview}>
                'Oh bois!!!!!!!!!!!!!'
            </div>
        </NavLink>
    );
};


export default DialogItem;
