import React from 'react';
import {addPostActionCreator, onPostChangeActionCreator} from "../../../../redux/FeedReducer";
import NewPost from "./NewPost";
import StoreContext from "../../../../StoreContext";



const NewPostContainer = (props) => {



    return (
        <StoreContext.Consumer>
            { store => {
                let newPostText = store.getState().feedReducer.newPostText;
                let postChange = (text) => {
                    store.dispatch(onPostChangeActionCreator(text));
                };

                let addPost = () => {
                    store.dispatch(addPostActionCreator());
                };

                return <NewPost
                    newPostText={newPostText}
                    addPost={addPost}
                    postChange={postChange}
                />
            }
            }
        </StoreContext.Consumer>
    );
};


export default NewPostContainer;
