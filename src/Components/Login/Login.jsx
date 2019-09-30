import React from 'react';
import style from './Login.module.css'
import {Field, reduxForm} from "redux-form";

const Login = () => {
    const onSubmit = (formData) => {
        console.log(formData)
    };
    return (
        <div className={style.item}>
            <h2>LOGIN</h2>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};

const LoginForm = (props) => {
    return (
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field placeholder={'Login'} name={"login"} component={"input"}/>
                </div>
                <div>
                    <Field placeholder={'password'} name={"password"} component={"input"}/>
                </div>
                <div>
                    <Field component={"input"} name={"rememberMe"} type={"checkbox"}/>
                </div>
                <div>
                    <button>LOGIN</button>
                </div>
            </form>
    );
};

const LoginReduxForm = reduxForm({form: 'contact'})(LoginForm);

export default Login;
