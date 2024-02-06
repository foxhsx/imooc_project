- [React Router](#react-router)
  - [什么是 React Router？](#什么是-react-router)
  - [BrowserRouter](#browserrouter)
  - [Routes](#routes)
  - [Route](#route)
  - [NavLink](#navlink)
  - [Link](#link)
  - [Navigate](#navigate)
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

BrowserRouter 是 React Router 中的一种路由模式，还有我们常见的 HashRouter（一般我们使用这种路由模式）。

BrowserRouter 使用 HTML5 的 history API 实现了一个完整的前端路由解决方案，可以让 URL 与 UI 同步更新，同时也支持浏览器的后退和前进按钮。

简单来说，BrowserRouter 提供了一个能够在客户端上处理网站内部导航的机制。它监听浏览器的地址栏变化，并将相应的组件渲染到页面上。

在使用时，我们使用它来包裹项目中定义的路由。

```js
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      {/* The rest of your app goes here */}
    </BrowserRouter>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
```

### Routes

这个组件代替了原来版本中的 `Switch` 组件，它用于定义应用程序中的路由规则。

Routes 组件会根据当前的 URL 匹配相应的路由，并渲染对应的组件。通过在 Routes 组件中添加多个 Route 子组件，我们可以定义多个不同的路由规则。

当浏览器的 URL 变化时，Routes 组件会检查每个 Route 子组件的 path 属性与当前 URL 是否匹配。如果匹配成功，则渲染对应的组件；如果没有找到匹配的 Route，则渲染一个默认的“未找到页面”组件或执行其他处理。

```js
<Routes>
  <Route path="/" element={<Dashboard />}>
    <Route
      path="messages"
      element={<DashboardMessages />}
    />
    <Route path="tasks" element={<DashboardTasks />} />
  </Route>
  <Route path="about" element={<AboutPage />} />
</Routes>
```

### Route

路由应该是 React Router 应用程序中最重要的部分。它们将 URL 与组件、数据加载和数据突变耦合起来。通过路由嵌套，复杂的应用程序布局和数据依赖关系变得简单且具有声明性。（这有些官方）

在 React Router 中，Route 组件用于定义路由规则和对应的组件。它是 React Router 的核心组件之一。

通过 `Route` 组件，我们可以将 URL 路径与特定的组件关联起来。每个 `Route` `组件都有两个主要属性：path` 和 `element。`

- `path` 属性指定了要匹配的 URL 路径模式。例如，`/home` 或者 `/users/:id`。
- component 属性指定了在匹配成功时要渲染的组件。例如，`<Home />` 或 `<UserDetails />`。

Route 组件允许在组件之间导航。它是从一个组件到另一个组件的途径。

```js
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} /> {/* 👈 Renders at /app/ */}
        <Route path='/about' element={About} />
        <Route path='/contact' element={Contact} />
        <Route path='/challenges' element={Challenges} />
      </Routes>
    </BrowserRouter>
  );
}
```

> 在 React Router v6 之前的版本中，Route 组件上还有一个 exact 的属性，它的作用是用来精准匹配 URL 路径在，在 v6 的版本中已经对 path 做了更加严格的匹配规则，只有当 URL 完全匹配时才会渲染对应的元素（组件）。这意味着，不再需要使用 exact 属性来精确匹配路径。

### NavLink

NavLink 组件是用于创建导航链接的组件。它继承自 React Router 的 Link 组件，并具有一些额外的功能。

NavLink 的作用是在用户与你的应用程序进行导航时，提供一个可点击的链接，并根据当前活动的路由状态添加特定的样式或类名。这使得用户可以轻松地识别当前所处的页面或路由。

它知道当前链接的状态："active", "pending", or "transitioning". 

我们可以根据它当前的状态，来动态设置组件的 `className`。

```js
import { NavLink } from "react-router-dom";

<NavLink
  to="/messages"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""
  }
>
  Messages
</NavLink>;
```

在点击该组件时，不会触发刷新页面的操作，而是通过改变 hash 的方式来切换页面上的组件。

### Link

Link 组件允许用户通过点击事件从当前页面导航到另外一个页面，呈现在页面上实际上就是一个 a 标签，其中包含指向其链接资源的真实 href。

在 Link 组件中，需要制定目标路由路径，这样才能保证用户在点击链接时，React Router 会更新 URL 并渲染相应的路由组件。

```js
import * as React from "react";
import { Link } from "react-router-dom";

function UsersIndexPage({ users }) {
  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={user.id}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
```

### Navigate

在 React Router v6 中，Navigate 组件被用于在组件内部进行编程式导航。与 Link 和 NavLink 不同，它不是一个可点击的链接，而是一个可以在组件内部触发导航的组件。

它是 useNavigate 的组件包装器，并接受所有相同的参数作为 props。

也就是说我们在使用这个组件时，它并不是呈现出来一个链接之类的让我们去点击，而是自动帮我们进行页面的跳转（重定向）：

```js
import * as React from "react";
import { Navigate } from "react-router-dom";

class LoginForm extends React.Component {
  state = { user: null, error: null };

  async handleSubmit(event) {
    event.preventDefault();
    try {
      let user = await login(event.target);
      this.setState({ user });
    } catch (error) {
      this.setState({ error });
    }
  }

  render() {
    let { user, error } = this.state;
    return (
      <div>
        {error && <p>{error.message}</p>}
        {user && (
          <Navigate to="/dashboard" replace={true} />
        )}
        <form
          onSubmit={(event) => this.handleSubmit(event)}
        >
          <input type="text" name="username" />
          <input type="password" name="password" />
        </form>
      </div>
    );
  }
}
```

## 练习

### 练习1

1. 在react中使用什么包来实现路由？

> React Router

2. react-router-dom 中的默认导出是什么？

> 默认导出一个 router 对象，里面有：
> - BrowserRouter
> - HashRouter
> - Link
> - NavLink
> - Route
> - Routes
>
> 等等

3. 以下组件（Route、NavLink、Routes、Navigate）有什么用？

> 参见文章

### 练习2

使用 React Router 实现一个页面，具备路由跳转等功能。