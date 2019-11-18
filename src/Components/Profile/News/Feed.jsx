import React from 'react';
import Post from "./Feed-line/Post";
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
            <NewPostContainer/>
            {myFeedPosts}
        </div>
    );
});


export default Feed;
