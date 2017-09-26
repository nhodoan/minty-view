import moment from 'moment'

var today = new Date();
var todate = today - today % (24 * 60 * 60 * 1000)

const initialState = {
    dataCO: [0],
    dateStartCO: moment(todate - 30 * 24 * 60 * 60 * 1000),
    dateEndCO: moment(todate),
    graphTypeCO: "Default"
};

const reducer = (state = initialState, action) => {

    switch (action.type) {

        case 'GET-DATA-CO':
            return Object.assign({}, state, {
                dataCO: action.data,
                dateStartCO: action.dateStart,
                dateEndCO: action.dateEnd
            })

        case 'CHANGE-GRAPH-TYPE-CO':
            return Object.assign({}, state, {
                graphTypeCO: action.graphType,
            })

        default: return state;
    }
}

export default reducer;