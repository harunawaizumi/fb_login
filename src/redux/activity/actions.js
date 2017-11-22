import { ApiClient } from '../api'
import * as type from './types'
import axios from 'axios'
// export const requestActivity = (id = null) => {
//   return {
//     type: type.GET_ACTIVITY_REQUEST,
//     id: id
//   }
// }

const requestActivitySuccess = (activities) => {
  return {
    type: type.GET_ACTIVITY_SUCCESS,
    payload: activities
  }
}

const requestActivityError = error => {
  return {
    type: type.GET_ACTIVITY_ERROR,
    error
  }
}

const deleteActivitySuccess = (payload) => {
  return {
    type: type.DELETE_ACTIVITY_SUCCESS,
    payload
  }
}

const deleteActivityError = error => {
  return {
    type: type.DELETE_ACTIVITY_ERROR,
    error
  }
}

// const createActivityRequest = () => ({
//   type: type.CREATE_ACTIVITY_REQUEST
// })
//
// const createActivitySuccess = (payload) => ({
//   type: type.GET_ACTIVITY_SUCCESS,
//   data: payload
// })
//
// const createActivityError = error => ({
//   type: type.GET_ACTIVITY_ERROR,
//   error
// })
//
// const updateActivityRequest = () => ({
//   type: type.CREATE_ACTIVITY_REQUEST
// })
//
// const updateActivitySuccess = (payload) => ({
//   type: type.GET_ACTIVITY_SUCCESS,
//   data: payload
// })
//
// const updateActivityError = error => ({
//   type: type.GET_ACTIVITY_ERROR,
//   error
// })


let settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://localhost:3030/v1/activities",
    "method": "GET",
    "headers": {
        "content-type": "application/x-www-form-urlencoded",
        "accept": "application/json",
        "cache-control": "no-cache",
        "postman-token": "f9f4e733-2a4c-7b9d-9df0-99b0e63f32fc"
    },
    "data": {
        "grant_type": "password",
        "username": "admin@jimoto.co",
        "password": "12345678"
    }
}

export function fetchActivities(userId = 1) {
    return async dispatch => {
        try {
            const api = await axios(settings)
            await dispatch(requestActivitySuccess(api.data))
        } catch (error) {
            await dispatch(requestActivityError(error))
        }
    }
}


export function deleteActivity(id) {
  return async dispatch => {
    try {
      const api = new ApiClient(dispatch)
      await api.delete(`activities/${id}`)
      await dispatch(deleteActivitySuccess({id}))
    } catch (err) {
      await dispatch(deleteActivityError(err))
    }
  }
}

// export const createNewActivity = (values) => {
//   return async dispatch => {
//     dispatch(createActivityRequest())
//     //  TODO: create flow for creating activity
//     try {
//       const api = new ApiClient(dispatch)
//       // const request = await api.post('activities')
//       // const activities = _.values(request.data)
//       // api post
//       // dispatch
//       // await dispatch(createActivitySuccess(activities))
//     } catch (err) {
//       await dispatch(createActivityError(err))
//     }
//   }
// }
//
// export const updateActivity = (values) => {
//   return async dispatch => {
//     dispatch(updateActivityRequest())
//     //  TODO: create flow for updating activity
//     try {
//       const api = new ApiClient(dispatch)
//       // api update
//       // dispatch
//     } catch (err) {
//       await dispatch(updateActivityError(err))
//     }
//   }
// }
