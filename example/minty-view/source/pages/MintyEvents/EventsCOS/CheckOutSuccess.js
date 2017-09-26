import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import moment from 'moment'

import ShowGraph from '../../../components/DefaultChart'
import action from './action';
import Table from '../../../components/Table'
import DateRanger from '../../../components/DatePicker'
import DownloadCSV from '../../../components/exportCSV'


var today = new Date();
var todate = today - today % (24 * 60 * 60 * 1000)

class CheckOutSuccess extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dateStart: this.props.dateStartCOS,
            dateEnd: this.props.dateEndCOS,
            data: this.props.dataCOS,
            size: { w: 0, h: 0 },
            graph: this.props.graphTypeCOS
        }
        this.fitToParentSize = this.fitToParentSize.bind(this)
        this.changeTime = this.changeTime.bind(this)
        this.showBarChart = this.showBarChart.bind(this)
        this.showLineChart = this.showLineChart.bind(this)
        this.showDefault = this.showDefault.bind(this)
    }

    componentDidMount() {
        $(window).resize(this.fitToParentSize);
        this.fitToParentSize();
    }

    componentWillReceiveProps(newProps) {
        this.setState({
            data: newProps.dataCOS
        })
    }
    changeDuaration(time) {
        this.changeTime(todate - time * 24 * 60 * 60 * 1000, todate)
    }

    changeTime(start, end) {
        this.setState({
            dateStart: start,
            dateEnd: end
        })

        let url = `http://logging.macfixit.com.au/o?api_key=6fcbf69716471324fd711bc620a731d8&app_id=582568f05ce239395eb1f217&method=nextsmarty-events&event=checkout_success&time_from=${start / 1000}&time_to=${end / 1000}`;

        this.props.getDataMethodCOS(url, start, end)
    }

    fitToParentSize() {
        const elem = ReactDOM.findDOMNode(this);
        const w = elem.parentNode.offsetWidth;
        const h = elem.parentNode.offsetHeight;

        let currentSize = this.state.size;

        if (w !== currentSize.w || h !== currentSize.h) {
            this.setState({
                size: {
                    w: w,
                    h: h
                }
            });
        }
    }
    showLineChart() {
        this.setState({
            graph: "Line"
        })
        this.props.changeGraphTypeCOS("Line")
    }

    showBarChart() {
        this.setState({
            graph: "Bar"
        })
        this.props.changeGraphTypeCOS("Bar")
    }

    showDefault() {
        this.setState({
            graph: "Default"
        })
        this.props.changeGraphTypeCOS("Default")
    }

    render() {

        const { data, size, graph, dateEnd, dateStart } = this.state;

        return (
            <div className="product-sub-layout">
                <button onClick={() => this.changeDuaration(7)}> 7 days </button>
                <button onClick={() => this.changeDuaration(15)}> 15 days </button>
                <button onClick={() => this.changeDuaration(30)}> 30 days </button>
                <button onClick={this.showLineChart}> Show Line Chart </button>
                <button onClick={this.showBarChart}> Show Bar Chart </button>
                <button onClick={this.showDefault}> Show Dafault </button>

                <DateRanger changeTime={this.changeTime} dateStart={dateStart} dateEnd={dateEnd} />
                <ShowGraph data={data} size={size} graph={graph} dateEnd={dateEnd} dateStart={dateStart} />

                <div className="table">
                    <a onClick={() => DownloadCSV({ filename: "stock-data.csv" }, this.state.data[1])} >Download CSV</a>
                    <Table data={data} />
                    <br />
                </div>
            </div>
        );
    }
}

const stateToProps = (fullState => {
    return fullState.eventsCOSState;
});

const mapActionToProps = (dispatch => {
    return {
        getDataMethodCOS(url, dateStart, dateEnd) {
            console.log('get data Addtocard')
            action.getGraphCOS(dispatch, url, dateStart, dateEnd);
        },
        changeGraphTypeCOS(graphType) {
            console.log("pickDate");
            action.changeGraphTypeCOS(dispatch, graphType)

        }
    }
});

export default connect(stateToProps, mapActionToProps)(CheckOutSuccess);
