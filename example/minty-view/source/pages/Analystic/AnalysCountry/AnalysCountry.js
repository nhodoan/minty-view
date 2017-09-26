import React from 'react';
import { connect } from 'react-redux';

import action from './action';

class Country extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.getGraphMethod();
    }

    render() {
        return (
            <div className="product-sub-layout">)}
                <h1>
                    getGraph
                </h1>
            </div>
        )
    }
}

const stateToProps = (fullState => {
    return fullState.dashboardState;
});

const mapActionToProps = (dispatch => {
    return {
        getGraphMethod() {
            action.getGraph(dispatch);
        }
    }
});

export default connect(stateToProps, mapActionToProps)(Country);
