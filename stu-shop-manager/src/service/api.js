import { del, post, put, get } from './request';

export function loginApi(user) {
  return post('/api/v1/auth/login', user)
}

export function listApi(page = 1) {
  return get('/api/v1/products', { page })
}

export function createApi(data) {
  return post('/api/v1/products', data)
}

export function getOneId(id) {
  return get(`/api/v1/products/${id}`)
}

export function modifyOne(id, data) {
  return put(`/api/v1/products/${id}`, data)
}

export function delOne(id) {
  return del(`/api/v1/products/${id}`)
}

export function register(data) {
  return post('/api/v1/auth/reg', data)
}