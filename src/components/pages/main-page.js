import React, {Component} from 'react';

import './index.css'
import AuthService from "../../service/auth-service";

const authService = new AuthService();

export default class MainPage extends Component {

    onSubmit = async () => {
        let response = await authService.test()
            .catch((error) => {
                this.onError(error);
            });
        console.log(response)
    };

    onError = (error) => {
        console.error(error);
    };

    render () {
        return (
            <div className="main">
                <div>
                    <button
                        className="btn-secondary button-custom"
                        onClick={this.onSubmit}>
                        Тест токена
                    </button>
                </div>
            </div>
        );
    }
}
