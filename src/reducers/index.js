import { combineReducers } from 'redux';
import isAuth from './auth'

const rootReducer = combineReducers({
  authenticated: isAuth
});

export default rootReducer;
