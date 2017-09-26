import { NavLink, withRouter } from 'react-router-dom';
import React from 'react';

class Analystic extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        let { match } = this.props;

        return (
            <nav className="context-nav">
                <NavLink to={`${match.path}`} exact activeClassName="active" className="subnav-item"> Country</NavLink>
                <NavLink to={`${match.path}/browser`} activeClassName="active" className="subnav-item">Browser</NavLink>
            </nav>
        )
    }
}

export default withRouter(Analystic);
