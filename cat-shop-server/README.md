### 需要什么？

那么对于我们的整体项目而言，服务端从技术栈来讲，使用 Node 的服务端框架 `Express`，搭配 NoSQL 数据库 `MongoDB`来做主体。

除此之外，我们还需要解决：

*   跨域问题，这里使用第三方插件——`cors`

*   解析 `body` 体，也是使用第三方插件——`body-parse`

*   要链接数据库及定义 `Schema`，需要用到——`mongoose`

*   使用 jwt 加密生成 token，使用——`jsonwebtoken`

*   对密码进行加密处理，使用——`bcryptjs`

*   存储图片时需要用到 `fs` 模块

*   对日期进行格式化处理——`moment`

*   使用 `multer`插件辅助定义图片的上传路径和名称

服务端的逻辑和代码整体来说是比较简单的，所以这里主要说下里面使用到的插件及其 API。

### [CORS](https://github.com/expressjs/cors)

首先是 `cors`，它的使用比较简单，配合 `express` 实例的 `all` 方法即可。

```js
const express = require('express');
const cors = require('cors')

const app = express();

app.all('/api/*', cors());
```

### [body-parse](https://github.com/expressjs/body-parser)

我们使用 `body-parse` 来帮助我们解析不同的 `content-type`，项目里使用到了两种类型，代码如下：

```js
const express = require('express');
const bodyParser = require("body-parser");

const app = express();

// parse application/x-www-form-urlencoded
app.use(
  bodyParser.urlencoded({
    extended: false,
    limit: "10000kb"
  })
);
// parse application/json
app.use(
  bodyParser.json({
    limit: "10000kb"
  })
);
```

### [mongoose](https://mongoosejs.com/)

我们需要使用 `mongoose`来连接 `mongodb` 数据库，还要使用它帮助我们定义 `schema`：

```js
// model manager.js 定义 schema
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

// db.js 连接数据库
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/cat-shop", {
    useNewUrlParser: true
  })
  .then(res => {
    // console.log(res);
    console.log("数据库连接成功");
  })
  .catch(err => {
    console.log(err);
  });

```

### [jsonwebtoken](https://self-issued.info/docs/draft-ietf-oauth-json-web-token.html)

这是服务端生成 token 常见的插件，它的使用也非常简单：

```js
const jwt = require("jsonwebtoken"); // 对jwt数据进行加密处理
// jwt 密钥，一般是一个常量
const jwtSecret = 'Arivin';

const token = jwt.sign(
  { userId: userResult.id },  // 每个用户的 ID，这是保证每个用户都有不同的 token
  jwtSecret,
  { expiresIn: "10h" },  // 有效时间
);
```

### [bcryptjs](https://github.com/dcodeIO/bcrypt.js#readme)

使用该插件对明文的密码进行加密，并可以对比明文密码是否与加密过的密码对应上。

```js
const bcrypt = require("bcryptjs");

// 设置加密的复杂程度，默认为 10
const slat = bcrypt.genSaltSync(10);
const pwd = bcrypt.hashSync(password, slat);  // 对密码进行加密
// 对现存的加密密码和用户输入的密码做比对
const isPwdValidated = bcrypt.compareSync(password, user.password);
```

### [multer](https://github.com/expressjs/multer/blob/master/doc/README-zh-cn.md)

Multer 是一个 node.js 中间件，用于处理 `multipart/form-data` 类型的表单数据，它主要用于上传文件。

```js
const multer = require('multer');

const storage = multer.diskStorage({
  // 文件上传路径
  destination: function (req, file, cb) {
    cb(null, `${path}/${todayDir}`);
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '.' + file.originalname.split('.').slice(-1))
  }
})

const upload = multer({ storage: storage });
```

使用磁盘存储引擎（diskStorage）可以让你控制文件的存储。

有两个选项可用，`destination` 和 `filename`。他们都是用来确定文件存储位置的函数。

`destination` 是用来确定上传的文件应该存储在哪个文件夹中。也可以提供一个 `string` (例如 `'/tmp/uploads'`)。如果没有设置 `destination`，则使用操作系统默认的临时文件夹。

`filename` 用于确定文件夹中的文件名的确定。 如果没有设置 `filename`，每个文件将设置为一个随机文件名，并且是没有扩展名的。

最终返回一个 `multer.StorageEngine` 类型的对象，然后将其传递给 `multer` 函数即可，该方法返回一个 `multer.Multer`类型的实例。使用如下：

```javascript
app.post('/profile', upload.single('avatar'), function (req, res, next) {
  // req.file 是 `avatar` 文件的信息
  // req.body 将具有文本域数据，如果存在的话
})
```

### 静态文件

对于服务端的静态文件，比如前端要请求的图片等资源，可以使用 `express` 内置的中间件函数 `static` 来进行配置，这是Express中一个内置的中间件函数。它基于`service-static` 为静态文件提供服务：

```js
app.use("/", express.static("./public"));
```

