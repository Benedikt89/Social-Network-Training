import React from 'react';
import style from './DialogsPage.module.css';
import CurrentDialogContainer from "./CurrentDialog/CurrentDialogConainer";
import DialogListContainer from "./DialogsList/DialogListContainer";
import StoreContext from "../../StoreContext";



    const DialogsPage = (props) => {


        return (
                    <div className={style.DialogPage}>
                        <DialogListContainer/>
                        <CurrentDialogContainer/>
                    </div>
        );
    };


export default DialogsPage;
