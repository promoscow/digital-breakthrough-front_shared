import React, {Component} from 'react';
import AuthService from '../../service/auth-service';
import {connect} from "react-redux";

import logo from '../../resources/logo_web_400.png';

const authService = new AuthService();

class LoginPage extends Component {

    state = {
        data: {
            username: "",
            password: ""
        },
        authorized: true,
        emptyData: false
    };

    onLoginChange = (element) => {
        this.setState({
            data: {
                username: element.target.value,
                password: this.state.data.password
            }
        });
    };

    onPasswordChange = (element) => {
        this.setState({
            data: {
                username: this.state.data.username,
                password: element.target.value
            }
        });
    };

    onSubmit = async (element) => {
        element.preventDefault();
        if (!this.isEmptyOrSpaces(this.state.data.username) && !this.isEmptyOrSpaces(this.state.data.password)) {
            this.setState({
                authorized: true,
                emptyData: false
            });
            this.props.putToken(await authService.authorize(this.state.data)
                .catch((error) => {
                    console.error(this.onError(error));
                }));
        } else {
            this.setState({
                authorized: true,
                emptyData: true
            })
        }
        console.log(this.props.token)
    };

    isEmptyOrSpaces = (string) => {
        console.log(string);
        return string.match(/^ *$/) !== null || string === "";
    };

    onError = (error) => {
        if (error.message === `403`) {
            this.setState({
                authorized: false
            });
            console.log(this.state.authorized)
        }
    };

    render() {
        const unauthorizedMessage = this.state.authorized ? null : 'Неправильная пара логин / пароль';
        const emptyDataMessage = this.state.emptyData ? 'Поля не могут быть пустыми.' : null;

        return (
            <div className="main">
                <div>
                    <img alt="Авторизация" className="auth-logo" src={logo}/>
                </div>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <input
                            className="form"
                            type="text"
                            placeholder="Логин"
                            onChange={this.onLoginChange}
                        />
                    </div>
                    <div>
                        <input
                            className="form"
                            type="text"
                            placeholder="Пароль"
                            onChange={this.onPasswordChange}
                        />
                    </div>
                    <div>
                        <button
                            className="btn-secondary button-custom"
                            onClick={this.onSubmit}>
                            Авторизоваться
                        </button>
                    </div>
                </form>
                <div>
                    <a href="http://localhost:3000/register">Регистрация</a>&nbsp;&nbsp;&nbsp;
                    <a href="http://localhost:3000/forgot">Забыли пароль?</a>
                </div>
                <div className="error-message">{unauthorizedMessage}</div>
                <div className="error-message">{emptyDataMessage}</div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        token: state.token
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        putToken: (token) => {
            dispatch({
                type: 'put_token',
                payload: token
            });
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
