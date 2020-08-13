import React from 'react';
import {Switch, Route, Redirect} from "react-router";


import MainPage from './containers/mainPage'
import WorkPage from './containers/workPage'
import SpamPage from './containers/spamPage'



export default (
    <Switch>
       <Route path='/' component={MainPage} exact/>
       <Route path='/work' component={WorkPage} />
       <Route path='/spam' component={SpamPage} />
       <Redirect to="/"/>
    </Switch>
);
