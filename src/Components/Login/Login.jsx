import React from 'react';
import style from './Login.module.css'
import {Field, reduxForm} from "redux-form";
import {Input} from "../Common/FormsControls/FormsControls";
import {requiredField} from "../../utils/validators";
import {getAuthUserData, login, logOut} from "../../redux/AuthReducer";
import {compose} from "redux";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData);
    };
    const logOut = () => {
        props.logOut();
    };
    return (
        <div className={style.item}>
            <h2>LOGIN {props.loginName}</h2>
            {props.isAuth&&<Redirect to={'/Profile'}/>}
            {props.isAuth&&<button onClick={logOut}>LOG OUT</button>}
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};

const LoginForm = (props) => {
    return (
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field placeholder={'e-mail'} validate={[requiredField]} name={"email"} type={"email"} component={Input}/>
                </div>
                <div>
                    <Field placeholder={'password'} validate={[requiredField]} name={"password"} type={"password"} component={Input}/>
                </div>
                <div>
                    <Field component={"input"} name={"rememberMe"} type={"checkbox"}/>
                    <span>rememberMe</span>
                </div>
                <div>
                    <Field component={"input"} name={"captcha"} type={"checkbox"}/>
                    <span>captcha</span>
                </div>
                {props.error && <div>
                    <span className={style.error}>{props.error}</span>
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
        loginName: state.auth.login,
    }
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

export default compose(
    connect(mapStateToProps, {login, logOut, getAuthUserData})
)(Login);
