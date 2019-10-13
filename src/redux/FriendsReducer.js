import {usersAPI} from "../api/api";
import {updateObjecrInArray} from "../utils/object-helpers";

const FOLLOW_USER = 'FOLLOW-USER';
const UNFOLLOW_USER = 'UNFOLLOW-USER';
const SET_USERS = 'SET-USERS';
const SELECT_PAGE = 'FRIENDS/SELECT_PAGE';
const TOGGLE_IS_FETCHING = 'FRIENDS/TOGGLE_IS_FETCHING';
const TOGGLE_FOLLOW_PROGRESS = 'FRIENDS/TOGGLE_FOLLOW_PROGRESS';

let initialState = {
    users: [],
    pageSize: 12,
    totalUsersCount: 88,
    currentPage: 1,
    isFetching: false,
    followUserProgress: [],
};

const friendsReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW_USER:
            return {
                ...state,
                users: updateObjecrInArray(state.users, action.userId, '.id', {followed: true})
            };

        case UNFOLLOW_USER:
            return {
                ...state,
                users: updateObjecrInArray(state.users, action.userId, '.id', {followed: false})
            };
        case SET_USERS:
            return {
                ...state,
                users: action.users,
                totalUsersCount: action.totalUsersCount,
            };

        case SELECT_PAGE:
            return {
                ...state,
                currentPage: action.pageNumber,
            };

        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.status,
            };
        case TOGGLE_FOLLOW_PROGRESS:
            return {
                ...state,
                followUserProgress: action.status ? [...state.followUserProgress, action.userId]
                    : state.followUserProgress.filter(id => id !== action.userId),
            };

        default:
            return state;
    }
};


export const _follow = (userId) => {
    return ({
        type: FOLLOW_USER, userId: userId
    })
};
export const _unFollow = (userId) => {
    return ({type: UNFOLLOW_USER, userId: userId})
};
export const setUsers = (users, totalCount) => {
    return ({type: SET_USERS, users: users, totalUsersCount: totalCount})
};
export const selectPage = (pageNumber) => {
    return ({type: SELECT_PAGE, pageNumber: pageNumber})
};
export const toggleIsFetching = (status) => {
    return ({type: TOGGLE_IS_FETCHING, status})
};
export const toggleFollowProgress = (status, userId) => {
    return ({type: TOGGLE_FOLLOW_PROGRESS, status, userId})
};

export const requestUsers = (currentPage, pageSize) => async (dispatch) => {
    dispatch(toggleIsFetching(true));
    let data = await usersAPI.getUsers(currentPage, pageSize);

    dispatch(setUsers(data.items, data.totalCount));
    dispatch(toggleIsFetching(false));
};

export const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
    dispatch(toggleFollowProgress(true, userId));
    let res = await apiMethod(userId);
    if (res === 0) {
        dispatch(actionCreator(userId));
    }
    dispatch(toggleFollowProgress(false, userId));
};

export const follow = (userId) => {
    return async (dispatch) => {
        followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), _follow);
    }
};
export const unFollow = (userId) => {
    return async (dispatch) => {
        followUnfollowFlow(dispatch, userId, usersAPI.unFollow.bind(usersAPI), _unFollow);
    }
};

export default friendsReducer;