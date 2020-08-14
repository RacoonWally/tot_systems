import React, {Component} from "react";

import "./index.scss"


class DialogItem extends Component{

    render() {
        const {username, message} = this.props.data;

        return (
            <div className="dialog_item_container">
                <div className="dialog_item_name">
                    {username}
                </div>
                <div className="dialog_item_message">
                    {message}
                </div>
            </div>
        );
    }
}

export default DialogItem;
