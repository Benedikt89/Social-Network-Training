import React from 'react';
import style from './CurrentDialog.module.css'
import Message from "./MessageItem/Message";

const CurrentDialog = (props) => {

    let newMessageElement = React.createRef();

    let messageTextChange = () => {
        let text = newMessageElement.current.value;
        props.textFieldMessage(text);
    };

    let currentMessages = props.messages.map(unit =>
        <Message messageContent={unit.messageContent}
                 avatarImage={unit.avatarImage}
        />);

    return (
        <div className={style.DialogArea}>
            <div className={style.NewPost}>

                <div className={style.userAvatar}>
                    <img src={props.messages[0].avatarImage} />
                </div>

                <textarea
                    onChange={messageTextChange}
                    value={props.newMessageText}
                    className={style.textArea}
                    ref={newMessageElement}
                ></textarea>


                <div className={style.buttons}>
                    <button onClick={() => {props.sendNewMessage()}} className={style.sendB} >Send</button>
                    <button className={style.attachB}>Attach</button>
                </div>
            </div>

            {currentMessages}

        </div>
    );
};


export default CurrentDialog;
