import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import './App.css';
import Header from "./Components/Header/Header";
import Navigate from "./Components/Navigate/Navigate";
import Footer from "./Components/Footer/Footer";
import Profile from "./Components/Profile/Profile";
import DialogsPage from "./Components/DialogsPage/DialogsPage";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import Friends from "./Components/Friends/Friends";


const App = (props) => {

 //   let asd = props.appState.messages;

    return (

            <div className='appWrapper'>
                <Header/>
                <Navigate friends={props.state.users}/>

                <main className='appContent'>

                    <Route path="/DialogsPage"
                           render={() => <DialogsPage
                               sendNewMessage={props.sendNewMessage}
                               textFieldMessage={props.textFieldMessage}
                               newMessageText={props.state.newMessageText}
                               users={props.state.users}
                               messages={props.state.messages}/>}/>

                    <Route path="/Profile"
                           render={() => <Profile
                               profileInfo ={props.users}
                               myFeed={props.state.myFeed}
                               newPostText={props.state.newPostText}
                               addNewPost={props.addNewPost}
                               textHolder={props.textHolder}
                           />}/>
                    <Route path="/News" render={() => <News/>}/>
                    <Route path="/Music" component={Music}/>
                    <Route path="/Friends" component={Friends}/>
                    <Route path="/Settings" component={Settings}/>


                </main>

                <Footer/>

            </div>

    );
};


export default App;
