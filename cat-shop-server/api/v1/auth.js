const router = require('express').Router();
const Manager = require('../../models/manager');
const User = require('../../models/user');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken"); // 对jwt数据进行加密处理
const { jwtSecret } = require("../../utils/config");

router.post('/reg', async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const isUserExist = await User.count({ username });
    if (isUserExist > 0) {
      res.json({
        code: 'error',
        message: '用户名已存在'
      })
    } else {
      const user = new User(req.body);
      const slat = bcrypt.genSaltSync(10);
      const pwd = bcrypt.hashSync(password, slat);  // 对密码进行加密
      user.password = pwd;
      const userResult = await user.save();
      const token = jwt.sign(
        {
          userId: userResult.id,
        },
        jwtSecret,
        {
          expiresIn: "10h"
        }
      );
      res.json({
        code: 'success',
        token,
      })
    }
  } catch (error) {
    next(error)
  }
})

router.post('/manager_login', async (req, res, next) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      res.json({
        code: 'error',
        message: '请输入用户名或密码！'
      })
      return;
    }

    const user = await Manager.findOne({ username });
    if (user) {
      const isPwdValidated = bcrypt.compareSync(password, user.password);
      if (isPwdValidated) {
        res.json({
          code: "success",
          token: jwt.sign(
            { userId: u.id },
            jwtSecret,
            { expiresIn: '10h' }
          )
        })
      } else {
        res.json({
          code: 'error',
          message: '用户密码错误！'
        })
      }
    } else {
      res.json({
        code: 'error',
        message: '用户信息不存在！'
      })
    }
  } catch (error) {
    next(error)
  }
})

module.exports = router;