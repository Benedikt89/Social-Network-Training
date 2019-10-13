import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {updateUserStatus, uploadUserProfile} from "../../redux/FeedReducer";
import { withRouter } from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

 class ProfileContainer extends React.Component {

     state = {
         userId: this.props.match.params.userId
     };

     componentDidMount() {
         if (this.state.userId === undefined || this.state.userId === null) {
             this.setState({userId: this.props.authorizedId}, ()=>{
                 this.props.uploadUserProfile(this.state.userId);
             });
         } else {
             this.props.uploadUserProfile(this.state.userId);
         }
     }

     componentDidUpdate(prevProps, prevState, snapshot) {
         if (this.props.match.params.userId !== this.state.userId) {
             this.setState({userId: this.props.match.params.userId});
             this.props.uploadUserProfile(this.props.match.params.userId);
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
         authorizedId: state.auth.userId,
     });
 };

export default compose(
    connect(mapStateToProps, {uploadUserProfile, updateUserStatus}),
    withAuthRedirect,
    withRouter)(ProfileContainer);
