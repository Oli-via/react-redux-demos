import axios from 'axios'

const request = axios.get('http://jsonplaceholder.typicode.com/users')

export const FETCH_USERS = 'FETCH_USERS'
export function fetchUsers() {
  return {
    type: FETCH_USERS,
    payload: request
  }
}