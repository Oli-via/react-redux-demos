import { IS_AUTH } from '../actions'

export default (state = false, action) => {
  switch(action.type){
    case IS_AUTH:
      return action.payload
  }
  return state
}