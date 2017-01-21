/**
 * Created by aliyy on 2017/1/18.
 */
// import React from 'react'
import {INPUT_CHANGE} from '../actions/index'

export const INIT_STATE = ''
export default (state = INIT_STATE , action)=>{
  if (action) {
    switch (action.type) {
      case INPUT_CHANGE:
        return action.payload
      default:
        return state
    }
  }
  return state;
}