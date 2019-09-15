import React, {Component} from 'react';

import './post.css'

export default class Post extends Component {
    render() {
        return (
            <div className="jumbotron post-custom">
                <h1 className="display-5">Всем привет!</h1>
                <p className="lead">Приветствуем всех в веб-приложении команды RedRock!</p>
                <hr className="my-4"/>
                    <p>Если Вы хотите большего, жмите кнопку ниже. Если же не хотите - проматывайте вниз и читайте новости.</p>
                    <p className="lead post-custom-button">
                        <button className="btn btn-secondary btn-lg">Читать</button>
                    </p>
            </div>
        )
    }
}
