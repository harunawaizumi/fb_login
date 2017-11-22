import * as type from './types'

const initialState = {
  token: null,
  username: null,
  isAuthenticated: false,
  isAuthenticating: false,
  status: null
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.LOGIN_USER_REQUEST:
      return {
        ...state,
        isAuthenticated: false,
        isAuthenticating: true,
        status: 'authenticating'
      }

    case type.LOGIN_USER_SUCCESS:
      return {
        isAuthenticated: true,
        isAuthenticating: false,
        userId: action.payload.data.user_info.id,
        userInfo: action.payload.data.user_info,
        status: 'success'
      }

    case type.LOGIN_USER_FAILURE:
      return {
        ...state,
        isAuthenticated: false,
        isAuthenticating: false,
        error: 'Invalid credentials',
        status: 'failed'
      }

    case type.LOGOUT_USER:
      return {
        ...state,
        isAuthenticated: false,
        isAuthenticating: false,
        status: 'unauthenticated'
      }

    case type.UPDATE_AUTH_STATUS:
      return {
        ...state,
        userId: action.payload.userId,
        isAuthenticated: action.payload.userId !== null,
        isAuthenticating: false
      }

    default:
      return state
  }
}

export default authReducer
