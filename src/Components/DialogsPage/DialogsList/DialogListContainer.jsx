import React from 'react';
import DialogList from "./DialogList";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return{
        users: state.messagesReducer.users,
    }
};
let mapDispatchToProps = (dispatch) => {
    return{
    }
};
const DialogListContainer = connect(mapStateToProps, mapDispatchToProps)(DialogList);

export default DialogListContainer;
