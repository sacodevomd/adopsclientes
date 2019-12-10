import React from 'react';
import { Router, Route } from 'react-router-dom';
import { history } from '../_helpers';
import { authenticationService } from '../_services';
import { PrivateRoute } from '../_components';
import { LoginPage } from '../LoginPage';
import Routers from '../componentes/Router';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentUser: null,
            token: []
        };
    }

    async componentDidMount() {
        authenticationService.currentUser.subscribe(x => this.setState({ currentUser: x }));
     
 
    }

    logout() {
        authenticationService.logout();
        history.push('/controladops/login');
    }

    render() {

        return (
            <Router history={history}>
                <div>            
                            <PrivateRoute exact path="/controladops" component={Routers} />
                            <Route path="/controladops/login" component={LoginPage} />
                </div>
                            
                 
            </Router>
        );
    }
}

export { App }; 