const dispatcher = {
    getGraph(dispatch) {
        $.ajax({
            type: "get",
            dataType: 'json',
            data: {},
            url: 'http://logging.macfixit.com.au/o?api_key=6fcbf69716471324fd711bc620a731d8&app_id=582568f05ce239395eb1f217&method=nextsmarty-events&event=add_to_cart_action&time_from=1504915200&time_to=1505449835',
            success: function (response) {
                dispatch({
                    type: "SHOW-GRAPH",
                    data: response
                });
            }.bind(this)
        });

    }
}

export default dispatcher;