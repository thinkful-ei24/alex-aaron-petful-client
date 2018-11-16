const initialState = {
    cats: [],
    loading: false,
    error: null
}

const catReducer = (state = initialState, action) => {
    if (action.type === 'GET_CATS') {
        return Object.assign({}, state, {
            loading: true
        })
    }
    if (action.type === 'GET_CATS_ERROR') {
        return Object.assign({}, state, {
            loading: false,
            error: true
        })
    }
    if (action.type === 'GET_CATS_SUCCESS') {
        return Object.assign({}, state, {
            loading: false,
            error: null,
            cats: action.value
        })
    }
    else {
        return state;
    }
}

export default catReducer;