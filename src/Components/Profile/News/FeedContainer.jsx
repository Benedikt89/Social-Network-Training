import React from 'react';
import style from './Feed.module.css'
import Post from "./Feed-line/Post";
import NewPost from "./NewPost/NewPost";
import Feed from "./Feed";
import StoreContext from "../../../StoreContext";

    const FeedContainer = (props) => {

        return (

            <StoreContext.Consumer>
                { store => {
                    let state = store.getState();

                    return <Feed
                        myFeed={state.feedReducer.myFeed}
                    />
                }
                }
            </StoreContext.Consumer>
        );
    };


export default FeedContainer;
