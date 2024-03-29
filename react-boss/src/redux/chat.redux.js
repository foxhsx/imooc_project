import axios from 'axios';
import io from 'socket.io-client'

// 需要配置下跨域
const socket = io('ws://192.168.1.12:9333')

// 聊天信息列表
const MSG_LIST = 'MSG_LIST'
// 读取信息
const MSG_RECV = 'MSG_RECV'
// 标识已读
const MSG_READ = 'MSG_READ'

const inintState = {
  chatMsg: [],
  users: {},
  unread: 0
}

export function chat(state = inintState, action) {
  switch (action.type) {
    case MSG_LIST:
      return { ...state, chatMsg: action.data.msgs, unread: action.data.msgs.filter(v => !v.read && v.to == action.data.userid).length, users: action.data.users }
    case MSG_RECV:
      const n = action.userid == action.data.to ? 1 : 0
      return { ...state, chatMsg: [...state.chatMsg, action.data], unread: state.unread+n }
    case MSG_READ:
      const {from, num}  = action.data
      return {
        ...state,
        chatMsg: state.chatMsg.map(v => (
          {
            ...v,
            read: from === v.from ? true : false
          }
        )),
        unread: state.unread - num
      }
    default:
      return state;
  }
}

// action creater
function msgList(msgs, users, userid) {
  return { type: 'MSG_LIST', data: {msgs, users, userid} }
}

function msgRecv(data, userid) {
  return { type: 'MSG_RECV', data: data, userid }
}

function msgRead({from, to, num}) {
  return {type: MSG_READ, data: {from, to, num}}
}

export function readMsg(from) {
  return (dispatch, getState) => {
    axios.post('/user/readmsg', { from })
      .then(res => {
        const userid = getState().user._id
        if (res.status === 200 && res.data.code === 0) {
          dispatch(msgRead({
            userid,
            from,
            num: res.data.num,
          }))
        }
      })
  }
}

export function recvMsg() {
  return (dispatch, getState) => {
    socket.on('recvmsg', function (data) {
      const userid = getState().user._id
      dispatch(msgRecv(data, userid))
    })
  }
}

export function getMsgList() {
  return (dispatch, getState) => {
    axios.get('/user/getmsglist')
      .then(res => {
        if (res.status === 200 && res.data.code === 0) {
          const userid = getState().user._id
          dispatch(msgList(res.data.msgs, res.data.users, userid))
        }
      })
  }
}

export function sendMsg(from, to, msg) {
  return dispatch => {
    socket.emit('sendmsg', { from, to, msg })
  }
}