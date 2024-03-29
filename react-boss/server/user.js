const express = require('express');
const utils = require('utility')
const Router = express.Router();
const model = require('./model');
const User = model.getModel('user');
const Chat = model.getModel('chat');

// 需要过滤掉得返回值信息
const _filter = { 'pwd': 0, '__v': 0 }

Router.get('/list', function (req, res) {
  // User.remove({}, function (e,d) {}) 清除所有数据
  const { type } = req.query
  User.find({type}, function (err, doc) {
    if (!doc) {
      return res.json({ code: 1, msg: '出错了' })
    }
    return res.json({code: 0, data: doc})
  })
})

Router.get('/getmsglist', function (req, res) {
  const user = req.cookies.userid;
  User.find({}, function (e, userdoc) {
    let users = {}
    userdoc.forEach(v => {
      users[v._id] = { name: v.user, avatar: v.avatar }
    })
    Chat.find({'$or': [{ from: user}, {to: user }]}, function (err, doc) {
      if (!err) {
        return res.json({code: 0, msgs: doc, users: users})
      }
    })
  })
})

Router.post('/readmsg', function (req, res) {
  const userid = req.cookies.userid
  const { from } = req.body
  Chat.update(
    {from, to: userid},
    {'$set': {read: true}},
    {'multi': true},
    function (err, doc) {
    console.log(doc)
    /**
     * n: 消息总数
     * nModified: 修改数量
     * ok: 1 修改成功 0 修改不成功
     */
    if (!err) {
      return res.json({code: 0, num: doc.nModified})
    }
    return res.json({code: 1, msg: '修改失败'})
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