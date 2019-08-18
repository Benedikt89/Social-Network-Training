import React from 'react';
import DialogList from "./DialogList";
import StoreContext from "../../../StoreContext";

const DialogListContainer = (props) => {

    return (
        <StoreContext.Consumer>
            {(store) => {

                let users = store.getState().messagesReducer.users;

                return <DialogList users={users}/>
            }
            }
        </StoreContext.Consumer>
    );
};


export default DialogListContainer;
