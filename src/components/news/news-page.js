import React, {Component} from 'react';

export default class NewsPage extends Component {
    render() {
        return (
            <div className="card news">
                <div className="card-body">
                    <h4 className="card-title">Хорошая новость</h4>
                    <h6 className="card-subtitle mb-2 text-muted">Мы публикуем хорошие новости</h6>
                    <p className="card-text">Это действительно новость. Ну а что поделать - такие теперь новости. На хакатоне будет другие, факт.</p>
                    <a href="#" className="card-link">Читать целиком</a>
                </div>
            </div>
        )
    }
}
