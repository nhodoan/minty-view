const dispatcher = {

    getGraph(dispatch) {
        dispatch({
            type: "SHOW-GRAPH",
            data: {}
        });
    },

    getTable(dispatch) {
        dispatch({
            type: "SHOW-TABLE",
            data: {}
        });
    },

    _7daysDuration(dispatch) {
        dispatch({
            type: "CHANGE-DURATION",
            duration: 7
        })
    },

    _15daysDuration(dispatch) {
        dispatch({
            type: "CHANGE-DURATION",
            duration: 15
        })
    },

    _30daysDuration(dispatch) {
        dispatch({
            type: "CHANGE-DURATION",
            duration: 30
        })
    }
}

export default dispatcher;