import * as type from './types'
import api, { ApiClient } from '../api'
import { setToken, forgetToken } from './utils'
import qs from 'qs'

export const requestLogin = (email, password) => {
  console.log('action', email, password)
  return {
    type: type.LOGIN_USER_REQUEST,
    email,
    password
  }
}

export const requestLoginSuccess = (payload) => {
  return {
    type: type.LOGIN_USER_SUCCESS,
    payload
  }
}

const requestLoginError = (message) => {
  return {
    type: type.LOGIN_USER_FAILURE,
    error: message
  }
}

export const updateAuthStatus = (userId) => {
  return {
    type: type.UPDATE_AUTH_STATUS,
    payload: {
      userId
    }
  }
}

export const requestLogout = () => {
  // remove the token from the local storage first
  forgetToken()
  return {
    type: type.LOGOUT_USER
  }
}

// set token on local storage
const finishAuthentication = (token) => {
  setToken(token)
}

// translating epics to plain redux-thunk actions
export const requestAuth = (email, password) => {
  return async (dispatch, getState) => {
    dispatch(requestLogin(email, password))
    try {
      let data = {
        grant_type: 'password',
        username: email,
        password: password
      }
      const response = await api.post('auth', qs.stringify(data), {
        auth: {
          skip: true
        }
      })
      finishAuthentication(response.data.access_token)
      dispatch(requestLoginSuccess(response))
    } catch (e) {
      console.log(e)
      dispatch(requestLoginError(e))
    }
  }
}
