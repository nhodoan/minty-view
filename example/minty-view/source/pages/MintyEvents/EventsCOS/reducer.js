import moment from 'moment'
var today = new Date();
var todate = today - today % (24 * 60 * 60 * 1000)
const initialState = {
    dataCOS: [0],
    dateStartCOS: moment(todate - 30 * 24 * 60 * 60 * 1000),
    dateEndCOS: moment(todate),
    graphTypeCOS: "Default"
};

const reducer = (state = initialState, action) => {

    switch (action.type) {

        case 'GET-DATA-COS':
            return Object.assign({}, state, {
                dataCOS: action.data,
                dateStartCOS: action.dateStart,
                dateEndCOS: action.dateEnd
            })

        case 'CHANGE-GRAPH-TYPE-COS':
            return Object.assign({}, state, {
                graphTypeCOS: action.graphType,
            })

        default: return state;
    }
}

export default reducer;