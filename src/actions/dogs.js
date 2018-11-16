export const fetchDogsRequest = value => {
    return {
        type: 'GET_DOGS',
        value
    }
}

export const fetchDogsSuccess = value => {
    return {
        type: 'GET_DOGS_SUCCESS',
        value
    }
}

export const fetchDogsError = value => {
    return {
        type: 'GET_DOGS_ERROR',
        value
    }
}

export const getDogsAction = () => dispatch => {
    dispatch(fetchDogsRequest())
    fetch('https://alex-aaron-petful-server.herokuapp.com/api/dog')
        .then(res => res.json())
        .then(res => dispatch(fetchDogsSuccess(res)))
        .catch(err => dispatch(fetchDogsError()))
}

export const deleteDogsAction = () => dispatch => {
    fetch('https://alex-aaron-petful-server.herokuapp.com/api/dog', {
        method: 'DELETE'
    })
    .then(res => res.json())
    .then(res => dispatch(fetchDogsSuccess(res)));
}