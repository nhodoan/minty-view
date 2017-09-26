import { NavLink, withRouter } from 'react-router-dom';
import React from 'react';

class Eventstic extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let {match} = this.props;

        return (

            <nav className="context-nav">
                <NavLink to={`${match.path}`} exact activeClassName="active" className="subnav-item"> Add To Card</NavLink>
                <NavLink to={`${match.path}/check-out`} activeClassName="active" className="subnav-item">Check Out</NavLink>
                <NavLink to={`${match.path}/check-out-sucess`} activeClassName="active" className="subnav-item">Check Out Sucess</NavLink>
            </nav>
        )
    }
}

export default withRouter(Eventstic);
