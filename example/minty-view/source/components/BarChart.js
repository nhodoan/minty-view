import React from 'react';
import { render } from 'react-dom';
import ReactDOM from 'react-dom';
import { Chart, Axis, Series, Tooltip, Cursor, Line, Bar } from 'react-charts';
import { ResizableBox } from 'react-resizable';

export default class BarChart extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        if (this.props.data[0] == 0) {
            return (<h1> Error </h1>);
        } else {
            var data = [this.props.data[1].map((value) => ({ x: new Date(value.date) - 7 * 60 * 60 * 1000, y: parseInt(value.c) }))]
            var data2 = [[{ x: this.props.dateStart - 31 * 60 * 60 * 1000, y: 0 }, ...data[0], { x: this.props.dateEnd + 17 * 60 * 60 * 1000, y: 0 }]]

            return (
                <div>
                    <ResizableBox width={this.props.size.w} height={400}>
                        <Chart data={data2}>
                            <Axis primary type="time" position="bottom" showGrid={false} paddingOuter={150} interaction={'axis'} />
                            <Axis type="linear" position="left" stacked />
                            <Series type={Bar} />
                            <Tooltip />
                        </Chart>
                    </ResizableBox>
                </div>
            );
            
        }
    }
}

