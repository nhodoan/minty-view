import { Switch, Route, Redirect } from 'react-router-dom';
import React from 'react';
import SplitPane from 'react-split-pane';
import MainNav from '../../components/MainNav';

// Sub Pages;
import AppHomePage from '../HomePage/AppHomePage';
import DashBoard from '../Dashboard/Dashboard.js';
import Analystic from '../Analystic/index.js';
import Events from '../MintyEvents/index.js';
import Errors from '../Errors/index.js';

class PrimaryPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="primary-layout">
                <SplitPane split="vertical" minSize={150} maxSize={300} defaultSize={200}>
                <MainNav />
                <div className="page-content">
                    <Switch>
                        <Route path={`${this.props.match.path}`} exact component={AppHomePage} />
                        <Route path={`${this.props.match.path}/dashboard`} component={DashBoard} />
                        <Route path={`${this.props.match.path}/analystic`} component={Analystic} />
                        <Route path={`${this.props.match.path}/mintyEvents`} component={Events} />
                        <Route path={`${this.props.match.path}/errors`} component={Errors} />
                        <Redirect to={`${this.props.match.url}`} />
                    </Switch>
                </div>
                </SplitPane>
            </div>
        )
    };
}

export default PrimaryPage;
