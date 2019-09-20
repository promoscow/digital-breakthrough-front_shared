import React, {Component} from 'react';
import AuthService from "../../service/auth-service";
import {ConfirmNegative, ConfirmSuccess} from '../confirm';

const authService = new AuthService();

export default class ConfirmPage extends Component {

    state = {
        confirmed: false
    };

    componentDidMount() {
        const query = new URLSearchParams(this.props.location.search);
        const username = query.get('username');
        const token = query.get('token');

        this.confirm(username, token);
        console.log(localStorage.getItem("auth_token"));
        this.setState({
                confirmed: true
            }
        )
    }

    confirm = async (username, token) => {
        if (username !== null && token !== null) {
            localStorage.setItem("auth_token", await authService.confirm(username, token))
        }
    };

    render() {

        const content = this.state.confirmed ? <ConfirmSuccess/> : <ConfirmNegative/>;
        return (
            <div>
                {content}
            </div>
        );
    }
}
