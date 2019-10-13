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
        let {currentPage, pageSize} = this.props;
        this.props.getUsers(currentPage, pageSize);
    }

    selectPage = (pageNumber) => {
        let {pageSize} = this.props;
        this.props.selectPage(pageNumber);
        this.props.getUsers(pageNumber, pageSize);
    };

    render() {

        return (
            <>
                {this.props.isFetching ? <Preloader /> :
                    <Friends
                        key={this.props.users.id}
                        followUserProgress={this.props.followUserProgress}
                        users={this.props.users}
                        currentPage={this.props.currentPage}
                        totalUsersCount={this.props.totalUsersCount}
                        pageSize={this.props.pageSize}
                        selectPage={this.selectPage}
                        followUser={this.props.follow}
                        unFollow={this.props.unFollow}
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
