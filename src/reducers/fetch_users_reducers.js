/**
 * Created by aliyy on 2017/1/23.
 */
import { FETCH_USERS } from '../actions'

export default function fetchUsers(state = [], action) {
  switch (action.type){
    case FETCH_USERS:
      return [...state, ...action.payload]
  }
  return state;
}