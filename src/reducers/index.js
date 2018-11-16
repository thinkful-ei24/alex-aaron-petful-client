import { combineReducers } from 'redux';
import catReducer from './cats';
import dogReducer from './dogs';

const rootReducer = combineReducers({
    catReducer,
    dogReducer
})

export default rootReducer;