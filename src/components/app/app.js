import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {LoginPage, MainPage, RegisterPage} from '../pages';

import './app.css';

const App = () => {
    return (
        <Switch>
            <Route path="/" component={MainPage} exact/>
            <Route path="/register" component={RegisterPage}/>
            <Route path="/login" component={LoginPage}/>
        </Switch>
    )
};

export default App;
