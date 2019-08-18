import React from 'react';
import {sendNewMessageActionCreator, textFieldChangeActionCreator} from "../../../redux/MessagesReducer";
import CurrentDialog from "./CurrentDialog";
import StoreContext from "../../../StoreContext";

const CurrentDialogContainer = (props) => {

    return (
        <StoreContext.Consumer>
            {store => {
                let state = store.getState().messagesReducer;
                let messageTextChange = (text) => {
                    store.dispatch(textFieldChangeActionCreator(text));
                };
                let sendMessage = () => {store.dispatch(sendNewMessageActionCreator())};

                return <CurrentDialog
                    messages={state.messages}
                    newMessageText={state.newMessageText}
                    sendMessage={sendMessage}
                    messageTextChange={messageTextChange}
                />
            }
            }
        </StoreContext.Consumer>
    );
};


export default CurrentDialogContainer;
