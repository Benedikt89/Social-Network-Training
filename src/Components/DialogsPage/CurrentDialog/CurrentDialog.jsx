import React from 'react';
import style from './CurrentDialog.module.css'
import Message from "./MessageItem/Message";
import {Field, reduxForm} from "redux-form";


const CurrentDialog = (props) => {

    const onSubmit = (formData) => {
        console.log(formData);
        props.sendNewMessage(formData.messageField);
    };

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

                <MessageReduxForm onSubmit={onSubmit}/>

            </div>

            {currentMessages}

        </div>
    );
};


const MessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field
                className={style.textArea}
                name={"messageField"} component={"input"}
            />
            <div className={style.buttons}>
                <button className={style.sendB} >Send</button>
            </div>
        </form>
    )
};

const MessageReduxForm = reduxForm({form: 'message'})(MessageForm);

export default CurrentDialog;
