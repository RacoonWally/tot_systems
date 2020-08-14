import React from 'react';
import {Switch, Route, Redirect} from "react-router";


import MainPage from './containers/mainPage'



export default (
    <Switch>
       <Route path='/' component={MainPage} exact/>
       <Redirect to="/"/>
    </Switch>
);
