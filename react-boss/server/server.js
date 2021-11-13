import express from 'express'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import userRouter from './user'
import model from './model'
import { resolve } from 'path'
import React from 'react'
const Chat = model.getModel('chat');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server, {
  cors: {
    origin: "http://localhost:3001", // 设置跨域
  }
});

function App() {
  return <h1>111</h1>
}
console.log(App())

io.on('connection', function (socket) {
	// 当前链接的 socket
  socket.on('sendmsg', function (data) {
    const { from, to, msg } = data
    const chatid = [from, to].sort().join('_')
    Chat.create({ chatid, from, to, content: msg}, function (err, doc) {
      io.emit('recvmsg', Object.assign({}, doc._doc))
    })
  })
})

app.use(cookieParser())
app.use(bodyParser.json())
app.use('/user', userRouter)

// 中间件
app.use(function (req, res, next) {
  // 匹配到 user 或者 static 开头的时候，会调用 next 方法，从而进入到下一步去，这样
  // 不会影响到接口
  if (
    req.url.startsWith('/user/') ||
    req.url.startsWith('/static/')
  ) {
    return next()
  }
  return res.sendFile(resolve('build/index.html'))
})
// 静态资源转发
app.use('/', express.static(resolve('build')))

server.listen(9333, function () {
  console.log('Node app start at port 9333')
})