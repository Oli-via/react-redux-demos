
export const CREATE_POST = 'CREATE_POST'
export const INPUT_CHANGE = 'INPUT_CHANGE'

export function createPost(comment) {
  return {
    type: CREATE_POST,
    payload: comment
  }
}
export function inputChange(value) {
  return {
    type: INPUT_CHANGE,
    payload: value
  }
}