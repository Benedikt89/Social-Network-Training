import React, {Component} from 'react';
import {BrowserRouter, Route, withRouter} from "react-router-dom";
import './App.css';
import Navigate from "./Components/Navigate/Navigate";
import Footer from "./Components/Footer/Footer";
import DialogsPage from "./Components/DialogsPage/DialogsPage";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import FriendsContainer from "./Components/Friends/FriendsContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import Login from "./Components/Login/Login";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import Header from "./Components/Header/Header";
import { logOut } from "./redux/AuthReducer";
import {initializeApp} from "./redux/AppReducer";
import Preloader from "./Components/Common/Preloader";
import store from "./redux/redux-store";


class AppContainer extends Component {

    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized){
            return (<Preloader />)
        } else {

            return (
                <div className='fullOnImage'>
                    <div className='appWrapper'>

                        <Header login={this.props.login} logOut={this.props.logOut}/>
                        <Navigate/>

                        <main className='appContent'>

                            <Route path="/DialogsPage"
                                   render={() => <DialogsPage/>}/>

                            <Route path="/Profile/:userId?"
                                   render={() => <ProfileContainer/>}/>

                            <Route path="/News" render={() => <News/>}/>
                            <Route path="/Music" component={Music}/>
                            <Route path="/Friends" component={FriendsContainer}/>
                            <Route path="/Settings" component={Settings}/>
                            <Route path="/Login" component={Login}/>


                        </main>

                        <Footer/>
                    </div>
                </div>

            );
        }
    }
}
const mapStateToProps = (state) => {
    return {
        userId: state.auth.userId,
        login: state.auth.login,
        initialized: state.appReducer.initialized,
    }
};

const AppMain = compose( withRouter, connect(mapStateToProps,{initializeApp, logOut}))(AppContainer);

const App = () => (
    <BrowserRouter>
        <Provider store={store}>
            <AppMain />
        </Provider>
    </BrowserRouter>
);
export default App;