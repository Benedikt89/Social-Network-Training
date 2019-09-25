import React from 'react';
import {connect} from "react-redux";
import {
    follow,
    selectPage,
    setUsers, toggleIsFetching,
    unFollow
} from "../../redux/FriendsReducer";
import * as axios from "axios";
import Friends from "./Friends";
import Preloader from "../Common/Preloader";


class FriendsAPI extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items, response.data.totalCount);
                this.props.toggleIsFetching(false);
            })
    }

    pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

    selectPage = (pageNumber) => {
        this.props.selectPage(pageNumber);
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items, response.data.totalCount);
                this.props.toggleIsFetching(false);
            })
    };

    render() {

        return (
            <>
                {this.props.isFetching ? <Preloader/> :
                    <Friends
                        users={this.props.users}
                        currentPage={this.props.currentPage}
                        pagesCount={this.pagesCount}
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
        users: state.friendsReducer.users,
        pageSize: state.friendsReducer.pageSize,
        totalUsersCount: state.friendsReducer.totalUsersCount,
        currentPage: state.friendsReducer.currentPage,
        isFetching: state.friendsReducer.isFetching,
    }
};


let FriendsContainer = connect(mapStateToProps, {follow, selectPage, unFollow, setUsers, toggleIsFetching})(FriendsAPI);


export default FriendsContainer;
