import {combineReducers} from 'redux'
import {connectRouter} from 'connected-react-router'

import mainPage from './mainPage'
import sideBar from "./sideBar";

export default history => combineReducers({
    router: connectRouter(history),
    mainPage,
    sideBar
});
