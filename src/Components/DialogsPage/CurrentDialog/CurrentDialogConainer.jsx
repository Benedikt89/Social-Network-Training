import React from 'react';
import {sendNewMessageActionCreator, textFieldChangeActionCreator} from "../../../redux/MessagesReducer";
import CurrentDialog from "./CurrentDialog";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return{
        messages: state.messagesReducer.messages,
        newMessageText: state.messagesReducer.newMessageText,
    }
};
let mapDispatchToProps = (dispatch) => {
    return{
        messageTextChange: (text) => {
            dispatch(textFieldChangeActionCreator(text))
        },
        sendMessage: ()=>{
            dispatch(sendNewMessageActionCreator())
        },
    }
};
const CurrentDialogContainer = connect(mapStateToProps, mapDispatchToProps)(CurrentDialog);


export default CurrentDialogContainer;
