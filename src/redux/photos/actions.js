import { ApiClient } from '../api'
import * as type from './types'
import axios from 'axios'



// create
export const uploadPhotosRequest = (id = null) => {
    return {
        type: type.UPLOAD_PHOTO_REQUEST,
        id: id
    }
}
const uploadPhotosSuccess = (photos, userId) => {
    console.log('file reading was aborted')
    return {
        type: type.UPLOAD_PHOTO_SUCCESS,
        payload: photos,
        userId: userId
    }
}
const uploadPhotoError = error => {
    console.log('file reading has failed')
    return {
        type: type.UPLOAD_PHOTO_ERROR,
        error
    }
}
export const uploadPhoto = (values) => {
    return async dispatch => {
        dispatch(uploadPhotosRequest())
        try {
            const api = new ApiClient(dispatch)
            const reader = new FileReact()
            reader.onload = () => {
                const fileAsBinaryString = reader.result
                console.log('file', fileAsBinaryString)
            }
            //const request = await api.post('activities', values)
            //const activities = _.values(request.data)
            reader.readAsBinaryString(file)
            console.log('file reading was aborted')
            //await dispatch(uploadPhotosSuccess(activities))
        } catch (err) {
            await dispatch(uploadPhotoError(err))
        }
    }
}


