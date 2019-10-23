import React, {Component} from 'react';
import {HashRouter, Route, withRouter} from "react-router-dom";
import './App.css';
import Navigate from "./Components/Navigate/Navigate";
import Footer from "./Components/Footer/Footer";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import Login from "./Components/Login/Login";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import Header from "./Components/Header/Header";
import { logOut } from "./redux/AuthReducer";
import {initializeApp} from "./redux/AppReducer";
import Preloader from "./Components/Common/Preloader";
import store from "./redux/redux-store";
import {withSuspense} from "./hoc/withSuspense.jsx";


//import DialogsPage from "./Components/DialogsPage/DialogsPage";

const DialogsPage = React.lazy(()=> import('./Components/DialogsPage/DialogsPage'));
const ProfileContainer = React.lazy(()=> import('./Components/Profile/ProfileContainer.jsx'));
const FriendsContainer = React.lazy(()=> import('./Components/Friends/FriendsContainer.jsx'));


class AppMain extends Component {

    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized){
            return (<Preloader />)
        } else {

            return (
                <div className='fullOnImage'>
                    <div className='fullContainer'>
                    <div className='appWrapper'>

                        <Header login={this.props.login} logOut={this.props.logOut}/>
                        <Navigate/>

                        <main className='appContent'>

                            <Route path="/DialogsPage"
                                   render={ withSuspense(DialogsPage) }/>

                            <Route path="/Profile/:userId?"
                                   render={ withSuspense(ProfileContainer) }/>

                            <Route path="/News" render={() => <News/>}/>
                            <Route path="/Music" component={Music}/>
                            <Route path="/Friends" render={ () => {
                                return <React.Suspense  fallback={<Preloader/>}>
                                    <FriendsContainer />
                                </React.Suspense>
                            }}/>
                            <Route path="/Settings" component={Settings}/>
                            <Route path="/Login" component={Login}/>


                        </main>

                        <Footer/>
                    </div>
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

const AppContainer = compose( withRouter, connect(mapStateToProps,{initializeApp, logOut}))(AppMain);

const App = () => (
    <HashRouter basename={process.env.PUBLIC_URL}>
        <Provider store={store}>
            <AppContainer />
        </Provider>
    </HashRouter>
);
export default App;