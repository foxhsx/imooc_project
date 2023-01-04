const router = require('express').Router();
const Manager = require('../../models/manager');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken"); // 对jwt数据进行加密处理
const { jwtSecret } = require("../../utils/config");

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