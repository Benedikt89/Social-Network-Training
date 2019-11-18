import {profileAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const ADD_POST = 'ADD-POST';
const TEXT_FIELD_POST_CHANGE = 'TEXT-FIELD-POST-CHANGE';
const SET_USER_PHOTOS = 'settings/SET_USER_PHOTOS';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';
const DELETE_POST = 'DELETE_POST';

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
        case DELETE_POST:
            return {
                ...state,
                myFeed: state.myFeed.filter(f => f.id !== action.postId)
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
export const deletePost = (postId) => {
    return ({
        type: DELETE_POST, postId
    })
};
export const _setUserProfile = (profile) => {
    return ({type: SET_USER_PROFILE, profile: profile})
};
export const _setUserStatus = (status) => {
    return ({type: SET_USER_STATUS, status: status})
};
export const _setUserStatusSuccess = (photos) => {
    return ({type: SET_USER_PHOTOS, photos})
};

export const uploadUserProfile = (userId) => async (dispatch) => {
    try {
        let data = await profileAPI.uploadUser(userId);
        dispatch(_setUserProfile(data));
        let status = await profileAPI.uploadStatus(userId);
        if (status) {
            dispatch(_setUserStatus(status));
        }
    } catch(error) {
        console.log(error)
    }
};

export const updateUserStatus = (newStatus) => async (dispatch) => {
    let res = await profileAPI.updateStatus(newStatus);
    if (res === 0) {
        dispatch(_setUserStatus(newStatus));
    }

};
export const saveProfile = (profile) => async (dispatch, getState) => {
    const authId = getState().auth.userId;
    let res = await profileAPI.updateProfile(profile);
    if (res.resultCode === 0) {
        dispatch(uploadUserProfile(authId));
    }else {
        let message = res.messages.length > 0 ? res.messages[0] : "some error";
        dispatch(stopSubmit('profile', {_error: message}));
        return Promise.reject(message);
    }
};
export const saveAvatar = (file) => async (dispatch) => {
    let res = await profileAPI.saveAvatar(file);
    if (res.resultCode === 0) {
        dispatch(_setUserStatusSuccess(res.data));
    }else {
        //let message = res.messages.length > 0 ? res.messages[0] : "some error";
        // dispatch(stopSubmit('profile', {_error: message}));
        //return Promise.reject(message);
    }
};
export default feedReducer;