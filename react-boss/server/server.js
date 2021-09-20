const express = require('express');
const utils = require('utility')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const userRouter = require('./user')
const model = require('./model');
const Chat = model.getModel('chat');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server, {
  cors: {
    origin: "http://localhost:3001", // 设置跨域
  }
});

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

server.listen(9333, function () {
  console.log('Node app start at port 9333')
})