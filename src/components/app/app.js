import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {ConfirmPage, LoginPage, MainPage, RegisterPage, RemindPasswordPage} from '../pages';

import './app.css';

const App = () => {
    return (
        <Switch>
            <Route path="/" component={MainPage} exact />
            <Route path="/register" component={RegisterPage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/remind" component={RemindPasswordPage} />
            <Route path="/confirm" component={ConfirmPage} />
        </Switch>
    )
};

export default App;
