import React from 'react';
import style from './Post.module.css'


const Post = (props) => {

    return (

            <div className={style.item}>
                <div className={style.row}>
                    <img src={props.avatar}/>
                    <span>OWNER</span>
                </div>
                <div className={style.postBody}>
                    {props.message}
                </div>
                <div className={style.row}>
                    <span>likes: </span>
                    <span>{props.likeCount}</span>
                </div>
            </div>
    );
};


export default Post;
