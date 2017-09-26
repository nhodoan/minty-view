const dispatcher = {
    
    getGraph(dispatch) {
        dispatch({
            type: "SHOW-GRAPH",
            data: {}
        });
    }
}

export default dispatcher;