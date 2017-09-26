const actionDispatch = {
    
    getGraphCO(dispatch, url, dateStart, dateEnd) {
        $.ajax({
            type: "get",
            dataType: 'json',
            data: {},
            url: url,
            success: function (response) {
                dispatch({
                    type: "GET-DATA-CO",
                    dateStart: dateStart,
                    dateEnd: dateEnd,
                    data: response,
                });
            }.bind(this)
        });
    },

    changeGraphTypeCO(dispatch, graphType) {
        dispatch({
            type: "CHANGE-GRAPH-TYPE-CO",
            graphType: graphType
        });
    }
}

export default actionDispatch;