export default class UtilService {

    parseJwt = (token) => {
        let jsonPayload = null;
        try {
            const base64Url = token.split('.')[1];
            const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
            jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
                return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
            }).join(''));
        } catch (error) {
            window.location.replace("http://localhost:3000/login");
        }
        return JSON.parse(jsonPayload);
    }
}
