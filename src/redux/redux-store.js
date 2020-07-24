import {applyMiddleware, combineReducers, createStore, compose} from "redux";
import { reducer as formReducer } from 'redux-form'
import thunkMiddleware from "redux-thunk"; 

import appReducer from "./app-reducer";
import authReducer from "./auth-reducer";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";

let reducers = combineReducers({
    app: appReducer,
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth:authReducer,
    form: formReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers,  composeEnhancers(applyMiddleware(thunkMiddleware)));
window.__store__ = store;

export default store;