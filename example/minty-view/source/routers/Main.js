import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import React from 'react';

import PrimaryPage from '../pages/PrimaryPage/';
import { getAuthorState } from '../pages/LoginPage/action';

class Main extends React.Component {
    componentWillMount() {
        getAuthorState();
    }

    render() {
        const { authorState, ...rest } = this.props;
        return (
            <Route {...rest} render={aaa => {
                if (authorState.pending) return <div>Loading...</div>;
                return authorState.logged
                    ? <PrimaryPage {...aaa} />
                    : <Redirect to="/auth/login" />
            }} />
        )
    }
}

const stateToProps = (authorState => {
    return authorState;
});

export default connect(stateToProps)(Main)
