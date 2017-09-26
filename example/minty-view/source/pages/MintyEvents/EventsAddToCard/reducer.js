import moment from 'moment'

var today = new Date();
var todate = today - today % (24 * 60 * 60 * 1000)

const initialState = {
    data: [0],
    dateStart: moment(todate - 30 * 24 * 60 * 60 * 1000),
    dateEnd: moment(todate),
    graphType: "Default"
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET-DATA':
            return Object.assign({}, state, {
                data: action.data,
                dateStart: action.dateStart,
                dateEnd: action.dateEnd
            })

        case 'CHANGE-GRAPH-TYPE':
            return Object.assign({}, state, {
                graphType: action.graphType,
            })

        default: return state;
    }
}

export default reducer;