/**
 * Created by aliyy on 2017/1/18.
 */
// import React from 'react'
import {CREATE_POST, INPUT_CHANGE} from '../actions/index'

export default (state = {comment: '', value: ''}, action)=>{
  switch (action.type) {
    case CREATE_POST:
      return { ...state, comment: action.payload }
    case INPUT_CHANGE:
      return { ...state, value: action.payload }
    default:
      return state
  }
}