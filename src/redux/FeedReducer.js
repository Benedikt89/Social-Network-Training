import {usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const TEXT_FIELD_POST_CHANGE = 'TEXT-FIELD-POST-CHANGE';
const SET_USER_PROFILE = 'SET_USER_PROFILE';


let initialState = {
    profile: {},
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
        {
            id: 9003,
            userId: 1,
            content: 'How long, how long will i slide?',
            likeCount: 11,
            avatarImage: 'https://www.w3schools.com/howto/img_avatar2.png',
        }

    ],
    newPostText: 'asd',
};

const feedReducer = (state = initialState, action) => {

    switch (action.type) {
        case TEXT_FIELD_POST_CHANGE:
            return {
                ...state,
                newPostText: action.text
            };

        case ADD_POST:
            let newPost = {
                id: state.myFeed.length + 9001,
                userId: 1,
                content: state.newPostText,
                likeCount: 0,
                avatarImage: 'https://www.w3schools.com/howto/img_avatar2.png'
            };
            return {
                ...state,
                myFeed: [newPost, ...state.myFeed],
                newPostText: '',
            };
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile,
            };

        default:
            return state;
    }
};


export const addPostActionCreator = () => {
    return ({
        type: ADD_POST
    })
};
export const onPostChangeActionCreator = (text) => {
    return ({type: TEXT_FIELD_POST_CHANGE, text: text})
};
export const _setUserProfile = (profile) => {
    return ({type: SET_USER_PROFILE, profile: profile })
};
export const uploadUserProfile = (userId) => (dispatch) => {
    usersAPI.uploadUser(userId)
        .then(data => {
            dispatch(_setUserProfile(data));
        });
};

export default feedReducer;