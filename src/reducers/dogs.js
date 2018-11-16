const initialState = {
    dogs: [],
    loading: false,
    error: null
}

const dogReducer = (state = initialState, action) => {
    if (action.type === 'GET_DOGS') {
        return Object.assign({}, state, {
            loading: true
        })
    }
    if (action.type === 'GET_DOGS_ERROR') {
        return Object.assign({}, state, {
            loading: false,
            error: true
        })
    }
    if (action.type === 'GET_DOGS_SUCCESS') {
        return Object.assign({}, state, {
            loading: false,
            error: null,
            dogs: action.value
        })
    }
    else {
        return state;
    }
}

export default dogReducer;