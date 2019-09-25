import React from 'react';
import Profile from "./Profile";
import * as axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/FeedReducer";
import {withRouter} from "react-router-dom";


 class ProfileAPI extends React.Component {

     componentDidMount() {
         let userId = this.props.match.params.userId;
         if (userId === undefined) {
             userId = 1572
         }
         axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`+ userId)
             .then(response => {
                this.props.setUserProfile(response.data);
             })
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

let ProfileContainer = connect(mapStateToProps, {setUserProfile})(ProfileContainerRouted);

export default ProfileContainer;
