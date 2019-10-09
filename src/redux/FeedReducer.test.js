import feedReducer, {addPost, deletePost} from './FeedReducer';
import React from 'react';

let state = {
    myFeed: [
        {
            id: 9001,
            userId: 3,
            content: 'OMG1111',
            likeCount: 22,
            avatarImage: 'https://www.w3schools.com/howto/img_avatar2.png',
        },
        {
            id: 9002,
            userId: 4,
            content: 'OMG NOOOOOOOOOO11',
            likeCount: 2,
            avatarImage: 'https://playjoor.com/assets/avatar/jenny.jpg',
        },
    ],
};

it('new post should be added', () => {
    //test data

    let action = addPost('test');

    //action
    let newState = feedReducer(state,action);

    //expectation
    expect(newState.myFeed.length).toBe(3);
});

it('message of new post should be correct', () => {
    //test data

    let action = addPost('testdklse soem osm, oim @@@34345');

    //action
    let newState = feedReducer(state,action);

    //expectation
    expect(newState.myFeed[0].content).toBe('testdklse soem osm, oim @@@34345');
});

it('after deleting length of feeds should be decrement', () => {
    //test data

    let action = deletePost(9002);

    //action
    let newState = feedReducer(state,action);

    //expectation
    expect(newState.myFeed.length).toBe(1);
});
it('after deleting length of feeds should`t be decrement if id incorrect', () => {
    //test data

    let action = deletePost(92);

    //action
    let newState = feedReducer(state,action);

    //expectation
    expect(newState.myFeed.length).toBe(2);
});