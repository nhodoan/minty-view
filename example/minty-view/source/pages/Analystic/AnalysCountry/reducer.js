const initialState = {
    graphData: []
};

const reducer = (state = initialState, action) => {

    switch (action.type) {

        case 'SHOW-GRAPH':
            return Object.assign({}, state, {
                graphData: [3, 4, 5]
            })

        default: return state;
    }
}

export default reducer;