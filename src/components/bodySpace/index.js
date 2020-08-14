import React, {Component, Fragment} from "react";
import {connect} from 'react-redux'

import './index.scss'

import {addDataToList} from '../../actions'
import DialogItem from '../dialogItem'
import {type} from "ramda";

class BodySpace extends Component {

    state = {
        message: ""
    };


    renderDialogWindow = () => {
        const {messages} = this.props;
        if (messages !== undefined) {
            return (
                <Fragment>
                    {messages.map((item, key) => {
                        return (<DialogItem data={item} key={key}/>)
                    })}
                </Fragment>
            )
        }
    };

    handleChange = (e) => {
        const param = e.target.value;
        this.setState({message: param})
    };

    sendMessage = (e) => {
        const {addDataToList, username, typeChat} = this.props;
        const {message} = this.state;
        e.preventDefault();
        addDataToList(username, message, typeChat);
        this.setState({message: ""})
    };

    render() {
        const {typeChat} = this.props;
        if (typeChat !== undefined) {
            return (
                <div className="bodyspace">
                    <div className="bodyspace_dialog_window">
                        {this.renderDialogWindow()}
                    </div>
                    <div className="bodyspace_container">
                        <div className="bodyspace_textarea_group">
                            <div>
                                <label>Введите сообщение:</label>
                            </div>
                            <div className="areatext">
                            <textarea
                                value={this.state.message}
                                className="bodyspace_textarea"
                                placeholder="Введите сообщение"
                                onChange={(e) => this.handleChange(e)}
                            />
                            </div>
                        </div>
                        <div className="bodyspace_button">
                            <input
                                type="submit"
                                value="Отправить"
                                className="button"
                                onClick={(e) => this.sendMessage(e)}
                            />
                        </div>
                    </div>
                </div>
            )
        } return (
            <div>

            </div>
        )

    }

}

const mapStateToProps = (state) => {
    const {messages, username} = state.mainPage;
    const {typeChat} = state.sideBar;
    return {
        messages,
        username,
        typeChat
    }
};

const mapDispatchToProps = {
    addDataToList
};


export default connect(mapStateToProps, mapDispatchToProps)(BodySpace);
