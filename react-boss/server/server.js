const express = require('express');
const utils = require('utility')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const userRouter = require('./user')

const app = express();

app.use(cookieParser())
app.use(bodyParser.json())
app.use('/user', userRouter)

app.listen(9333, function () {
  console.log('Node app start at port 9333')
})