import { combineReducers } from 'redux';
import createCommentReducer from './create_comment_reducer'
import inputValueReducer from './input_value_reducer'

// 把单个数据处理逻辑放在单个reducer里，不要混杂放在同个reducer的同个对象里
const rootReducer = combineReducers({
  // state: (state = {}) => state
  comments: createCommentReducer,
  value: inputValueReducer
});

export default rootReducer;
