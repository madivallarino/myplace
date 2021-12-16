import {Switch, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import React from 'react';
const AuthorizedApp = ({handleLogout, user}) => {


    return (
        <div>
        <Switch>
            <Route exact path="/">
                <LandingPage />
            </Route>
        </Switch>
        <button onClick={handleLogout}>Logout</button>
        </div>
    )
}


export default AuthorizedApp;