import React from 'react';
import {connect} from "react-redux";
import {
    follow, requestUsers,
    selectPage,
    unFollow
} from "../../redux/FriendsReducer";
import Friends from "./Friends";
import Preloader from "../Common/Preloader";
import {
    getCurrentPage,
    getFollowUserProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../redux/usersSelectors";


class FriendsAPI extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    selectPage = (pageNumber) => {
        this.props.selectPage(pageNumber);
        this.props.getUsers(pageNumber, this.props.pageSize);
    };

    follow = (userId) => {
        this.props.follow(userId);
    };

    unFollow = (userId) => {
        this.props.unFollow(userId);
    };

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount/this.props.pageSize);

        return (
            <>
                {this.props.isFetching ? <Preloader/> :
                    <Friends
                        followUserProgress={this.props.followUserProgress}
                        users={this.props.users}
                        currentPage={this.props.currentPage}
                        pagesCount={pagesCount}
                        selectPage={this.selectPage}
                        followUser={this.follow}
                        unFollow={this.unFollow}
                    />
                }
            </>
        );
    }
}


let mapStateToProps = (state) => {
    return{
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followUserProgress: getFollowUserProgress(state),
    }
};

let FriendsContainer = connect(mapStateToProps, {
    follow, selectPage, unFollow,
    getUsers: requestUsers})(FriendsAPI);


export default FriendsContainer;
