import { usersAPI } from "../api/api";

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
                users: state.users.map( u =>
                    u.id === action.userId ? {...u, followed: true}: u
                )
            };

        case UNFOLLOW_USER:
            return {
                ...state,
                users: state.users.map( u =>
                    u.id === action.userId ? {...u, followed: false}: u
                )
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
                    : state.followUserProgress.filter( id => id !== action.userId),
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

export const requestUsers = (currentPage, pageSize) => (dispatch) => {
    dispatch(toggleIsFetching(true));
    usersAPI.getUsers(currentPage, pageSize)
        .then(data => {
            dispatch(setUsers(data.items, data.totalCount));
            dispatch(toggleIsFetching(false));
        })
};

export const follow = (userId) => (dispatch) => {
    dispatch(toggleFollowProgress(true, userId));
    usersAPI.follow(userId)
        .then(res => {
            if (res === 0) {
                dispatch(_follow(userId));
                dispatch(toggleFollowProgress(false, userId));
            }
        });
};
export const unFollow = (userId) => (dispatch) => {
    dispatch(toggleFollowProgress(true, userId));
    usersAPI.unFollow(userId)
        .then(res => {
            if (res === 0) {
                dispatch(_unFollow(userId));
                dispatch(toggleFollowProgress(false, userId));
            }
        });
};

export default friendsReducer;