import React, {Component, Fragment} from "react";
import {connect} from "react-redux";

import {
    fetchAuthLocal
} from '../../actions'
import './index.scss'
import {Redirect} from "react-router-dom";


class Auth extends Component {

    state = {
        username: "",
        password: "",
        wrongLogin: "",
        wrongPass: "",
        classNames: {
            hide: "auth_hide"
        }
    };


    handleChange = (e, field) => {
        const param = e.target.value;
        switch (field) {
            case "username": {
                if (!param.match(/^[\w.@+-]+$/)) {
                    this.setState({[field]: param});
                    this.setState({wrongLogin: "Недопустимый логин"});
                } else {
                    this.setState({[field]: param});
                    this.setState({wrongLogin: ""});
                }
                break
            }
            case "password": {
                if (!param.match(/^(?=.*[A-Z])(?=.*\d).{8,}$/)) {
                    this.setState({[field]: param});
                    this.setState({wrongPass: "Недопустимый пароль"});
                } else {
                    this.setState({[field]: param});
                    this.setState({wrongPass: ""});
                }
                break

            }
            default: {
            }
        }
    };


    renderAuthForm = () => {
        const {fetchAuthLocal} = this.props;
        const {wrongLogin, wrongPass} = this.state;

        return (
            <div className='auth'>
                <form className='auth_form'>
                    <div className='auth_form__group'>
                        <div>
                            <label>Login</label>
                        </div>
                        <div>
                            <input type="text" placeholder="Логин" value={this.state.username} className="auth_input"
                                   required
                                   onChange={(e) => this.handleChange(e, "username")}/>
                        </div>
                        <div className="auth_input__validation">
                            <p>{wrongLogin}</p>
                        </div>
                    </div>
                    <div className='auth_form__group'>
                        <div>
                            <label>Password</label>
                        </div>

                        <div>
                            <input type="password" placeholder="Пароль" value={this.state.password}
                                   className="auth_input"
                                   required
                                   onChange={(e) => this.handleChange(e, "password")}/>
                        </div>
                        <div className="auth_input__validation">
                            <p>{wrongPass}</p>
                        </div>
                    </div>
                    <div className="auth_submit_button">
                        <input className="button" type="submit" value="Войти" onClick={(e) => {
                            const {username, password} = this.state;
                            const data = {
                                username,
                                password
                            };
                            e.preventDefault();
                            if (wrongLogin === "" && wrongPass === "") {
                                fetchAuthLocal(data);
                            }
                        }}/>
                    </div>
                </form>

            </div>

        )
    };

    render() {
            return (
                <Fragment>
                    {this.renderAuthForm()}
                </Fragment>
            )
        }

}


const mapStateToProps = (state) => {
    const {userName, password} = state.mainPage;
    return {
        userName,
        password
    };
};


const mapDispatchToProps = {
    fetchAuthLocal
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
