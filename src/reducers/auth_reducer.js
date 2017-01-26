/**
 * Created by aliyy on 2017/1/26.
 */
import { AUTH_USER, UNAUTH_USER, AUTH_ERROR} from '../actions/type';

export function authUser(state={}, action) {
  switch (action.type) {
    case AUTH_USER:
      return { ...state, authorized: true, error: '' };
    case UNAUTH_USER:
      return { ...state, authorized: false };
    case AUTH_ERROR:
      return { ...state, error: action.payload };
  }
  return state;
}