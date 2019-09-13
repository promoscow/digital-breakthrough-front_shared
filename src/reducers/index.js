const authInitState = {
    token: ""
};

const authReducer = (state = authInitState, action) => {
    if (action.type === 'put_token') {
        return {
            token: action.payload
        };
    } else {
        return state;
    }
};

export default authReducer;
