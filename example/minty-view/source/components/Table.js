import React from 'react';
import { connect } from 'react-redux';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

export default class Table extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { data } = this.props;
        let total = data[2];

        return (
            <ReactTable
                data={data[1]}
                columns={[
                    {
                        Header: `Total count:  ${total}`,
                        columns: [
                            {
                                Header: "Date",
                                accessor: "date"
                            },

                            {
                                Header: "Value",
                                id: "value",
                                accessor: "c",
                            }
                        ]
                    }
                ]}
                defaultPageSize={10}
                className="-striped -highlight"
                filterable
            />
        );
    }
}