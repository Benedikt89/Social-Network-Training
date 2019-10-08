import {applyMiddleware, combineReducers, createStore} from "redux";
import messagesReducer from "./MessagesReducer";
import feedReducer from "./FeedReducer";
import sidebarReducer from "./SidebarReducer";
import friendsReducer from "./FriendsReducer";
import authReducer from "./AuthReducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from "redux-form";
import { composeWithDevTools } from 'redux-devtools-extension';
import appReducer from "./AppReducer";

let reducers = combineReducers({
    auth: authReducer,
    messagesReducer,
    feedReducer,
    sidebarReducer,
    friendsReducer,
    form: formReducer,
    appReducer,
});

let store = createStore(reducers, composeWithDevTools(applyMiddleware(thunkMiddleware)));

window.store = store;

export default store;