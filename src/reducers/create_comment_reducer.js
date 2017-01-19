/**
 * Created by aliyy on 2017/1/18.
 */
// import React from 'react'
import {CREATE_POST, INPUT_CHANGE} from '../actions/index'

export default (state = {comment: [], value: ''}, action)=>{
  switch (action.type) {
    case CREATE_POST:
      return { comment: [ ...state.comment, action.payload ]}   //!!!这里要注意返回的数据格式！！！
    case INPUT_CHANGE:
      return { ...state, value: action.payload }
    default:
      return state
  }
}