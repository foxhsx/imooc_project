这是2023年的第一个完成的练手项目。主要技术栈如下：

### 前端

该项目是一个 React + Antd + React-Router 的后台管理项目。其中包含有：

*   登录、注册、退出

*   商品管理

    *   商品的上下架

    *   删除

    *   编辑

    *   图片上传

    *   增加商品描述

    *   分页

*   概览页面

*   通知列表：已读、全部已读

下面是本项目依赖的所有版本，确保项目可以正常运行。

| 依赖                     | 版本     |
| :--------------------- | :----- |
| `antd`                 | 5.1.4  |
| `axios`                | 1.2.2  |
| `draft-js`             | 0.11.7 |
| `draft-js-export-html` | 1.4.1  |
| `draft-js-import-html` | 1.4.1  |
| `react`                | 18.2.0 |
| `react-dom`            | 18.2.0 |
| `react-redux`          | 8.0.5  |
| `react-router-dom`     | 6.6.0  |
| `redux`                | 4.0.5  |
| `redux-thunk`          | 2.3.0  |

### 服务端

主要提供对应的功能接口，技术栈有：Express + Mongodb。下面是服务端项目的依赖

| 依赖             | 版本     |
| :------------- | :----- |
| `express`      | 4.16.4 |
| `mongoose`     | 5.8.0  |
| `moment`       | 2.24.0 |
| `multer`       | 1.4.1  |
| `nodemon`      | 2.0.7  |
| `bcryptjs`     | 2.4.3  |
| `body-parser`  | 1.18.3 |
| `cors`         | 2.8.5  |
| `jsonwebtoken` | 8.5.0  |

## 前端笔记

### React 18 的更新语法

#### DOM 挂载

18中的 DOM 挂载是使用客户端的 ReactDOM，也就是 import 自 `react-dom/client`。然后使用 `ReactDOM.createRoot` API 来创建一个 `ReactDOM` 实例，这个API接收一个参数，这个参数就是我们的 DOM 节点。

```ts
import ReactDOM from 'react-dom/client';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<入口组件>)
```

### React-Router V6

#### 新语法

*   支持 Data API 的写法，也就是类似 VueRouter 中的路由写法一样，可以把路由数据写到一个数组中去

*   使用 `createHashRouter` 和 `createBrowserRouter` 等 API 来创建对应的路由实例，参数就是对应的路由数据

*   也支持之前的路由写法，提供了 `HashRouter` 和 `BrowserRouter` 还有 `MemoryRouter` 等等路由组件

*   `RouterProvider` 组件，这个组件会接受所有的路由对象来构建我们的路由系统

*   `Navigate` 组件，和 `Link` 组件很相似，但是它是一个围绕`useNavigate`的组件包装器，并接受所有与props相同的参数，而 `useNavigate` hook 函数，返回一个 `NavigateFunction` 方法，该方法可以实现路由的跳转。

```js
// hooks 写法
const navigate = useNavigate();
navigate('/');

// 组件写法
<Navigate to="/login" replace />
```

*   原来的 `component` 属性，改为了 `element` 属性

*   类似于 `Vue` 中的 `router-view`，`react-router-dom`里提供了 `Outlet` 组件，父路由元素中应使用它来渲染其子路由元素。如果父路由完全匹配，则它将呈现子索引路由，如果没有索引路由，则不呈现

```js
// 父组件 App.js
import React from 'react';
import Frame from './components/Frame';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <Frame>
      <Outlet />
    </Frame>
  )
}
```

#### 如何根据路由渲染菜单栏

要渲染菜单部分，需要有 UI 组件和数据源两部分，即 `Menu`组件和 `routes`路由数组对象。我们只要按照 `Menu` 组件中的 `items` 属性所需要的数据结构来排列组合我们的 `routes` 数组对象即可。最后把重组好的数据传给 `Menu` 组件里的 `items`。

```js
<Menu
  mode="inline"
  defaultSelectedKeys={['/admin/']}
  defaultOpenKeys={['/admin/']}
  style={{ height: '100%', borderRight: 0 }}
  items={routes}
  onClick={({ keyPath }) => navigate(keyPath.reverse().join(''))}
/>
```

### Antd5 中的新用法

#### 图标

在 `Antd5` 中，图标组件不是全局引入的，需要我们在组件内部按需引入。

> 因为不是全局引入的，所以在做左侧菜单时，如果有用到 `icon` 组件，我们就不能直接引入图标组件，而是在实际渲染菜单的页面，引入图标组件，路由表里只输入组件的 `key`

```js
// routes.js
export const adminRoutes = [
  {
    path: '/admin/',
    // 嵌套路由这里和 `Outlet` 组件是对应的
    element: <App />,
    isShow: true,
    label: '后台管理',
    children: [
      {
        path: 'dashboard',
        element: <Dashboard />,
        label: '看板',
        isShow: true,
        icon: 'AreaChartOutlined'
      },
      {
        path: 'products',
        element: <List />,
        label: '商品管理',
        isShow: true,
        icon: 'ShopOutlined'
      },
      {
        // id 为可选参数，携带表示编辑，反之为新增
        path: 'products/edit/:id?',
        element: <Edit />,
        label: '编辑详情',
        isShow: false,
      },
      {
        path: 'notices',
        element: <Notices />,
        label: '通知中心',
        isShow: true,
        icon: "BellOutlined"
      }
    ]
  },
]

// Frame.js
import { CaretDownOutlined, AreaChartOutlined, ShopOutlined, BellOutlined } from '@ant-design/icons'
const iconMap = {
  AreaChartOutlined: <AreaChartOutlined />,
  ShopOutlined: <ShopOutlined />,
  BellOutlined: <BellOutlined />,
}

const Frame = (props) => {
  // ...
  const routes = generatorRoutes(adminRoutes[0].children).map(item => {
    item.icon = iconMap[item.icon]
    return item
  });
  // ...
}
```

