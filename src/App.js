import React from 'react';
import { Route, withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import { compose } from 'redux';

import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import LoginPage from "./components/Login/Login";
import Preloader from "./components/common/Preloader/Preloader";

import { initializeApp } from "./redux/redux-thunk/app-thunk";

import './App.css';
class App extends React.Component {

    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader />
        }


        return (
            <div className='app-wrapper'>
                <HeaderContainer />
                <Navbar />
                <div className='app-wrapper-content'>
                    <Route path='/dialogs'
                        render={() => <DialogsContainer />} />

                    <Route path='/profile/:userId?'
                        render={() => <ProfileContainer />} />

                    <Route path='/users'
                        render={() => <UsersContainer />} />
                    <Route path='/login'
                        render={() => <LoginPage />} />

                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
});

export default compose(
    withRouter,
    connect(mapStateToProps, { initializeApp }))(App);; 
