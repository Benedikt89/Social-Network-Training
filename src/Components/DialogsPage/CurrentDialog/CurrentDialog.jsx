import React from 'react';
import style from './CurrentDialog.module.css'
import Message from "./MessageItem/Message";

const CurrentDialog = (props) => {

    let newMessageElement = React.createRef();

    let onMessageTextChange = () => {
        let text = newMessageElement.current.value;
        props.messageTextChange(text);
    };

    let onSendMessage = () => {props.sendMessage();};

    let currentMessages = props.messages.map(unit =>
        <Message
            key={unit.id}
            messageContent={unit.messageContent}
            avatarImage={unit.avatarImage}
        />);

    return (
        <div className={style.DialogArea}>
            <div className={style.NewPost}>

                <div className={style.userAvatar}>
                    <img src={props.messages[0].avatarImage} />
                </div>

                <textarea
                    onChange={onMessageTextChange}
                    value={props.newMessageText}
                    className={style.textArea}
                    ref={newMessageElement}
                ></textarea>


                <div className={style.buttons}>
                    <button onClick={onSendMessage} className={style.sendB} >Send</button>
                    <button className={style.attachB}>Attach</button>
                </div>
            </div>

            {currentMessages}

        </div>
    );
};


export default CurrentDialog;
