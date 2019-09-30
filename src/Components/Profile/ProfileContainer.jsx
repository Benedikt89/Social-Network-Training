import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {updateUserStatus, uploadUserProfile, uploadUserStatus} from "../../redux/FeedReducer";
import { withRouter } from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

 class ProfileContainer extends React.Component {

     state = {
         userId: this.props.match.params.userId
     };

     componentDidMount() {
         if (!this.state.userId) {
             this.setState({userId: 2})
         }
         this.props.uploadUserProfile(this.state.userId);
         this.props.uploadUserStatus(this.state.userId);
     }

     componentDidUpdate(prevProps, prevState, snapshot) {
         if (this.props.match.params.userId !== this.state.userId) {
             this.setState({userId: this.props.match.params.userId});
             this.props.uploadUserProfile(this.props.match.params.userId);
             this.props.uploadUserStatus(this.props.match.params.userId);
         }
     }

     render() {
         return (
             <Profile {...this.props} />
         );
     };
 }

 let mapStateToProps = (state) => {
     return ({
         profile: state.feedReducer.profile,
         status: state.feedReducer.status,
     });
 };

export default compose(
    connect(mapStateToProps, {uploadUserProfile, uploadUserStatus, updateUserStatus}),
    // withAuthRedirect,
    withRouter)(ProfileContainer);
