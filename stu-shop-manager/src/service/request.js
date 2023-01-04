import axios from 'axios';
import { getToken } from '../utils';

const instance = axios.create({
  baseURL: 'http://localhost:3009',
  timeout: 5000
})

instance.interceptors.request.use(function (config) {
  config.headers['authorization'] = 'Bearer ' + getToken();
  return config
}, function (error) {
  return Promise.reject(error)
})

instance.interceptors.response.use(function (response) {
  return response.data
}, function (error) {
  return Promise.reject(error)
})

export function get(url, params) {
  return instance.get(url, {
    params
  })
}

export function post(url, data) {
  return instance.post(url, data)
}

export function put(url, data) {
  return instance.put(url, data)
}

export function del(url) {
  return instance.delete(url)
}
