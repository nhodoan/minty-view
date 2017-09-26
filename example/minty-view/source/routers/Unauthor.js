import { Switch, Route, Redirect } from 'react-router-dom';
import React from 'react';

import LoginPage from '../pages/LoginPage/';

class Unauthor extends React.Component {

    render() {
        return (
            <div className="unauthorized-layout">
                <Switch>
                    <Route path="/auth/login" component={LoginPage} />
                    <Redirect to="/auth/login" />
                </Switch>
            </div>
        )
    }
}

export default Unauthor;
