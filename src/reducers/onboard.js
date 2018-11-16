const initialState = {
    onboard: true
}

const onboardReducer = (state = initialState, action) => {
    if (action.type === 'ONBOARD') {
        return Object.assign({}, state, {
            onboard: !state.onboard
        })
    }

    else {
        return state;
    }
}

export default onboardReducer;