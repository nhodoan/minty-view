import { Switch, Route, NavLink } from 'react-router-dom';
import React from 'react';
import EventsNav from './EventsNav.js';
import SplitPane from 'react-split-pane';
// Sub Layouts
import AddToCard from './EventsAddToCard/EventsAddToCard';
import CheckOut from './EventsCheckOut/EventsCheckOut';
import CheckOutSucess from './EventsCOS/CheckOutSuccess.js';

class Eventst extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className="user-sub-layout">
                <SplitPane split="vertical" minSize={100} maxSize={300} defaultSize={200}>
                    <aside>
                        <EventsNav />
                    </aside>
                    <div className="primary-content">
                        <Switch>
                            <Route path={this.props.match.path} exact component={AddToCard} />
                            <Route path={`${this.props.match.path}/check-out`} exact component={CheckOut} />
                            <Route path={`${this.props.match.path}/check-out-sucess`} component={CheckOutSucess} />
                        </Switch>
                    </div>
                </SplitPane>
            </div>
        );
    }
}

export default Eventst
