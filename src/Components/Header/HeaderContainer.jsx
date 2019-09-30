import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthUserData, logOut} from "../../redux/AuthReducer";

class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.getAuthUserData();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
            this.props.getAuthUserData()
    }

    render() {
        return (
            <Header login={this.props.login}/>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        userId: state.auth.userId,
        email: state.auth.email,
        login: state.auth.login,
    }
};

export default connect(mapStateToProps, {getAuthUserData, logOut})( HeaderContainer);
