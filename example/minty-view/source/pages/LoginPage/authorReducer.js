const initialState = {
    pending: true,
    logged: true
}

const authorReducer = (state = initialState, action) => {

    if (action.type === 'GET_LOGGED_USER') {
        return Object.assign({}, state, {
            pending: false
        })
    }

    if (action.type === 'SET_LOGGED_USER') {
        return Object.assign({}, state, {
            pending: false,
            logged: action.logged
        })
    }

    return state;
}

export default authorReducer
