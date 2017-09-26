import React from 'react';
import { connect } from 'react-redux';
import actionDipatch from './action';

class DashBoard extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.getGraphMethod();
        this.props.getTableMethod();
    }

    render() {
        return (
            <div className="product-sub-layout">
                <button onClick={this.props._7daysDurationMethod}> 7 days Duration </button>
                <button onClick={this.props._15daysDurationMethod}> 15 days Duration </button>
                <button onClick={this.props._30daysDurationMethod}> 30 days Duration </button>
                <h1>
                    getGraph
                </h1>
                <h1>
                    getTable
                </h1>
            </div>
        )
    }
}

const stateToProps = (fullState => {
    console.log("fullstate", fullState);
    return fullState.dashboardState;
});

const mapActionToProps = (dispatch => {
    
    return {
        getGraphMethod() {
            console.log('getGraphMethod')
            actionDipatch.getGraph(dispatch);
        },

        getTableMethod() {
            console.log('getTableMethod');
            actionDipatch.getTable(dispatch);
        },

        _7daysDurationMethod() {
            console.log('7 days Duration');
            actionDipatch._7daysDuration(dispatch);
        },

        _15daysDurationMethod() {
            console.log('15 days Duration');
            actionDipatch._15daysDuration(dispatch);
        },

        _30daysDurationMethod() {
            console.log('30 days Duration');
            actionDipatch._30daysDuration(dispatch);
        }
    }
});

export default connect(stateToProps, mapActionToProps)(DashBoard);
