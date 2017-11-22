import * as type from './types'
import _ from 'lodash'

const initialState = {
  all: {},
  fetching: true
}

const mapActivityList = (activityList) => {
  const activities = {}
  for (const activity of activityList) {
    activities[activity.id] = activity
  }
  return activities
}

const activityReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.GET_ACTIVITY_REQUEST :
      return {
        ...state,
        fetching: true,
        error: null
      }
    case type.GET_ACTIVITY_SUCCESS :
      return {
        ...state,
        fetching: false,
        error: null,
        all: { ...state.all, ...mapActivityList(action.payload) }
      }
    case type.GET_ACTIVITY_ERROR :
      return {
        ...state,
        fetching: false,
        error: action.error
      }
    case type.DELETE_ACTIVITY_SUCCESS :
      return {
        ...state,
        fetching: false,
        error: null,
        all: _.omit(action.payload.id)
      }
    // TODO: Create, update, edit, delete
    case type.CREATE_ACTIVITY_REQUEST :
      return {
        ...state,
        fetching: false,
        error: null
      }
    case type.CREATE_ACTIVITY_ERROR :
      return {
        ...state,
        fetching: false,
        error: action.error
      }
    case type.CREATE_ACTIVITY_SUCCESS :
      return {
        ...state,
        fetching: false,
        error: null,
        // all: action.payload
        // all: { ...state.all, ...mapActivityList(action.payload) }
      }
    // END OF TODO
    default:
      return state
  }
}

export default activityReducer
