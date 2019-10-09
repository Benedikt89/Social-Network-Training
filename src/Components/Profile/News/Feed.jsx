import React from 'react';
import style from './Feed.module.css'
import Post from "./Feed-line/Post";
import NewPost from "./NewPost/NewPost";
import NewPostContainer from "./NewPost/NewPostContainer";

    const Feed = React.memo(props => {

        let myFeedPosts = props.myFeed.map(
            post => <Post
                key={post.id}
                message={post.content}
                avatar={post.avatarImage}
                likeCount={post.likeCount}
            />
        );
        console.log('render');
        return (


            <div>
                <h4>my posts</h4>

                <NewPostContainer    />

                {myFeedPosts}

            </div>

        );
    });


export default Feed;
