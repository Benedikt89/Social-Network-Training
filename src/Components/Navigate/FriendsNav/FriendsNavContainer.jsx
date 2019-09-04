import React from "react";
import FriendsNav from "./FriendsNav";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return{
        friends: state.sidebarReducer.friends,
    }
};
let mapDispatchToProps = (dispatch) => {
    return{

    }
};
const FriendsNavContainer = connect(mapStateToProps, mapDispatchToProps)(FriendsNav);
export default FriendsNavContainer;