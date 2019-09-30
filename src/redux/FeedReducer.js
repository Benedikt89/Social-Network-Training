import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const TEXT_FIELD_POST_CHANGE = 'TEXT-FIELD-POST-CHANGE';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';
const UPDATE_USER_STATUS = 'UPDATE_USER_STATUS';

let initialState = {
    profile: {},
    status: '',
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
                content: action.text,
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
        case SET_USER_STATUS:
            return {
                ...state,
                status: action.status,
            };

        default:
            return state;
    }
};


export const addPost = (text) => {
    return ({
        type: ADD_POST, text
    })
};
export const _setUserProfile = (profile) => {
    return ({type: SET_USER_PROFILE, profile: profile })
};
export const _setUserStatus = (status) => {
    return ({type: SET_USER_STATUS, status: status })
};
export const uploadUserProfile = (userId) => (dispatch) => {
    profileAPI.uploadUser(userId)
        .then(data => {
            dispatch(_setUserProfile(data));
        });
};
export const uploadUserStatus = (userId) => (dispatch) => {
    profileAPI.uploadStatus(userId)
        .then(data => {
            if (data) {
                dispatch(_setUserStatus(data));
            }
        });
};
export const updateUserStatus = (newStatus) => (dispatch) => {
    profileAPI.updateStatus(newStatus)
        .then(res => {
            if (res === 0){
                dispatch(_setUserStatus(newStatus));
            }
        });
};

export default feedReducer;