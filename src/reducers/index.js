import { combineReducers } from 'redux';
import createCommentReducer from './create_comment_reducer'

const rootReducer = combineReducers({
  // state: (state = {}) => state
  comments: createCommentReducer
});

export default rootReducer;
