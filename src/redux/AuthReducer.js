import { authAPI } from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA';
const LOGIN = 'LOGIN';
const LOG_OUT = 'LOG_OUT';



let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
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
        default:
            return state;
    }
};


const _setAuthUserData = (userId, email, login, isAuth) => {
    return ({type: SET_USER_DATA, payload: {userId, email, login, isAuth} })
};
const _login = () => {
    return ({type: LOGIN})
};

export const getAuthUserData = () => (dispatch) => {
    authAPI.getAuth()
        .then( data => {
            if (data.resultCode === 0) {
                dispatch(_setAuthUserData(data.data.id, data.data.email, data.data.login, true));
            }
        })
};
export const login = (data) => (dispatch) => {
    authAPI.login(data)
        .then( res => {
            if (res.resultCode === 0) {
                console.log(res);
                dispatch(_login);
                getAuthUserData();
            } else {
                let message = res.messages.length > 0 ? res.messages[0] :"some error";
                dispatch(stopSubmit('contact', {_error: message}))
            }
        })
};
export const logOut = () => (dispatch) => {
    authAPI.logOut()
        .then( res => {
            if (res.resultCode === 0) {
                console.log(res);
                dispatch(_setAuthUserData(null, null, null, false))
            }
        })
};

export default authReducer;