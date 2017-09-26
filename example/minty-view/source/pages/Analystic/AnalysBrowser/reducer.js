const initialState = {
    graphData: [],
    tableData: [],
    duration: '7'
};

const reducer = (state = initialState, action) => {

    switch (action.type) {

        case 'SHOW-GRAPH':
            return Object.assign({}, state, {
                graphData: action.data
            })
        default: return state;
    }
}

export default reducer;