import React from 'react';
import {connect} from "react-redux";
import {
    follow, getUsers,
    selectPage,
    unFollow
} from "../../redux/FriendsReducer";
import Friends from "./Friends";
import Preloader from "../Common/Preloader";


class FriendsAPI extends React.Component {

    pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

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

        return (
            <>
                {this.props.isFetching ? <Preloader/> :
                    <Friends
                        followUserProgress={this.props.followUserProgress}
                        users={this.props.users}
                        currentPage={this.props.currentPage}
                        pagesCount={this.pagesCount}
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
        users: state.friendsReducer.users,
        pageSize: state.friendsReducer.pageSize,
        totalUsersCount: state.friendsReducer.totalUsersCount,
        currentPage: state.friendsReducer.currentPage,
        isFetching: state.friendsReducer.isFetching,
        followUserProgress: state.friendsReducer.followUserProgress,
    }
};

let FriendsContainer = connect(mapStateToProps, {
    follow, selectPage, unFollow,
    getUsers})(FriendsAPI);


export default FriendsContainer;