其他组件的用法，可以直接查询文档即可。

### Redux

由于需要管理一些公共状态，所以这里需要使用到 `react-redux` 状态管理库。

首先我们要知道 `Redux` 的四个基本原则是：

*   唯一数据源：应用的状态数据应该只存储在唯一的一个 `Store`上；

*   单项数据流

*   保持状态只读

*   数据改变只能通过纯函数完成

和**唯一数据源**相对应的`Store` 状态设计的一个主要原则就是避免冗余的数据，因为如果状态数据分散在多个 Store 中，容易造成数据冗余，这样数据一致性方面就会出问题。

但是根据单一职责原则，我们又希望状态管理可以根据不同的模块进行划分，所以 `redux` 也为我们提供了 `combineReducers`方法，它可以把多个 `reducer` 函数合并为一个 `reducer` 函数。

> 我们可以把不同模块的 store 对象，存放在 reducer 函数中，直接在 reducer 函数的第一个参数上写上默认值

reducer 函数对应「数据改变只能通过纯函数完成」，所以函数中的内容不应该产生副作用，不会给开发者带来心智负担，那么如果在 `redux` 中有异步操作该如何处理呢？这就又引出了 `action`函数以及中间件。这些概念就不再多说，我们直接看都需要使用哪些东西及如何使用。

`action` 函数的作用就是在 `redux` 中调用异步，然后在 `action` 内部触发同步的 `reducer` 方法，最终达到修改 `store` 的功能。

而中间件（我们使用 `redux-thunk`），可以在 `Redux` 的单向数据流中，在action对象被reducer函数处理之前，插入异步功能。这里会使用到 `redux` 里提供的 `compose`和 `applyMiddleware` 两个方法，最终调用 `createStore` 方法来创建出最终我们需要的 `Store` 状态对象。

```js
import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import product from './reducers/product';
import notices from './reducers/notice';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({ product, notices })

const composes = compose(applyMiddleware(...[thunk]))

const store = createStore(rootReducer, composes);

export default store;
```

不过只创建出状态对象还不行，我们还需要进一步使用它，所以在入口文件中，我们还需要 `react-redux` 再搭配 `store` 来完成最终的 `store` 映射：

```js
import { Provider } from 'react-redux'
import store from './store';

// ...
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
);
```

这里的 `Provider` 组件是 `react-redux` 提供的一个数据提供者，它的主要作用就是为内部的子组件提供公共状态，在渲染上，不会做任何附加的事情。

需要使用到 `Store` 的组件还需要借助 `react-redux` 提供的 `connect` 高阶函数来达到组件内部可以直接使用公共状态的效果，示例如下：

```js
import React from 'react';
import { connect } from 'react-redux';
// ...引入其他组件

function List(props) {
  return (
    <Card
      title="商品列表"
      extra={
        <Button type="primary" size="small" onClick={() => navigate('/admin/products/edit/')}>新增</Button>
      }
    >
      <Table
        columns={columns}
        bordered
        dataSource={props.products}
        pagination={{
          total: props.totalCount,
          defaultPageSize: 2,
          onChange: (currentPage) => console.log(currentPage)
        }}
      />
    </Card>
  )
};

export default connect(state => state.product)(List)
```

## 业务功能

### 登录、注册、退出

登录和注册实际上是同用一个组件，最终调用的接口不同而已。两者最终都是将后端的返回值 `token` 存储在浏览器的 `localStorage` 中。而退出功能更简单，即清除 `localStorage` 中的 `token` 值即可。

### 商品管理

#### 商品上下架

上下架功能说白了就是更新商品的某个属性状态而已，这个调用商品的更新接口。

#### 删除

即商品的删除

#### 编辑

即商品信息的更新。

这里需要注意的一个就是有用到编辑器，原视频中作者使用到的编辑器和 React18 版本不兼容，所以替换为了 `draft-js`。

而只有这个编辑器还不行，因为在上传内容和进行展示时，还需要将内容转为HTML或者将HTML转为文本，所以还需要两个辅助插件：

*   `draft-js-export-html`

*   `draft-js-import-html`

它的简易使用如下：

```js
// Edit.jsx
import React, { useState } from 'react';
import { Editor, EditorState } from 'draft-js';
import 'draft-js/dist/Draft.css';

function Edit(props) {
  const [editorState, setEditorState] = useState(
    () => EditorState.createEmpty(),
  );
  const editorChange = value => setEditorState(value)

  // 如果要对编辑器内容进行提交，则需要先对内容进行处理
  const getEditorContent = () => stateToHTML(editorState.getCurrentContent())

  // 如果是需要将接口中的内容回显到编辑器时，也需要先进行处理，再进行状态更新
  // 这里的 content 内容一般是由接口返回的，具体看项目代码，这里只做简单的描述
  const initEditorState = (content) => {
    const contentState = stateFromHTML(content);
    setEditorState(EditorState.createWithContent(contentState));
  }

  return (
    <Editor editorState={editorState} onChange={editorChange} />
  )
}
```

#### 图片上传

上传商品的图片到服务端进行存储

#### 增加商品描述

同样是对商品信息的新增或者修改

#### 分页

有N多商品的时候，需要支持分页的功能，这个放在服务端来做，前端只是发起请求而已。
