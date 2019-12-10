import React from 'react';
import Router from '../componentes/Router';

import { userService, authenticationService } from '../_services';

class HomePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentUser: authenticationService.currentUserValue,
            users: null
        };
    }
    render() {
        return (
                <React.Fragment>
                    <Router />
                </React.Fragment>
               
            
        );
    }
}

export { HomePage };