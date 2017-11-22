import * as type from './types'
import _ from 'lodash'

const initialState = {
  photo: {},
  fetching: true
}

const mapPhotoList = (PhotoList) => {
  const photos = {}
  for (const photo of PhotoList) {
      photos[photo.id] = photo
  }
  return photos
}

const photoReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.UPLOAD_PHOTO_REQUEST :
      return {
        ...state,
        fetching: true,
        error: null
      }
    case type.UPLOAD_PHOTO_SUCCESS :
      return {
        ...state,
        fetching: false,
        error: null,
        photo: { ...mapPhotoList(action.payload) }
      }
    case type.UPLOAD_PHOTO_ERROR :
      return {
          ...state,
          fetching: false,
          error: action.error
      }
    default:
      return state
  }
}

export default photoReducer
