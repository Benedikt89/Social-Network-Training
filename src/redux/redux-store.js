import {combineReducers, createStore} from "redux";
import messagesReducer from "./MessagesReducer";
import feedReducer from "./FeedReducer";
import sidebarReducer from "./SidebarReducer";


let reducers = combineReducers({
    messagesReducer,
    feedReducer,
    sidebarReducer,
});

let store = createStore(reducers);



export default store;