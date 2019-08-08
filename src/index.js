import React from 'react';
import * as serviceWorker from './serviceWorker';
import state from "./redux/state";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {
    addNewPost,
    sendNewMessage,
    textHolder,
    subscribe,
    textFieldMessage
} from "./redux/state";

import {BrowserRouter} from "react-router-dom";


let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state}
                 addNewPost={addNewPost}
                 sendNewMessage={sendNewMessage}
                 textHolder={textHolder}
                 textFieldMessage={textFieldMessage}
            />
        </BrowserRouter>, document.getElementById('root')
    );
};

rerenderEntireTree(state);


subscribe(rerenderEntireTree);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
