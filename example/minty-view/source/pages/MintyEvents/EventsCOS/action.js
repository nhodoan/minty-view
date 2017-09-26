const actionDispatch = {

    getGraphCOS(dispatch, url, dateStart, dateEnd) {
        $.ajax({
            type: "get",
            dataType: 'json',
            data: {},
            url: url,
            success: function (response) {
                dispatch({
                    type: "GET-DATA-COS",
                    dateStart: dateStart,
                    dateEnd: dateEnd,
                    data: response,
                });
            }.bind(this)
        });
    },
    
    changeGraphTypeCOS(dispatch, graphType) {
        dispatch({
            type: "CHANGE-GRAPH-TYPE-COS",
            graphType: graphType
        });
    }
}

export default actionDispatch;