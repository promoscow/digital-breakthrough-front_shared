import React, {Component} from 'react';

export default class ConfirmPage extends Component {

    componentDidMount() {
        const query = new URLSearchParams(this.props.location.search);
        const username = query.get('username');
        const token = query.get('token');

        console.log(username, token);
    }


    render() {


        return (
            <div>
                confirm page
            </div>
        );
    }
}
