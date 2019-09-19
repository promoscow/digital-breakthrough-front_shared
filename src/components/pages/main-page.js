import React, {Component} from 'react';

import './index.css'
import AuthService from "../../service/auth-service";
import UtilService from "../../service/util-service";
import NavigationBar from './navigation-bar';
import {NewsPage} from "./index";
import Post from "../posts";

const authService = new AuthService();
const utilService = new UtilService();

export default class MainPage extends Component {

    componentDidMount() {
        checkToken.call(this);
    }

    onSubmit = async () => {
        console.log(localStorage.getItem("auth_token"));
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
            <div>
                <div>
                    <NavigationBar/>
                    <Post/>
                    <NewsPage/>
                </div>
            </div>
        );
    }
}

function checkToken() {
    let jwtToken = localStorage.getItem("auth_token");
    if (jwtToken === null || jwtToken === undefined) {
        console.warn("token not found, redirecting to login page");
        this.props.history.push(`/login`);
    }
    const parsedJwt = utilService.parseJwt(jwtToken);
    const exp = parsedJwt.exp;
    if (new Date().getTime() > exp * 1000) {
        console.warn("token expired, redirecting to login page");
        this.props.history.push(`/login`);
    }
}
