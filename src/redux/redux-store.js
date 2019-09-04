import {combineReducers, createStore} from "redux";
import messagesReducer from "./MessagesReducer";
import feedReducer from "./FeedReducer";
import sidebarReducer from "./SidebarReducer";
import friendsReducer from "./FriendsReducer";


let reducers = combineReducers({
    messagesReducer,
    feedReducer,
    sidebarReducer,
    friendsReducer,
});

let store = createStore(reducers);

window.store = store;

export default store;