import React, {Component} from 'react';

import './index.css';

export default class ConfirmNegative extends Component {

    onSubmit() {
        window.location.replace(`/`);
    };

    render() {
        return (
            <div className="main">
                <h3>Что-то пошло не так. Предлагаем ознакомиться с приложением в гостевом режиме.</h3>
                <button
                    className="btn-secondary button-custom"
                    onClick={this.onSubmit}>
                    Хорошо
                </button>
            </div>
        )
    }
}
