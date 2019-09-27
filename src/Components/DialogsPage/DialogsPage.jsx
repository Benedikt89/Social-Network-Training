import React from 'react';
import style from './DialogsPage.module.css';
import CurrentDialogContainer from "./CurrentDialog/CurrentDialogConainer";
import DialogListContainer from "./DialogsList/DialogListContainer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";



    const DialogsPage = (props) => {


        return (
                    <div className={style.DialogPage}>
                        <DialogListContainer/>
                        <CurrentDialogContainer/>
                    </div>
        );
    };

let AuthRedirect = withAuthRedirect(DialogsPage);

export default AuthRedirect;
