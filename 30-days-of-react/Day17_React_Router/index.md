- [React Router](#react-router)
  - [什么是 React Router？](#什么是-react-router)
  - [BrowserRouter](#browserrouter)
  - [Route](#route)
  - [Switch](#switch)
  - [NavLink](#navlink)
  - [Nested Routing](#nested-routing)
  - [Redirect](#redirect)
  - [Prompt](#prompt)
- [练习](#练习)
  - [练习1](#练习1)
  - [练习2](#练习2)

## React Router

### 什么是 React Router？

如果你以前可能没有听说过“路由”或“路由器”这个词，现在让我们来学习它。

路线的字面意思是到达某个地方的路径或方式。在 React 中也是一样，React Router 本身就是一个 React 组件，它允许我们在 React 组件之间导航。

在本节中，我们将开始如何使用 React router，但只是入个门。想深入学习，那么就去 [React Router](https://reactrouter.com/en/6.22.0) 官方网站进行系统学习。

我们要知道的是，React 是一个单页面应用程序，整个应用程序中只有一个 index.html 页面。当我们使用 React Router 时，不同的组件会根据不同的逻辑和条件，同时或不同时地渲染在 index.html 页面上。

目前 React Router 的版本已经更新到了 6.22.0，我们将使用此版本来进行学习。接下来让我们开始安装 React Router 包。

```bash
npm install react-router-dom
```

在组件中，我们要导入 `react-router-dom`，在这里面我们可以提取出路由中所需的所有必要的组件。

```js
import React from 'react'
import { BrowserRouter, Route, Link, NavLink, Routes, Navigate } from 'react-router-dom'
```

这是 React Router 中常用的一些组件，我们可能不会在每个项目中都包含这些组件，但是有必要去了解一下。

### BrowserRouter

### Route

### Switch

### NavLink

### Nested Routing

### Redirect

### Prompt

## 练习

### 练习1

### 练习2