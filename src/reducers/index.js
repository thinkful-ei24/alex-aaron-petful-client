import { combineReducers } from 'redux';
import catReducer from './cats';
import dogReducer from './dogs';
import onboardReducer from './onboard';

const rootReducer = combineReducers({
    catReducer,
    dogReducer,
    onboardReducer
})

export default rootReducer;