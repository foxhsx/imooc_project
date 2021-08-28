# 需求分析

## 页面架构和用户交互流程

- 页面

| 用户中心 | 牛人 | BOSS |
| - | - | - |
| 登录 | 求职信息 | 管理职位 |
| 注册 | 职位列表 | 查看牛人 |
| 信息完善 | 聊天 |

- 交互

# 项目骨架

## 文件架构和规范

- src 前端源码目录

- server 后端 express 目录

- 功能文件夹：component、container 和 reducers 等

# 页面骨架

## router 怎么划分页面

- 进入应用时获取用户信息，用户未登录跳转 login 页面

- login 和 reigster 页面不需要权限认证

- 用户信息，聊天列表，职位列表页面共享底部 tabbar

# 其他

## 其他注意事项

- Mongodb 字段设计

- axios 发送异步请求

- redux 管理所有数据，组件尽量用 antd-mobile，弱化 css

# 前后端联调

## 使用 axios 发送异步请求

- 使用 proxy 代理转发，可以写到 `package.json` 中

- axios 拦截器，统一 loading 处理

- 使用 redux 异步数据，渲染页面

## 页面骨架结构实现

- 组件放在 component 文件夹下面

- 页面放在 container 文件夹下面

- 页面入口处获取用户信息，决定跳转到哪个页面

# 开发模式

## 基于 cookie 用户验证

- express 依赖 cookie-parser，需要 `npm i cookie-parser --save` 安装

- cookie 类似于一张身份卡，登录后服务器端返回，你带着 cookie 就可以访问受限资源

- 关于 cookie 的管理浏览器会自动处理

## 开发流程

1. 用户加载页面--带 cookie 向后端获取用户信息
2. 用户加载页面
  1. 已登录：跳转到 APP 内部页面
  2. 未登录：跳转到登录页面
3. 登录页面--登录成功，前端存储 cookie，然后跳转到 APP 内部页面