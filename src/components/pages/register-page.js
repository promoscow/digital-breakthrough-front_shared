import React, {Component} from 'react';
import {Link} from "react-router-dom";

import './index.css';
import logo from "../../resources/logo_web_400.png";
import AuthService from "../../service/auth-service";

const authService = new AuthService();

class RegisterPage extends Component {

    state = {
        data: {
            username: null,
            password: null,
            firstName: null,
            lastName: null,
            email: null
        },
        passwordCompare: null
    };

    onLoginChange = (element) => {
        this.setState({
            data: {
                username: element.target.value,
                password: this.state.data.password,
                firstName: this.state.data.firstName,
                lastName: this.state.data.lastName,
                email: this.state.data.email
            }
        });
    };

    onPasswordChange = (element) => {
        this.setState({
            data: {
                username: this.state.data.username,
                password: element.target.value,
                firstName: this.state.data.firstName,
                lastName: this.state.data.lastName,
                email: this.state.data.email
            }
        });
    };

    onPasswordCompare = (element) => {
        this.setState({
            passwordCompare: element.target.value
        });
    };

    onFirstNameChange = (element) => {
        this.setState({
            data: {
                username: this.state.data.username,
                password: this.state.data.password,
                firstName: element.target.value,
                lastName: this.state.data.lastName,
                email: this.state.data.email
            }
        });
    };

    onLastNameChange = (element) => {
        this.setState({
            data: {
                username: this.state.data.username,
                password: this.state.data.password,
                firstName: this.state.data.firstName,
                lastName: element.target.value,
                email: this.state.data.email
            }
        });
    };

    onEmailChange = (element) => {
        this.setState({
            data: {
                username: this.state.data.username,
                password: this.state.data.password,
                firstName: this.state.data.firstName,
                lastName: this.state.data.lastName,
                email: element.target.value
            }
        });
    };

    onSubmit = async (element) => {
        element.preventDefault();
        if (this.state.passwordCompare !== this.state.data.password) {
            console.log("Пароли не совпадают.")
        }
        let response = await authService.register(this.state.data)
            .then(this.props.history.push(`/after`))
            .catch((error) => {
                this.onError(error);
            });
        if (response !== null) {
            console.log(response);
        }
    };

    onError = (error) => {
        console.log(error);
    };

    render() {
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
                            placeholder="Имя"
                            onChange={this.onFirstNameChange}
                        />
                    </div>
                    <div>
                        <input
                            className="form"
                            type="text"
                            placeholder="Фамилия"
                            onChange={this.onLastNameChange}
                        />
                    </div>
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
                        <input
                            className="form"
                            type="password"
                            placeholder="Повторите пароль"
                            onChange={this.onPasswordCompare}
                        />
                    </div>
                    <div>
                        <input
                            className="form"
                            type="text"
                            placeholder="email"
                            onChange={this.onEmailChange}
                        />
                    </div>
                    <div>
                        <button
                            className="btn-secondary button-custom"
                            onClick={this.onSubmit}>
                            Зарегистрироваться
                        </button>
                    </div>
                </form>
                <div>
                    <Link to="/login">Авторизация</Link>&nbsp;&nbsp;&nbsp;
                    <Link to="/remind">Забыли пароль?</Link>
                </div>
            </div>
        )
    }
}

export default RegisterPage;
