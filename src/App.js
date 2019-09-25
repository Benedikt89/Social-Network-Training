import React from 'react';
import {Route} from "react-router-dom";
import './App.css';
import Header from "./Components/Header/Header";
import Navigate from "./Components/Navigate/Navigate";
import Footer from "./Components/Footer/Footer";
import DialogsPage from "./Components/DialogsPage/DialogsPage";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import FriendsContainer from "./Components/Friends/FriendsContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";



const App = (props) => {


    return (
        <div className='fullOnImage'>
            <div className='appWrapper'>

                <Header/>
                <Navigate />

                <main className='appContent'>

                    <Route path="/DialogsPage"
                           render={() => <DialogsPage />}/>

                    <Route path="/Profile/:userId?"
                           render={() => <ProfileContainer />}/>

                    <Route path="/News" render={() => <News/>}/>
                    <Route path="/Music" component={Music}/>
                    <Route path="/Friends" component={FriendsContainer}/>
                    <Route path="/Settings" component={Settings}/>


                </main>

                <Footer/>
                </div>
            </div>

    );
};


export default App;
