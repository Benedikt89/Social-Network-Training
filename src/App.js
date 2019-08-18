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


    return (
        <div className='fullOnImage'>
            <div className='appWrapper'>

                <Header/>
                <Navigate />

                <main className='appContent'>

                    <Route path="/DialogsPage"
                           render={() => <DialogsPage />}/>

                    <Route path="/Profile"
                           render={() => <Profile />}/>

                    <Route path="/News" render={() => <News/>}/>
                    <Route path="/Music" component={Music}/>
                    <Route path="/Friends" component={Friends}/>
                    <Route path="/Settings" component={Settings}/>


                </main>

                <Footer/>
                </div>
            </div>

    );
};


export default App;
