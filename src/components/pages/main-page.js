import React, {Component} from 'react';

import './index.css'
import UtilService from "../../service/util-service";
import NavigationBar from './navigation-bar';
import {NewsPage} from "./index";
import Post from "../posts";

const utilService = new UtilService();

export default class MainPage extends Component {

    componentDidMount() {
        checkToken.call(this);
    }

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
    console.log(jwtToken);
    const parsedJwt = utilService.parseJwt(jwtToken);
    console.log(parsedJwt);
    const exp = parsedJwt.exp;
    if (new Date().getTime() > exp * 1000) {
        console.warn("token expired, redirecting to login page");
        this.props.history.push(`/login`);
    }
}
