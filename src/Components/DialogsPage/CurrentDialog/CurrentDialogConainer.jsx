import React from 'react';
import {sendNewMessage} from "../../../redux/MessagesReducer";
import CurrentDialog from "./CurrentDialog";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return{
        messages: state.messagesReducer.messages,
    }
};

const CurrentDialogContainer = connect(mapStateToProps, {sendNewMessage})(CurrentDialog);


export default CurrentDialogContainer;
