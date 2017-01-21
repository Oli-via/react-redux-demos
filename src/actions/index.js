export const IS_AUTH = 'IS_AUTH'

export function isAuth(authenticated) {
  return {
    type: IS_AUTH,
    payload: authenticated
  }
}