const express = require('express');
const utils = require('utility')
const Router = express.Router();
const model = require('./model');
const User = model.getModel('user');

// 需要过滤掉得返回值信息
const _filter = { 'pwd': 0, '__v': 0 }

Router.get('/list', function (req, res) {
  // User.remove({}, function (e,d) {}) 清除所有数据
  User.find({}, function (err, doc) {
    return res.json(doc)
  })
})

Router.post('/update', function (req, res) {
  const userid = req.cookies.userid;
  if(!userid) {
    return res.json({
      code: 1
    })
  }
  const body = req.body;
  User.findByIdAndUpdate(userid, body, function (err, doc) {
    const data = Object.assign({}, {
      user: doc.user,
      type: doc.type
    }, body)
    return res.json({code: 0, data})
  })
})

Router.post('/login', function (req, res) {
  const { user, pwd } = req.body;
  // pwd: 0 在返回值中不显示密码
  User.findOne({ user, pwd: md5Pwd(pwd) }, _filter, function (err, doc) {
    if (!doc) {
      return res.json({ code: 1, msg: '用户名或密码错误' })
    }
    // 设置 cookie
    res.cookie('userid', doc._id)
    return res.json({ code: 0, data: doc })
  })
})

Router.post('/register', function (req, res) {
  const { user, pwd, type } = req.body
  User.findOne({user}, function (err, doc) {
    if (doc) {
      return res.json({ code: 1, msg: '用户名重复' })
    }

    const userModel = new User({ user, pwd: md5Pwd(pwd), type })
    userModel.save(function (e,d) {
      if (e) {
        return res.json({ code: 1, msg: '后端出错' })
      }
      const { user, type, _id } = d
      res.cookie('userid', _id)
      return res.json({ code: 0, data: { user, type, _id } })
    })
  })
})

Router.get('/info', function (req, res) {
  // 用户有没有 cookie
  const { userid } = req.cookies;
  if (!userid) {
    return res.json({
      code: 1
    })
  }
  User.findOne({_id: userid}, _filter, function (err, doc) {
    if (err) {
      return res.json({ code: 0, msg: '后端出错了' })
    }
    if (doc) {
      return res.json({ code: 0, data: doc })
    }
  })
})

function md5Pwd(pwd) {
  const salt = 'cecil_study_always_@$%@';
  return utils.md5(utils.md5(pwd+salt));
}

module.exports = Router