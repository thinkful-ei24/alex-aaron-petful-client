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
    fetch('urlhere')
        .then(res => res.json())
        .then(res => dispatch(fetchDogsSuccess(res)))
        .then(err => dispatch(fetchDogsError()))
}