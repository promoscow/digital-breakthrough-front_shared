export default class AuthService {

    _apiPath = 'http://localhost:8099';
    _loginUrl = '/auth/login';
    _registerUrl = '/auth/register';

    authorize = async (request) => {
        let body = JSON.stringify(request);
        let initData = {
            method: "post",
            headers: {
                'Content-Type': 'application/json'
            },
            body: body
        };
        const response = await fetch(
            `${this._apiPath}${this._loginUrl}`,
            initData
        )
            .catch(() => {
                throw new Error(`404`);
            });
        if (!response.ok) {
            throw new Error(`403`);
        }
        return response.text();
    };

    register = async (request) => {
        let body = JSON.stringify(request);
        console.log(body);
        let initData = {
            method: "post",
            headers: {
                'Content-Type': 'application/json'
            },
            body: body
        };
        const response = await fetch(
            `${this._apiPath}${this._registerUrl}`,
            initData
        )
            .catch(() => {
                throw new Error(`404`);
            });
        if (!response.ok) {
            throw new Error(`403`);
        }
        console.log(response);
        return response.text();
    }
}
