import { combineReducers } from 'redux';
import fetchUsersReducer from './fetch_users_reducers'

const rootReducer = combineReducers({
  users: fetchUsersReducer
});

export default rootReducer;
