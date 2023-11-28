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

- [练习](#练习)

### 前期准备

在上一节中，我们了解了 JSX，并使用 CDN 的方式访问了 React 和 ReactDOM 包。但是，在实际项目中，我们需要使用 `create-react-app` 包来创建项目而不是使用 CDN 来进行开发。

最初的 create-react-app 是在 2016 年 7 月 22 日发布。在此之前，开发人员通常要手动配置 Webpack，这里面会包含 babel 和所有必要的一些插件，比如 loader 和压缩插件等等，而配置这些通常都是比较耗费时间的。

但自从 CRA（以下都会使用 CRA 来代替 create-react-app）出现之后，我们可以使用它提供的命令快速创建项目，生成的项目中已经内置了开发和生产的 Webpack 配置，这样我们就可以不再关心这些东西而直接上手进行业务开发了。

那在开始之前我们还需要学习一下在使用 React 时都需要的一些工具及环境。
