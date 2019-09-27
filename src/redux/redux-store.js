import {applyMiddleware, combineReducers, createStore} from "redux";
import messagesReducer from "./MessagesReducer";
import feedReducer from "./FeedReducer";
import sidebarReducer from "./SidebarReducer";
import friendsReducer from "./FriendsReducer";
import authReducer from "./AuthReducer";
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({
    auth: authReducer,
    messagesReducer,
    feedReducer,
    sidebarReducer,
    friendsReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;