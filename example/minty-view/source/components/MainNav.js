import { NavLink } from 'react-router-dom';
import React from 'react';

class MainNav extends React.Component {
    render() {
        return (
            <div className="main-nav">
                <h1>Hello Minty-View!</h1>
                <nav>
                    <NavLink to="/app" exact activeClassName="active" className="nav-item">Home Page </NavLink>
                    <NavLink to="/app/dashboard" activeClassName="active" className="nav-item">Dash Board </NavLink>
                    <NavLink to="/app/analystic" activeClassName="active" className="nav-item">Analystic </NavLink>
                    <NavLink to="/app/mintyEvents" activeClassName="active" className="nav-item">Minty Events </NavLink>
                    <NavLink to="/app/errors" activeClassName="active" className="nav-item">Errors </NavLink>
                </nav>
            </div>
        );
    }
}

export default MainNav;
