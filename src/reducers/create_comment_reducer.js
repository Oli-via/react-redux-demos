/**
 * Created by aliyy on 2017/1/18.
 */
// import React from 'react'
import {CREATE_POST} from '../actions/index'

export const INIT_STATE = []
export default (state = INIT_STATE , action)=>{
  // if (action) {
  switch (action.type) {
    case CREATE_POST:
      return [...state, action.payload]  //!!!这里要注意返回的数据格式！！！
    default:
      return state
  }
  // }
  return state;
}