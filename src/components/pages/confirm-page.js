import React, {Component} from 'react';
import AuthService from "../../service/auth-service";

const authService = new AuthService();

export default class ConfirmPage extends Component {

    componentDidMount() {
        const query = new URLSearchParams(this.props.location.search);
        const username = query.get('username');
        const token = query.get('token');

        this.confirm(username, token);
        console.log(localStorage.getItem("auth_token"));
        this.props.history.push("/");
    }

    confirm = async (username, token) => {
        if (username !== null && token !== null) {
            localStorage.setItem("auth_token", await authService.confirm(username, token))
        }
    };

    render() {


        return (
            <div>
                confirm page
            </div>
        );
    }
}
