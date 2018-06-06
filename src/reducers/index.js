import {combineReducers} from 'redux';
import loginReducer from './LoginReducer.js';
import sellReducer from './SellReducer.js';
import buyReducer from './BuyReducer.js';


const rootReducer = combineReducers({
    loginData : loginReducer,
    sellData : sellReducer,
    buyData: buyReducer
})

export default rootReducer;