import React from 'react';
import DialogList from "./DialogList";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        users: state.messagesReducer.users,
    }
};
const DialogListContainer = connect(mapStateToProps, {})(DialogList);

export default DialogListContainer;
