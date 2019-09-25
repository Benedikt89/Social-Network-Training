import React from 'react';
import style from './Post.module.css'


const Post = (props) => {

    return (

            <div className={style.item}>
                <img src={props.avatar}/>
                {props.message}
                <div>
                <span>likes {props.likeCount}</span>
                </div>
            </div>
    );
}


export default Post;
