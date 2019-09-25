const FOLLOW_USER = 'FOLLOW-USER';
const UNFOLLOW_USER = 'UNFOLLOW-USER';
const SET_USERS = 'SET-USERS';
const SELECT_PAGE = 'FRIENDS/SELECT_PAGE';
const TOGGLE_IS_FETCHING = 'FRIENDS/TOGGLE_IS_FETCHING';

let initialState = {
    users: [],
    pageSize: 12,
    totalUsersCount: 88,
    currentPage: 1,
    isFetching: false,
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
                isFetching: action.count,
            };

        default:
            return state;
    }
};


export const follow = (userId) => {
    return ({
        type: FOLLOW_USER, userId: userId
    })
};
export const unFollow = (userId) => {
    return ({type: UNFOLLOW_USER, userId: userId})
};
export const setUsers = (users, totalUsersCount) => {
    return ({type: SET_USERS, users: users, totalUsersCount: totalUsersCount})
};
export const selectPage = (pageNumber) => {
    return ({type: SELECT_PAGE, pageNumber: pageNumber})
};
export const toggleIsFetching = (count) => {
    return ({type: TOGGLE_IS_FETCHING, count: count})
};


export default friendsReducer;