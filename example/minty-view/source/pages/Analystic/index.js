import { Switch, Route, NavLink } from 'react-router-dom';
import React from 'react';
import SplitPane from 'react-split-pane';
import AnalysNav from './AnalysNav.js';
// Sub Layouts
import Country from './AnalysCountry/AnalysCountry';
import Browser from './AnalysBrowser/AnalysBrowser';

class Analystic extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className="user-sub-layout">
                <SplitPane split="vertical" minSize={200} maxSize={500} defaultSize={300}>
                    <aside>
                        <AnalysNav />
                    </aside>
                    <div className="primary-content">
                        <Switch>
                            <Route path={this.props.match.path} exact component={Country} />
                            <Route path={`${this.props.match.path}/browser`} component={Browser} />
                        </Switch>
                    </div>
                </SplitPane>
            </div>
        )
    }
}

export default Analystic
