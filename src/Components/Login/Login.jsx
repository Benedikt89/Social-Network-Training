import React from 'react';
import style from './Login.module.css'
import {reduxForm} from "redux-form";
import {createField, Input} from "../Common/FormsControls/FormsControls";
import {requiredField} from "../../utils/validators";
import {getAuthUserData, getCaptchaUrl, login, logOut} from "../../redux/AuthReducer";
import {compose} from "redux";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

const Login = ({login, logOut, isAuth, loginnedId, loginName, captchaUrl, getCaptchaUrl}) => {
    const onSubmit = (formData) => {
        login(formData.email, formData.password, formData.rememberMe, formData.captcha);
    };
    return (
        <>
        {isAuth ? <Redirect to={`/Profile/${loginnedId}`}/>:
        <div className={style.item}>
            <h2>LOGIN {loginName}</h2>
            {isAuth&&<button onClick={logOut}>LOG OUT</button>}
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={captchaUrl}/>
            {captchaUrl&&<div><img src={captchaUrl}/> <button onClick={getCaptchaUrl}>refresh</button></div>}
        </div>}
        </>
    );
};

const LoginForm = ({handleSubmit, error, captchaUrl}) => {
    return (
            <form onSubmit={handleSubmit}>
                {createField('e-mail', "email", [requiredField], Input)}
                {createField('password',"password", [requiredField], Input, {type: "password"})}
                {createField(null,"rememberMe", null, Input, {type: "checkbox"}, 'rememberMe')}
                {captchaUrl && createField(null,"captcha", [requiredField], Input, {})}

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
        captchaUrl: state.auth.captchaUrl
    }
};

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

export default compose(
    connect(mapStateToProps, {login, logOut, getAuthUserData, getCaptchaUrl})
)(Login);
