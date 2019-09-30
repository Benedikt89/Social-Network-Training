import React from 'react';
import {addPost} from "../../../../redux/FeedReducer";
import NewPost from "./NewPost";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return{
        myFeed: state.feedReducer.myFeed,
        newPostText: state.feedReducer.newPostText,
    }
};

const NewPostContainer = connect(mapStateToProps, {addPost})(NewPost);


export default NewPostContainer;
