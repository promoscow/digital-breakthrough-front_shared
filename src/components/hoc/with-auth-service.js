import React from 'react';
import {ContextConsumer} from "../context/context";

const withAuthService = () => (Wrapped) => {
    return (props) => {
        return (
            <ContextConsumer>
                {
                    (authService) => {
                        return (
                            <Wrapped {...props} authService={authService} />
                        )
                    }
                }
            </ContextConsumer>
        )
    }
};

export default withAuthService;
