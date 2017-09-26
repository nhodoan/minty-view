import React from 'react'
import DatePicker from 'react-datepicker'
import moment from 'moment'
import 'react-datepicker/dist/react-datepicker.css';

class ExampleCustomInput extends React.Component {
    render() {
        return (
            <button
                className="custom-input"
                onClick={this.props.onClick}>
                {this.props.value}
            </button>
        );
    }
}

export default class DateRange extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            startDate: moment(this.props.dateStart),
            endDate: moment(this.props.dateEnd)
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleChangeStart = this.handleChangeStart.bind(this)
        this.handleChangeEnd = this.handleChangeEnd.bind(this)
        this.changeTime = this.changeTime.bind(this)
    }

    handleChange({ startDate, endDate }) {
        startDate = startDate || this.state.startDate
        endDate = endDate || this.state.endDate

        if (startDate.isAfter(endDate)) {
            var temp = startDate
            startDate = endDate
            endDate = temp
        }

        this.setState({ startDate, endDate })
    }

    handleChangeStart(startDate) {
        this.handleChange({ startDate });
    }

    handleChangeEnd(endDate) {
        this.handleChange({ endDate });
    }

    changeTime() {
        this.props.changeTime(this.state.startDate, this.state.endDate);
    }

    componentWillMount() {
        this.props.changeTime(this.state.startDate, this.state.endDate);
    }

    componentWillReceiveProps(newProps) {
        this.state = {
            startDate: moment(newProps.dateStart),
            endDate: moment(newProps.dateEnd)
        };
    }

    render() {
        return <div className="date-picker">
            <div> From
            <DatePicker
                    customInput={<ExampleCustomInput />}
                    maxDate={moment(this.state.endDate)}
                    selected={this.state.startDate}
                    selectsStart
                    startDate={this.state.startDate}
                    endDate={this.state.endDate}
                    onChange={this.handleChangeStart}
                />
            </div>
            <div>
                To
            <DatePicker
                    customInput={<ExampleCustomInput />}
                    minDate={moment(this.state.startDate)}
                    maxDate={moment()}
                    selected={this.state.endDate}
                    selectsEnd
                    startDate={this.state.startDate}
                    endDate={this.state.endDate}
                    onChange={this.handleChangeEnd}
                />
            </div>
            <button onClick={this.changeTime}> Change </button>
        </div>

    }
}