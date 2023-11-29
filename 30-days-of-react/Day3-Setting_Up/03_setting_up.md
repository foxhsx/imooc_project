# 配置 React 的运行环境

- [前期准备](#前期准备)
  
  - [Node](#node)
  
  - [Module](#module)
  
  - [Package](#package)
  
  - [Node Package Manager(NPM)](#node-package-managernpm)
  
  - [Visual Studio Code](#visual-studio-code)
  
  - [Browser](#browser)
  
  - [Visual Studio Extensions](#visual-studio-extensions)
  
  - [Create React App](#create-react-app)

- [创建你的第一个 React App](#创建你的第一个-react-app)
  
  - [React 项目模板](#react-项目模板)
  
  - [JSX 中的样式](#jsx-中的样式)
  
  - [在 JSX 元素中加入数据](#在-jsx-元素中加入数据)
  
  - [在 React 中导入一个媒体对象](#在-react-中导入一个媒体对象)

- [练习](#练习)

### 前期准备

在上一节中，我们了解了 JSX，并使用 CDN 的方式访问了 React 和 ReactDOM 包。但是，在实际项目中，我们需要使用 `create-react-app` 包来创建项目而不是使用 CDN 来进行开发。

最初的 create-react-app 是在 2016 年 7 月 22 日发布。在此之前，开发人员通常要手动配置 Webpack，这里面会包含 babel 和所有必要的一些插件，比如 loader 和压缩插件等等，而配置这些通常都是比较耗费时间的。

但自从 CRA（以下都会使用 CRA 来代替 create-react-app）出现之后，我们可以使用它提供的命令快速创建项目，生成的项目中已经内置了开发和生产的 Webpack 配置，这样我们就可以不再关心这些东西而直接上手进行业务开发了。

那在开始之前我们还需要学习一下在使用 React 时都需要的一些工具及环境。

#### Node

Node 是一个 JS 的运行环境，允许 JS 在服务器上运行。Node 创建于 2009 年。

CRA 创建的项目在启动时，会在本地启动一个 Node 服务器，端口号为 3000，在浏览器输入 `localhost:3000` 进行访问。

如果你还未拥有 Node，可以到 [Node 的官网](https://nodejs.org/en/)进行安装。

![](/Users/heshengxin/Desktop/CodeResoure/imooc_project/30-days-of-react/imgs/day3_node.png)

一般选择安装 LTS 版本也就是稳定版本的。

安装好 Node 之后，我们可以打开终端来检查一下是否安装成功：

![](/Users/heshengxin/Desktop/CodeResoure/imooc_project/30-days-of-react/imgs/day3_node_version.png)

#### Module

一个项目中可以包含一个或者多个函数，这些函数可以在需要时导出和导入。比如现在有一个 `math.js` 文件：

```js
// math.js
export const addTwo = (a, b) => a + b
export const multiply = (a, b) => a * b
export const subtract = (a, b) => a - b

export default (function doSomeMath() {
  return {
    addTwo,
    multiply,
    subtract,
  }
})()
```

然后我们可以将 `math.js` 文件导入到另一个文件中：

```js
// index.js
// to import the doSomeMath from the math.js with or without extension
import doSomeMath from './math.js'

// to import the other modules
// since these modules were not exported as default we have to desctructure
import { addTwo, multiply, subtract } from './math.js'

import * as everything from './math.js' // to import everything remaining
console.log(addTwo(5, 5))
console.log(doSomeMath.addTwo(5, 5))
console.log(everything)
```

在后面，我们可以看到 `import React from 'react'` 等导入 React 库的代码。

#### Package

包是一个模块或模块的集合。比如，React、ReactDOM 都是包。

#### Node Package Manager(NPM)

npm 是 Node 中内置的模块，它是 Node.js 里的默认包管理器。用于在 Node.js 应用程序中安装、更新和卸载依赖包。通过 npm，可以很方便地查找和安装来自 npm 仓库中的各个模块，也可以将自己开发的模块发布到 npm 仓库供他人使用。

![](/Users/heshengxin/Desktop/CodeResoure/imooc_project/30-days-of-react/imgs/day3_npm_registry.png)

#### Visual Studio Code

我们一般使用 VSCode 作为代码编辑器，安装地址在这里👉[Download](https://code.visualstudio.com/)

#### Browser

一般使用 Google 的 Chrome 浏览器。

#### Visual Studio Extensions

在 VSCode 上安装一些有助于提高开发效率的插件：

- Prettier

- ESLint

- Bracket Pair Colorizer

- ES7 React/Redux/GraphQL/React-Native snippets

#### Create React App

我们可以使用 CRA 在电脑终端上输入以下命令来快速创建 React 项目：

```bash
npx create-react-app <name-of-your-project>
```

然后 CRA 就开始为我们创建 React 项目，它会安装项目必须的依赖，并生成对应的项目目录。

### 创建你的第一个 React App

```bash
$ cd Desktop
$ npx create-react-app 30-days-of-react
$ cd 30-days-of-react/
$ npm start
```

现在你的第一个 React 程序已经在 `localhost:3000` 上开始运行了。

在生成的项目中，我们可以看到根组件 `App.jsx` ，在这个文件上面可以修改或者增加一些内容，然后浏览器端可以看到最新的更改。

如果想要停止服务器，可以在终端按下 `Ctrl + C`。

![](/Users/heshengxin/Desktop/CodeResoure/imooc_project/30-days-of-react/imgs/day3_react_app_starting.png)

#### React 项目模板

让我们来看看由 CRA 创建的 React 模板。当我们每次创建新项目时，都需要运行 `npx create-react-app` 和项目名称。

> ⚠️注意：在 CRA 的[官网](https://create-react-app.xiniushu.com/getting-started)中建议将全局的 CRA 卸载掉，这样可以确保 `npx` 总是会使用最新版本的 CRA。
> 
> 所以如果还是在使用全局的 `create-react-app <your_app_name>` 会报错，提示信息中指出不再支持 Create React App 的全局安装

在生成的项目模板中，有三个目录：

- src

- public：这是存放项目静态资源的目录，它里面有：
  
  - index.html - 项目中的 HTML 模板，不管是开发还是打包，HTML 都是以它为准的；
  
  - favicon.ico：自带的图标文件，也就是 react 的图标
  
  - manifest.json：用于描述 PWA 的清单文件。PWA（Progressive Web App）是一种使用现代 Web 技术构建的应用程序，可以像原生应用一样运行在用户的设备上，具有离线访问和推送通知等功能。
  
  - 一些静态图片
  
  - robots.txt：用于指示网络爬虫在抓取网站内容时应该遵守的规则。也就是说，通过该文件，网站管理员可以告诉搜索引擎爬虫哪些页面可以被抓取，哪些页面不可以被抓取，以及其他抓取行为的限制和指导。这对于网站的 SEO 至关重要。

- node_modules：项目中安装的依赖包都会在这个目录中

此外还有一些其他文件：

- .gitignore

- README.md

- package.json

- yarn.lock（或者 package-lock.json）

#### JSX 中的样式

#### 在 JSX 元素中加入数据

#### 在 React 中导入一个媒体对象
