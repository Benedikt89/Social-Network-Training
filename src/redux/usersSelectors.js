import {createSelector} from "reselect";

export const _getUsers = (state) => {
    return state.friendsReducer.users;
};
export const getUsers = createSelector(_getUsers, (users) => {
    return users.filter( u => true);
});
export const getPageSize = (state) => {
    return state.friendsReducer.pageSize;
};
export const getTotalUsersCount = (state) => {
    return state.friendsReducer.totalUsersCount;
};
export const getCurrentPage = (state) => {
    return state.friendsReducer.currentPage;
};
export const getIsFetching = (state) => {
    return state.friendsReducer.isFetching;
};
export const getFollowUserProgress = (state) => {
    return state.friendsReducer.followUserProgress;
};
