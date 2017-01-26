import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import { authUser } from './auth_reducer';

const rootReducer = combineReducers({
  form,
  authUser
});

export default rootReducer;
