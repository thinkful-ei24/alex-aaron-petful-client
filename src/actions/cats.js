export const fetchCatsRequest = value => {
    return {
        type: 'GET_CATS',
        value
    }
}

export const fetchCatsSuccess = value => {
    return {
        type: 'GET_CATS_SUCCESS',
        value
    }
}

export const fetchCatsError = value => {
    return {
        type: 'GET_CATS_ERROR',
        value
    }
}

export const getCatsAction = () => dispatch => {
    dispatch(fetchCatsRequest())
    fetch('https://alex-aaron-petful-server.herokuapp.com/api/cat')
        .then(res => res.json())
        .then(res => dispatch(fetchCatsSuccess(res)))
        .catch(err => dispatch(fetchCatsError()))
}

export const deleteCatsAction = () => dispatch => {
    fetch('https://alex-aaron-petful-server.herokuapp.com/api/cat', {
        method: 'DELETE'
    })
    .then(res => res.json());
}