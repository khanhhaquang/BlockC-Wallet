import {combineReducers} from 'redux';
import loginReducer from './LoginReducer.js';
import sellReducer from './SellReducer.js';

const rootReducer = combineReducers({
    loginData : loginReducer,
    sellData : sellReducer,
})

export default rootReducer;