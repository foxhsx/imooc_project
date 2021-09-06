import axios from "axios"
import { getRedirectPath } from '../utils'

const ERROR_MSG = 'ERROR_MSG'
const AUTH_SUCCESS = 'AUTH_SUCCESS'
const USER_DATA = 'USER_DATA'
const LOGOUT = 'LOGOUT'

const initState = {
  redirectTo: '',
  msg: '',
  user: '',
  pwd: '',
  type: ''
}

// reducer
export function user(state = initState, action) {
  switch (action.type) {
    case AUTH_SUCCESS:
      return { ...state, msg: '', redirectTo: getRedirectPath(action.data), ...action.data }
    case USER_DATA:
      return { ...state, ...action.data }
    case ERROR_MSG:
      return { ...state, isAuth: false, msg: action.msg }
    case LOGOUT:
      return { ...initState, redirectTo: '/login' }
    default:
      return state;
  }

}

function errorMsg(msg) {
  return { msg, type: ERROR_MSG }
}

function authSuccess(data) {
  return { type: AUTH_SUCCESS, data }
}

function loadData(data) {
  return { type: USER_DATA, data }
}

export function logoutSubmit() {
  return { type: LOGOUT }
}

export function register({ user, pwd, repeatpwd, type }) {
  if (!user || !pwd || !type) {
    return errorMsg('请输入用户名密码！')
  }

  if (pwd !== repeatpwd) {
    return errorMsg('密码和确认密码不一致！')
  }

  return dispatch => {
    axios.post('/user/register', { user, pwd, type })
      .then(res => {
        if (res.status === 200 && res.data.code === 0) {
          dispatch(authSuccess({ user, pwd, type }))
        } else {
          dispatch(errorMsg(res.data.msg))
        }
      })
  }
}

export function login({ user, pwd }) {
  if (!user || !pwd) {
    return errorMsg('请输入用户名密码')
  }
  return dispatch => {
    axios.post('/user/login', { user, pwd })
      .then(res => {
        if (res.status === 200 && res.data.code === 0) {
          dispatch(authSuccess(res.data.data))
        } else {
          dispatch(errorMsg(res.data.msg))
        }
      })
  }
}


export function userinfo() {
  return dispatch => {
    // 获取用户信息
    axios.get('/user/info').then(res => {
      const { status, data } = res;
      if (status === 200) {
        if (data.code === 0) {
          dispatch(loadData(data.data))
        } else {
          /**
           * 由于 AuthRoute 并不是一个路由组件,并没有操作路由的方法,
           * 所以这里打印的结果为 undefined，如果要使用，需要引进 withRouter,
           * 使用 withRouter 这个装饰器包裹一下就可以将当前的路由 history 打印出来
           */
          dispatch(errorMsg(res.data.msg))
          // 没有登录就跳转至登录页面
          window.location = '/login'
        }
      }
    })
  }

}

export function update(data) {
  return dispatch => {
    axios.post('/user/update', data)
      .then(res => {
        if (res.status === 200 && res.data.code === 0) {
          dispatch(authSuccess(res.data.data))
        } else {
          dispatch(errorMsg(res.data.msg))
        }
      })
  }
}

