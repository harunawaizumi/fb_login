/**
 * Created by haruna on 9/13/17.
 */
import axios from 'axios'
import url from 'url'
import {getToken, getUserIdFromToken} from '../authentication/utils'
import {updateAuthStatus} from '../authentication/actions'

const jimotoAPI = localStorage.getItem('JIMOTO_API_URL') || 'http://localhost:3030/'

const axiosApi = axios.create({
  baseURL: url.resolve(jimotoAPI, '/v1'),
  timeout: 1000
})

function addAuthHeaders(opts, token) {
  if (typeof opts.headers !== 'object') {
    opts.headers = {}
  }
  opts.headers['Authorization'] = `Bearer ${token}`
}

export class ApiClient {
  constructor(dispatch) {
    this.dispatch = dispatch
  }
  async get(url, opts = {}) {
    this.updateAuthStatus(opts)
    return await axiosApi.get(url, opts)
  }
  async post(url, data, opts = {}) {
    this.updateAuthStatus(opts)
    return await axiosApi.post(url, data, opts)
  }
  async put(url, data, opts = {}) {
    this.updateAuthStatus(opts)
    return await axiosApi.put(url, data, opts)
  }
  async patch(url, data, opts = {}) {
    this.updateAuthStatus(opts)
    return await axiosApi.patch(url, data, opts)
  }
  async delete(url, opts = {}) {
    this.updateAuthStatus(opts)
    return await axiosApi.delete(url, opts)
  }

  updateAuthStatus(opts) {
    const { auth = {} } = opts
    const token = getToken()
    // User ID will be set to null if no token is set
    const userId = token ? getUserIdFromToken(token) : null
    this.dispatch(updateAuthStatus(userId))
    if (!auth.skip) {
      addAuthHeaders(opts, token)
    }
  }
}

export default axiosApi
