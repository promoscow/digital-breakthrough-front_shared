import React, {Component} from 'react';
import AuthService from '../../service/auth-service';

import logo from '../../resources/logo_web_400.png';
import {Link} from "react-router-dom";

const authService = new AuthService();

export default class LoginPage extends Component {

    state = {
        data: {
            username: "",
            password: ""
        },
        authorized: true,
        emptyData: false,
        connected: true
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
                emptyData: false,
                connected: true
            });
            localStorage.setItem("auth_token", await authService.authorize(this.state.data)
                .then(this.props.history.push(`/`))
                .catch((error) => {
                    this.onError(error);
                }));
        } else {
            this.setState({
                authorized: true,
                emptyData: true,
                connected: true
            })
        }
    };

    isEmptyOrSpaces = (string) => {
        return string.match(/^ *$/) !== null || string === "";
    };

    onError = (error) => {
        if (error.message === `403`) {
            this.setState({
                authorized: false,
                emptyData: false,
                connected: true
            });
        } else if (error.message === `404`) {
            this.setState({
                authorized: true,
                emptyData: false,
                connected: false
            });
        }
    };

    render() {
        const unauthorizedMessage = this.state.authorized ? null : 'Неправильная пара логин / пароль';
        const emptyDataMessage = this.state.emptyData ? 'Поля не могут быть пустыми.' : null;
        const disconnected = this.state.connected ? null : 'Проблемы с подключением';

        return (
            <div className="main-login">
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
                            type="password"
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
                    <Link to="/register">Регистрация</Link>&nbsp;&nbsp;&nbsp;
                    <Link to="/remind">Забыли пароль?</Link>
                </div>
                <div className="error-message">{unauthorizedMessage}</div>
                <div className="error-message">{emptyDataMessage}</div>
                <div className="error-message">{disconnected}</div>
            </div>
        )
    }
}
