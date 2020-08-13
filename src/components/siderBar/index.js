import React, {Component} from "react";
import {connect} from "react-redux";

import {
    chooseChat
} from '../../actions'

class SideBar extends Component {

    state = {
        activeWork: false,
        activeSpam: false
    };

    toggleClass = (currBtn) => {
        const {chooseChat} = this.props;
        switch (currBtn) {
            case "work": {
                this.setState({activeWork: true});
                this.setState({activeSpam: false});
                chooseChat("work");
                break
            }
            case "spam": {
                this.setState({activeSpam: true});
                this.setState({activeWork: false});
                chooseChat("spam");
                break
            }
            default: {
            }
        }

    };

    render() {
        return (
            <div>
                <ul className="list-group">
                    <li className={this.state.activeWork ? "list-group-item active" : "list-group-item"}>
                        <div onClick={event => this.toggleClass("work")} role="button">
                            Рабочий чат
                        </div>
                    </li>
                    <li className={this.state.activeSpam ? "list-group-item active" : "list-group-item"}>
                        <div onClick={event => this.toggleClass("spam")} role="button">
                            Спам чат
                        </div>
                    </li>
                </ul>
            </div>
        )
    }

}

const mapDispatchToProps =  {
    chooseChat
};

export default connect(null ,mapDispatchToProps)(SideBar);
