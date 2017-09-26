const initialState = {
    graphData: [],
    tableData: [],
    duration: '7'
};

const reducer = (state = initialState, action) => {

    switch (action.type) {

        case 'SHOW-GRAPH':
            return Object.assign({}, state, {
                graphData: [3, 4, 5]
            })

        case 'SHOW-TABLE':
            return Object.assign({}, state, {
                tableData: [1, 2, 3]
            })

        case 'CHANGE-DURATION':
            return Object.assign({}, state, {
                duration: action.duration
            })

        default: return state;
    }
}

export default reducer;