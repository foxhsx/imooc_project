## React + Antd 管理端后台

### 创建项目

> create-react-app 版本 5.0.1

```bash
npx create-react-app stu-shop-manager
```

### 安装 Antd

> 对应最新版本 v5.1.0

```bash
npm i antd
```

### 安装路由

> 对应安装最新版本 6.4

```bash
npm i react-router-dom
```

### 目录

- 页面目录-pages
- 组件目录-components
- 入口文件-index.js
- 根文件-App.js
- 路由目录-routes

#### 6.4 路由写法

我们采用 `createHashRouter` 和 `RouterProvider` 来完成路由部分。示例代码如下：

```js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createHashRouter, RouterProvider } from 'react-router-dom'
import './index.css';
import reportWebVitals from './reportWebVitals';
import Login from './pages/Login';
import List from './pages/admin/products/List';

const router = createHashRouter([
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/admin/products',
    element: <List />,
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
```