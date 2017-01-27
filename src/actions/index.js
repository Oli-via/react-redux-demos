import axios from 'axios';
import { AUTH_USER, UNAUTH_USER, AUTH_ERROR, FETCH_MESSAGE } from '../actions/type';
import { browserHistory } from 'react-router';

const ROOT_URL = 'http://localhost:3090';

export function signInUser({ email, password }) {
  // redux-thunk is a middleware that allows us to return a function,
  // and to call that function with dispatch method
  // the purpose of redux-thunk is to allow us to dispatch multiple different actions inside of an action creator
  // we can dispatch as many actions as we want
  return function (dispatch) {
//  Submit email/password to the server
    axios.post(`${ROOT_URL}/signin`, { email, password })
      .then(response=>{
        //  If request is good
        //  - update state to indicate user is authenticated
        dispatch({ type: AUTH_USER });
        //  - Save the jwt token
        localStorage.setItem("token", response.data.token);
        //  - redirect to the route '/feature'
        browserHistory.push('/feature');
      })
      .catch(()=>{
        //  If request if bad
        //  Show an error to the user
        dispatch(authError('Bad Login Info'));
      })


  }
};

export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  }
}
export function signOut() {
  localStorage.removeItem('token');
  return {
    type: UNAUTH_USER
  }
}
export function signUp({ email, password }) {
  return function (dispatch) {
    axios.post(`${ROOT_URL}/signup`, { email, password })
      .then(responds=>{
        const token = responds.data.token;
        if (token) {
          dispatch({ type: AUTH_USER });
          localStorage.setItem("token", token);
          browserHistory.push('/feature');
        }
      })
      .catch((err)=>{
        dispatch(authError(err.response.data.error));
      })
  }
};
export function fetchMessage() {
  return function (dispatch) {
    axios.get(ROOT_URL, {
      headers: { authorization: localStorage.getItem('token')}
    })
      .then(responds=> {
        dispatch({
          type: FETCH_MESSAGE,
          payload: responds.data.message
        });
      });
  }
};

export function authUser() {
  return {
    type: AUTH_USER
  }
}