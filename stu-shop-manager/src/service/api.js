import { del, post, put, get } from './request';

export function loginApi(user) {
  return post('/api/v1/auth/manager_login', user)
}

export function listApi(page = 1) {
  return get('/api/v1/admin/products', { page })
}

export function createApi(data) {
  return post('/api/v1/admin/products', data)
}

export function modifyOne(id, data) {
  return put(`/api/v1/admin/products/${id}`, data)
}

export function delOne(id) {
  return del(`/api/v1/admin/products/${id}`)
}

export function register(data) {
  return post('/api/v1/auth/reg', data)
}