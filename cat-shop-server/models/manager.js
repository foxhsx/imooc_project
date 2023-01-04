const mongoose = require('mongoose')

const managerSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  nickName: {
    type: String,
  },
  avatar: {
    type: String,
  }
})

module.exports = mongoose.model('Manager', managerSchema)