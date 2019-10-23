import React from 'react';
import style from './Settings.module.css';
import {compose} from "redux";
import {connect} from "react-redux";
import {saveAvatar} from "../../redux/FeedReducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {withRouter} from "react-router-dom";


const Settings = (props) => {
    let mainPhotoSelected = (e) => {
        if (e.target.files.length) {
            debugger;
            props.saveAvatar(e.target.files[0]);
        }
    };

    return (
        <div className={style.item}>
            Settings
            <div>
            {props.authorizedId&&<input onChange={mainPhotoSelected} type={"file"}/>}
            </div>
        </div>
    );
};


let mapStateToProps = (state) => {
    return ({
        profile: state.feedReducer.profile,
        status: state.feedReducer.status,
        authorizedId: state.auth.userId,
    });
};

export default compose(
    connect(mapStateToProps, {saveAvatar}),
    withAuthRedirect,
    withRouter)(Settings);
