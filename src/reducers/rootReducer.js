import { combineReducers } from 'redux';
import Amount from './Amount';
import Orders from './Order';
import TotalPrice from './Order';

export default combineReducers({
   Amount,
   Orders,
   TotalPrice,
})
