import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {uploadUserProfile} from "../../redux/FeedReducer";
import { withRouter } from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

 class ProfileAPI extends React.Component {

     componentDidMount() {
         let userId = this.props.match.params.userId;
         if (!userId) {
             userId = 1572
         }
         this.props.uploadUserProfile(userId);
     }

     render() {
         return (
             <Profile profile={this.props.profile} {...this.props} />
         );
     };
 }

 let mapStateToProps = (state) => {
     return ({
         profile: state.feedReducer.profile,
     });
 };

let ProfileContainerRouted = withRouter(ProfileAPI);


let AuthRedirectComponent = withAuthRedirect(ProfileContainerRouted);


let ProfileContainer = connect(mapStateToProps, {uploadUserProfile})(AuthRedirectComponent);

export default ProfileContainer;
