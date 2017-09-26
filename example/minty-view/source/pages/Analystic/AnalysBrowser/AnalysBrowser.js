import React from 'react';
import { connect } from 'react-redux';

import action from './action';

class Browser extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.getGraphMethod();
    }

    render() {
        return (
            <div className="product-sub-layout">
                <h1>
                    get Graph
                </h1>
            </div>
        )
    }
}

const stateToProps = (fullState => {
    return fullState.analysBrowserState;
});

const mapActionToProps = (dispatch => {
    return {
        getGraphMethod() {
            console.log('getGraphMethod')
            action.getGraph(dispatch);
        }
    }
});

export default connect(stateToProps, mapActionToProps)(Browser);
