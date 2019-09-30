import React from 'react';
import style from './Message.module.css'


const Message = (props) => {
    return (
        <div className={style.Message}>
            <div className={style.Avatar}>
                <img src={props.avatarImage}/>
            </div>

            <div className={style.MessageArea}>
                {props.messageContent}

            </div>

        </div>
    );
};


export default Message;
