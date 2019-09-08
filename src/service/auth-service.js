export default class AuthService {

    _apiPath = 'http://localhost:8099';
    _loginUrl = '/login';

    authorize = async (request) => {
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
            `${this._apiPath}${this._loginUrl}`,
            initData
        );
        if (!response.ok) {
            throw new Error(`403`);
        }
        console.log(response);
        return response.text();
    }
}
