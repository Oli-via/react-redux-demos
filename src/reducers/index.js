import { combineReducers } from 'redux';
import createCommentReducer from './create_comment_reducer'
import inputValueReducer from './input_value_reducer'

const rootReducer = combineReducers({
  // state: (state = {}) => state
  comments: createCommentReducer,
  value: inputValueReducer
});

export default rootReducer;
