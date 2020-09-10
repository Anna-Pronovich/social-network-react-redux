import React from 'react';
import { Route, withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import { compose } from 'redux';

import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';

import UsersContainer from "./components/Users/UsersContainer";
import LoginPage from "./components/Login/Login";

import Preloader from "./components/common/Preloader/Preloader";

import { withSuspense } from "./hoc/withSuspense";
import { initializeApp } from "./redux/redux-thunk/app-thunk";

import './App.css';

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));

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
                        render={withSuspense(DialogsContainer)} />

                    <Route path='/profile/:userId?'
                        render={withSuspense(ProfileContainer)} />

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
