import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {updateUserStatus, uploadUserProfile, uploadUserStatus} from "../../redux/FeedReducer";
import { withRouter } from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

 class ProfileContainer extends React.Component {

     componentDidMount() {
         let userId = this.props.match.params.userId;
         if (!userId) {
             userId = 2
         }
         this.props.uploadUserProfile(userId);
         this.props.uploadUserStatus(userId);
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
