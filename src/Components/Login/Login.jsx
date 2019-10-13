import React from 'react';
import style from './Login.module.css'
import {Field, reduxForm} from "redux-form";
import {createField, Input} from "../Common/FormsControls/FormsControls";
import {requiredField} from "../../utils/validators";
import {getAuthUserData, login, logOut} from "../../redux/AuthReducer";
import {compose} from "redux";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

const Login = ({login, logOut, isAuth, loginnedId, loginName}) => {
    const onSubmit = (formData) => {
        login(formData);
    };
    return (
        <>
        {isAuth ? <Redirect to={`/Profile/${loginnedId}`}/>:
        <div className={style.item}>
            <h2>LOGIN {loginName}</h2>
            {isAuth&&<button onClick={logOut}>LOG OUT</button>}
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>}
        </>
    );
};

const LoginForm = ({handleSubmit, error}) => {
    return (
            <form onSubmit={handleSubmit}>
                {createField('e-mail', "email", [requiredField], Input)}
                {createField('password',"password", [requiredField], Input, {type: "password"})}
                {createField(null,"rememberMe", null, Input, {type: "checkbox"}, 'rememberMe')}
                {createField(null,"captcha", null, Input, {type: "checkbox"}, 'captcha')}

                {error && <div>
                    <span className={style.error}>{error}</span>
                </div>}
                <div>
                    <button>LOGIN</button>
                </div>
            </form>
    );
};

const mapStateToProps = (state) => {
    return{
        isAuth: state.auth.isAuth,
        loginnedId: state.auth.userId,
        loginName: state.auth.login,
    }
};

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

export default compose(
    connect(mapStateToProps, {login, logOut, getAuthUserData})
)(Login);
