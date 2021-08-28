import axios from "axios"
import { getRedirectPath } from '../utils'

const RESISTER_SUCCESS = 'RESISTER_SUCCESS'
const ERROR_MSG = 'ERROR_MSG'
const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
const USER_DATA = 'USER_DATA'

const initState = {
  redirectTo: '',
  isAuth: false,
  msg: '',
  user: '',
  pwd: '',
  type: ''
}

// reducer
export function user(state = initState, action) {
  switch (action.type) {
    case RESISTER_SUCCESS:
      return { ...state, msg: '', redirectTo: getRedirectPath(action.data), isAuth: true, ...action.data }
    case LOGIN_SUCCESS:
      return { ...state, msg: '', redirectTo: getRedirectPath(action.data), isAuth: true, ...action.data }
    case USER_DATA:
      return { ...state, ...action.data }
    case ERROR_MSG:
      return { ...state, isAuth: false, msg: action.msg }
    default:
      return state;
  }
  
}

function errorMsg(msg) {
  return { msg, type: ERROR_MSG }
}

function registerSuccess(data) {
  return { type: RESISTER_SUCCESS, data }
}

function loginSuccess(data) {
  return { type: LOGIN_SUCCESS, data }
}

function loadData(data) {
  return { type: USER_DATA, data }
}

export function register({user, pwd, repeatpwd,type}) {
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
          dispatch(registerSuccess({user, pwd, type}))
        } else {
          dispatch(errorMsg(res.data.msg))
        }
      })
  }
}

export function login({user, pwd}) {
  if (!user || !pwd) {
    return errorMsg('请输入用户名密码')
  }
  return dispatch => {
    axios.post('/user/login', { user, pwd })
      .then(res => {
        if (res.status === 200 && res.data.code === 0) {
          dispatch(loginSuccess(res.data.data))
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
          console.log(data); // 有登录信息
          dispatch(loadData(res.data.data))
        } else {
          /**
           * 由于 AuthRoute 并不是一个路由组件,并没有操作路由的方法,
           * 所以这里打印的结果为 undefined，如果要使用，需要引进 withRouter,
           * 使用 withRouter 这个装饰器包裹一下就可以将当前的路由 history 打印出来
           */
          // console.log(this.props.history);
          dispatch(errorMsg(res.data.msg))
          // 没有登录就跳转至登录页面
          window.location = '/login'
        }
      }
    })
    // 是否登录

    // 用户的身份是 boss 还是牛人

    // 用户是否完善信息
  }
   
}

