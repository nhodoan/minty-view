const actionDispatch = {

    getGraph(dispatch, url, dateStart, dateEnd) {
        $.ajax({
            type: "get",
            dataType: 'json',
            data: {},
            url: url,
            success: function (response) {
                dispatch({
                    type: "GET-DATA",
                    dateStart: dateStart,
                    dateEnd: dateEnd,
                    data: response,
                });
            }.bind(this)
        });
    },
    
    changeGraphType(dispatch, graphType) {
        dispatch({
            type: "CHANGE-GRAPH-TYPE",
            graphType: graphType
        });
    }
}

export default actionDispatch;