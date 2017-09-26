import React from 'react'
import BarChart from './BarChart'
import LineChart from './LineChart'

export default class ShowGraph extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dateStart: this.props.dateStart,
            dateEnd: this.props.dateEnd,
            graph: this.props.graph,
            data: this.props.data,
            size: this.props.size
        }
    }

    componentWillReceiveProps(newProps) {
        this.state = {
            graph: newProps.graph,
            data: newProps.data,
            size: newProps.size,
            dateStart: this.props.dateStart,
            dateEnd: this.props.dateEnd,
        }
    }

    render() {
        if (this.state.graph == 'Line') {
            return (<LineChart data={this.state.data} size={this.state.size} />);
        } else if (this.state.graph == 'Bar') {
            return (<BarChart data={this.state.data} size={this.state.size} dateEnd={this.state.dateEnd} dateStart={this.state.dateStart} />);
        } else if ((this.state.dateEnd - this.state.dateStart) > 7 * 24 * 60 * 60 * 1000) {
            return (<LineChart data={this.state.data} size={this.state.size} />);
        } else {
            return (<BarChart data={this.state.data} size={this.state.size} dateEnd={this.state.dateEnd} dateStart={this.state.dateStart} />);
        }
    }
}
