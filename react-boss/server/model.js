// 引入 mongoose 
const mongoose = require('mongoose');

// 链接数据库，并且使用 imooc 这个集合，没有会自动在数据库中创建
const DB_URL = 'mongodb://localhost:27017/imooc-chat';
mongoose.connect(DB_URL);
mongoose.connection.on('connected', function () {
  console.log('mongo connect success');
})

const models = {
  user: {
    'user': {
      'type': String,
      'require': true
    },
    'pwd': {
      'type': String,
      'require': true
    },
    'type': {
      'type': String,
      'require': true
    },
    // 头像
    'avatar': { 'type': String },
    // 个人简介或者职位简介
    'desc': { 'type': String },
    // 职位名
    'title': { 'type': String },
    // 如果是 boss，还有两个字段
    // 公司
    'company': { 'type': String },
    // 薪资
    'money': { 'type': String },
  },
  chat: {
    // 用来一次找到 from 到 to 的信息
    'chatid': { 'type': String, 'require': true },
    // 发送者
    'from': { 'type': String, 'require': true },
    // 接收者
    'to': { 'type': String, 'require': true },
    // 是否已读，肯定是只对 to 有效
    'read': { 'type': Boolean, 'default': false },
    // 发送内容
    'content': { 'type': String, 'require': true, 'default': '' },
    // 创建时间
    'create_time': { 'type': Number, 'default': new Date().getTime() },
  }
}

for (let m in models) {
  mongoose.model(m, new mongoose.Schema(models[m]))
}

module.exports = {
  getModel: function (name) {
    return mongoose.model(name)
  }
}

// 类似于 mysql 中的表，mongo 里有文档和字段的概念，定义文档模型，Schema 和 mode 新建模型
// const User = mongoose.model('user', new mongoose.Schema({
//   user: {
//     type: String,
//     require: true,
//   },
//   age: {
//     type: Number,
//     require: true
//   }
// }))

// 通过 create、remove、update 分别用来增、删、改的操作，find 和 findOne 用来查询数据
// User.create({
//   user: 'cecil',
//   age: 18
// }, function (err, doc) {
//   // 第一个参数为 err，第二个参数为文档
//   if (!err) {
//     console.log(doc);
//   } else {
//     console.log(err);
//   }
// })

  // User.update({user: 'cecil'}, {'$set': {age: 27}}, function(err, doc) {
  //   if (!err) {
  //     console.log(doc);
  //   } else {
  //     console.log(err);
  //   }
  // })

  // 在路由里使用
  // app.get('/data', function (req, res) {
    // res.json({
    //   name: 'cecil react',
    //   type: 'front'
    // })
  
    // User.find({}, function(err, doc) {
      // 查询所有，传一个空对象
  //     res.json(doc)
  //   })
  // })