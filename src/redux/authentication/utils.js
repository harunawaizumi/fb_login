import jwtDecode from 'jwt-decode'

export const getToken = () => localStorage.getItem('token')
export const setToken = (newToken) => localStorage.setItem('token', newToken)
export const forgetToken = () => localStorage.removeItem('token')
export const decodeToken = (token) => jwtDecode(token)
export function getUserIdFromToken(token) {
  const payload = decodeToken(token)
  return payload.sub
}
