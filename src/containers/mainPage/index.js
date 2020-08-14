import React, {Component} from "react";
import {connect} from "react-redux";

import './index.scss'

import Header from "../../components/header";
import Auth from "../../components/auth";
import SideBar from "../../components/siderBar";
import BodySpace from "../../components/bodySpace";


class MainPage extends Component {

    render() {
        const {isAuth, typeChat} = this.props;
        if (isAuth === undefined || !isAuth) {
            return (
                <div>
                    <Header/>
                    <div className="container-fluid">
                        <div className="row pt-3">
                            <div className="col-2">
                                <SideBar/>
                            </div>
                            <div className="col-9">
                                <Auth/>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        if (isAuth) {
            return (
                <div>
                    <Header/>
                    <div className="container-fluid">
                        <div className="row pt-3">
                            <div className="col-2">
                                <SideBar/>
                            </div>
                            <div className="col-9">
                                <BodySpace/>
                            </div>
                        </div>
                    </div>

                </div>
            )
        }

    }
}

const mapStateToProps = (state) => {
    const {isAuth} = state.mainPage;
    const {typeChat} = state.sideBar;

    return {
        isAuth,
        typeChat
    }
};


export default connect(mapStateToProps)(MainPage);

