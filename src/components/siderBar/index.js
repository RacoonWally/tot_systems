import React, {Component} from "react";
import {connect} from "react-redux";

import {
    chooseChat, fetchSpamMessageList, fetchWorkMessageList
} from '../../actions'

import "./index.scss"

class SideBar extends Component {

    state = {
        activeWork: false,
        activeSpam: false
    };

    toggleClass = (currBtn) => {
        const {chooseChat, isAuth, fetchWorkMessageList, fetchSpamMessageList} = this.props;
        switch (currBtn) {
            case "work": {
                this.setState({activeWork: true});
                this.setState({activeSpam: false});
                chooseChat(currBtn);
                if (isAuth){
                    fetchWorkMessageList(currBtn)
                }
                break
            }
            case "spam": {
                this.setState({activeSpam: true});
                this.setState({activeWork: false});
                chooseChat(currBtn);
                if (isAuth){
                    fetchSpamMessageList(currBtn)
                }
                break
            }
            default: {
            }
        }

    };

    render() {
        return (
            <div className="sidebar">
                <div className="sidebar_label">
                    <label>Список Чатов</label>
                </div>
                <ul className="list-group">
                    <li className={this.state.activeWork ? "list-group-item active mt-1" : "list-group-item mt-1"}>
                        <div onClick={event => this.toggleClass("work")} role="button">
                            Рабочий
                        </div>
                    </li>
                    <li className={this.state.activeSpam ? "list-group-item active mt-1" : "list-group-item mt-1"}>
                        <div onClick={event => this.toggleClass("spam")} role="button">
                            Спам
                        </div>
                    </li>
                </ul>
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    const {isAuth} = state.mainPage;
    return {
        isAuth
    }
};

const mapDispatchToProps =  {
    chooseChat,
    fetchWorkMessageList,
    fetchSpamMessageList
};

export default connect(mapStateToProps ,mapDispatchToProps)(SideBar);
