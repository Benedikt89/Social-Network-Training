import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'auth/SET_USER_DATA';
const LOGIN = 'auth/LOGIN';
const LOG_OUT = 'auth/LOG_OUT';
const SHOW_CAPTCHA = 'auth/SHOW_CAPTCHA';


let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null,
};

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            };
        case LOGIN:
            return {
                ...state,
                isAuth: true,
            };
        case LOG_OUT:
            return {
                ...state,
                isAuth: false,
                userId: null,
                email: null,
                login: null,
            };
        case SHOW_CAPTCHA:
            return {
                ...state,
                captchaUrl: action.captchaUrl,
            };
        default:
            return state;
    }
};


const _setAuthUserData = (userId, email, login, isAuth) => {
    return ({type: SET_USER_DATA, payload: {userId, email, login, isAuth}})
};
const _loginSuccess = () => {
    return ({type: LOGIN})
};
const _showCaptcha = (captchaUrl) => {
    return ({type: SHOW_CAPTCHA, captchaUrl})
};

export const getAuthUserData = () => async (dispatch) => {
    let data = await authAPI.getAuth();
    if (data.resultCode === 0) {
        dispatch(_setAuthUserData(data.data.id, data.data.email, data.data.login, true));
    }
};

export const login = (email, password, rememberMe, captcha) => async (dispatch) => {
    let res = await authAPI.login(email, password, rememberMe, captcha);
    if (res.resultCode === 0) {
        dispatch(_loginSuccess);
        dispatch(getAuthUserData());
    } else if (res.resultCode === 10) {
        dispatch(getCaptchaUrl());
        let message = res.messages.length > 0 ? res.messages[0] : "some error";
        dispatch(stopSubmit('login', {_error: message}))
    } else {
        let message = res.messages.length > 0 ? res.messages[0] : "some error";
        dispatch(stopSubmit('login', {_error: message}))
    }
};
export const getCaptchaUrl = () => async (dispatch) => {
    const res = await authAPI.getCaptchaUrl();
        dispatch(_showCaptcha(res.url));

};
export const logOut = () => async (dispatch) => {
    const res = await authAPI.logOut();
    if (res.resultCode === 0) {
        console.log(res);
        dispatch(_setAuthUserData(null, null, null, false))
    }
};

export default authReducer;