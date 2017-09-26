import React from 'react'
import { render } from 'react-dom'
import ReactDOM from 'react-dom';
import { Chart, Axis, Series, Tooltip, Cursor, Line, Bar } from 'react-charts';
import _ from 'lodash';
import { ResizableBox } from 'react-resizable';

export default class LineChart extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        if (this.props.data[0] == 0) {
            return (<h1> Error </h1>)
        } else {
            var data = [this.props.data[1].map((value) => ({ x: new Date(value.date) - 7 * 60 * 60 * 1000, y: parseInt(value.c) }))]

            return (
                <div>
                    {_.range(1).map((d, i) =>
                        <ResizableBox key={i} width={this.props.size.w} height={400}>
                            <Chart data={data} interaction={'axis'}>
                                <Axis primary type="time" position="bottom" />
                                <Axis type="linear" position="left" stacked />
                                <Series type={Line} />
                                <Tooltip />
                            </Chart>
                        </ResizableBox>
                    )}
                </div>
            );
        }
    }
}

