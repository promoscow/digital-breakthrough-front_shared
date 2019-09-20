import React, {Component} from 'react';

import './index.css';

export default class ConfirmSuccess extends Component {

    onSubmit() {
        window.location.replace(`/`);
    };

    render() {
        return (
            <div className="main">
                <h3>Поздравляем, Вы зарегистрировались. Теперь Вы можете перейти на главную, чтобы начать.</h3>
                <button
                    className="btn-secondary button-custom"
                    onClick={this.onSubmit}>
                    Перейти
                </button>
            </div>
        )
    }
}
