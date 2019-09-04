import React from 'react';
import {addPostActionCreator, onPostChangeActionCreator} from "../../../../redux/FeedReducer";
import NewPost from "./NewPost";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return{
        myFeed: state.feedReducer.myFeed,
        newPostText: state.feedReducer.newPostText,
    }
};
let mapDispatchToProps = (dispatch) => {
    return{
        postChange: (text) => {
            dispatch(onPostChangeActionCreator(text));
        },
        addPost: () => {
            dispatch(addPostActionCreator());
        },
    }
};
const NewPostContainer = connect(mapStateToProps, mapDispatchToProps)(NewPost);


export default NewPostContainer;
