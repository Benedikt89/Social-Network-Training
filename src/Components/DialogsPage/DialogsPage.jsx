import React from 'react';
import style from './DialogsPage.module.css';
import DialogList from "./DialogsList/DialogList";
import CurrentDialog from "./CurrentDialog/CurrentDialog";



    const DialogsPage = (props) => {


        return (
            <div className={style.DialogPage}>


                <DialogList users={props.users}/>
                <CurrentDialog
                    textFieldMessage={props.textFieldMessage}
                    newMessageText={props.newMessageText}
                    sendNewMessage={props.sendNewMessage}
                    messages={props.messages}/>


            </div>
        );
    }


export default DialogsPage;
