import React, {Component} from "react";
import {connect} from "react-redux";


import Header from "../../components/header";
import Auth from "../../components/auth";
import SideBar from "../../components/siderBar";
import BodySpace from "../../components/bodySpace";


class MainPage extends Component {

    render() {
        const {isAuth} = this.props;
        if (isAuth === undefined || !isAuth) {
            return (
                <div>
                    <Header/>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-3">
                                <SideBar />
                            </div>
                            <div className="col-9">
                                <Auth />
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
                        <div className="row">
                            <div className="col-3">
                                <SideBar />
                            </div>
                            <div className="col-9">
                                <BodySpace />
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

    return {
        isAuth
    }
};


export default connect(mapStateToProps)(MainPage);

