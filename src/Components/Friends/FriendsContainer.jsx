import React from 'react';
import Friends from "./Friends";
import {connect} from "react-redux";
import {followActionCreator, unfollowActionCreator} from "../../redux/FriendsReducer";

let mapStateToProps = (state) => {
    return{
        users: state.friendsReducer.users,
    }
};
let mapDispatchToProps = (dispatch) => {
    return{
        followActionCreator: (userId) => {
            dispatch(followActionCreator(userId));
        },
        unfollowActionCreator: (userId) => {
            dispatch(unfollowActionCreator(userId));
        },
    }
};

let FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends);


export default FriendsContainer;
