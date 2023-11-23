## 开始 React 之旅

- [1.什么是 React？](#1.什么是-react？)

- [2.为什么要学习 React？](#2.为什么要学习-react？)
  
  - [React 与其他框架的受欢迎程序](#react-与其他框架的受欢迎程序)

- [JSX](#jsx)
  
  - [JSX Element](#jsx-element)
  
  - [注释](#注释)
  
  - [渲染](#渲染)
  
  - [在 JSX 中设置样式和类名](#在-jsx-中设置样式和类名)
  
  - [在 JSX 中使用数据](#在-jsx-中使用数据)
    
    - [使用字符串](#使用字符串)
    
    - [使用 number](#使用-number)
    
    - [使用数组](#使用数组)
    
    - [使用对象](#使用对象)

- [练习](#练习)
  
  - [练习1:什么是 React？](#练习1什么是-react？)
  
  - [练习2:为什么选择 React？](#练习2为什么选择-react？)
  
  - [练习3:JSX](#练习3jsx)
  
  - [练习4:JSX元素](#练习4jsx元素)
  
  - [练习5:内联样式](#练习5内联样式)
  
  - [练习6:内部样式](#练习6内部样式)
  
  - [练习7:在 JSX 中使用数据](#练习7在-jsx-中使用数据)

### 1.什么是 React？

React 是一个用于构建 Web 和原生交互界面的库。它最初是由 Facebook 在 2013 年 5 月 29 日发布的。现在已经迭代到了 18.2.0 的版本。最新的官网地址在这里👉[React](https://react.dev)。

在 React 中我们不直接与 DOM 进行交互，而是通过虚拟 DOM 来进行更改。

### 2.为什么要学习 React？

我们一直在说前端界流行三大框架：React、Vue 和 Angular。它们三者在国内外都非常受开发者们的欢迎，以下是 2023 年最受环境的 web 框架和技术排名：

![](/Users/heshengxin/Desktop/CodeResoure/imooc_project/30-days-of-react/imgs/day2_web_frameworks.png)

可以看到 React 是排在 Vue 和 Angular 之前的。而 React 如此受欢迎，是因为它：

- 灵活可扩展

- 社区活跃

- 开源

- 模块化

- 搭配脚手架可快速构建开发项目

### 3.JSX

JSX 的全称是 JavaScript XML，它是对 JS 的语法扩展。JSX 允许我们使用 JS 来编写 HTML 元素，这样可以更直观地描述 UI 层的结构，使得在 React 组件中编写 UI 更加简洁和易读。

在 JSX 中，我们可以像在 HTML 中一样使用标签、属性和表达式，然后通过 Babel 等工具将其转译成纯 JS 代码，以便浏览器可以理解和执行。

```jsx
// we don't need to use quotes with JSX

const jsxElement = <h1>I am a JSX element</h1>
const welcome = <h1>Welcome to 30 Days of React Challenge</h1>
const data = <small>Oct 2, 2020</small>
```

上面这段代码混合了 JS 和 HTML，而这就是 JSX。

#### JSX Element

如上所示，JSX 可以是单个 HTML 元素，也可以是多个元素组合。

> 需要注意的是，多个元素组合时，必须要有一个唯一的父元素

```jsx
const header = (
  <header>
    <h1>Welcome to 30 Days Of React</h1>
    <h2>Getting Started React</h2>
    <h3>JavaScript Library</h3>
    <p>Asabeneh Yetayeh</p>
    <small>Oct 2, 2020</small>
  </header>
)
```

#### 注释

我们在开发过程中会出于不同原因对代码进行注释，那在 JSX 中我们如何编写注释呢？

```jsx
{
  /*
 <header>
    <h1>Welcome to 30 Days Of React</h1>
    <h2>Getting Started React</h2>
    <h3>JavaScript Library</h3>
    <p>Asabeneh Yetayeh</p>
    <small>Oct 2, 2020</small>
  </header>

*/
}
```

#### 渲染

对于 React 和 Vue 来说他们都是单页应用，一般只有一个 HTML 文件。而要将 JSX 元素渲染为 HTML，需要有一个挂载的根元素：

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>30 Days Of React Challenge</title>
  </head>

  <body>
    <div class="root"></div>

    <script></script>
  </body>
</html>
```

如上所示，在 HTML 中有一个 class 为 root 的根元素，所有的 React 组件最终都将会在这个元素中进行渲染，它就是将所有 React 组件连接到 index.html 上的“网关”。

在script 标签中，我们将编写 JS，但脚本的类型是 babel。Babel 将在浏览器上将 JSX 转译为纯 JS，这样我们就可以编写任何纯 JS、JSX 和 React 代码了。

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>30 Days Of React Challenge</title>
  </head>

  <body>
    <div class="root"></div>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <script type="text/babel">
      // our code goes here
    </script>
  </body>
</html>
```

我们使用 CDN 的方式已经将 babel 引入到了 HTML 当中，下一步就是使用 CDN 将 React 和 ReactDOM 也引进来。要测试 React 是否被我们引入到 HTML 文档当中，可以使用 `console.log(React)` 来检查它。如果在浏览器控制台可以看到一个包含 React 方法的对象，那说明我们已经成功引入了 React。

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>30 Days Of React Challenge</title>
  </head>

  <body>
    <div class="root"></div>

    <script
      crossorigin
      src="https://unpkg.com/react@16/umd/react.development.js"
    ></script>
    <script
      crossorigin
      src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"
    ></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <script type="text/babel">
      console.log(React)
    </script>
  </body>
</html>
```

接下来我们要将 root 类名的 div 和 React 关联起来：

1. 先使用 `document.querySelect('.root')` 获取根元素 DOM

2. 使用 ReactDOM 中的 render 方法将 React 组件挂载到根元素上

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>30 Days Of React Challenge</title>
  </head>

  <body>
    <div class="root"></div>

    <script
      crossorigin
      src="https://unpkg.com/react@16/umd/react.development.js"
    ></script>
    <script
      crossorigin
      src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"
    ></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <script type="text/babel">
      // To get the root element from the HTML document
      const rootElement = document.querySelector('.root')

      // JSX element
      const jsxElement = <h1>I am a JSX element</h1>

      // we render the JSX element using the ReactDOM package
      // ReactDOM has the render method and the render method takes two arguments
      ReactDOM.render(jsxElement, rootElement)
    </script>
  </body>
</html>
```

![](/Users/heshengxin/Desktop/CodeResoure/imooc_project/30-days-of-react/imgs/day2_render.png)

让我们来渲染更多的元素。（注意，一次只能渲染一个 JSX 元素)

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>30 Days Of React Challenge</title>
  </head>

  <body>
    <div class="root"></div>

    <script
      crossorigin
      src="https://unpkg.com/react@16/umd/react.development.js"
    ></script>
    <script
      crossorigin
      src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"
    ></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <script type="text/babel">
      // To get the root element from the HTML document
      const rootElement = document.querySelector('.root')

      // JSX element
      const header = (
        <header>
          <h1>Welcome to 30 Days Of React</h1>
          <h2>Getting Started React</h2>
          <h3>JavaScript Library</h3>
          <p>Asabeneh Yetayeh</p>
          <small>Oct 2, 2020</small>
        </header>
      )

      // we render the JSX element using the ReactDOM package
      // ReactDOM has the render method and the render method takes two arguments
      ReactDOM.render(header, rootElement)
    </script>
  </body>
</html>
```

![](/Users/heshengxin/Desktop/CodeResoure/imooc_project/30-days-of-react/imgs/day2_render_more.png)

我们刚刚创建了网站的标题，同样的手法，我们再来创建网站的主要内容和页脚。

```jsx
// JSX element for the header part of the website
const header = (
  <header>
    <h1>Welcome to 30 Days Of React</h1>
    <h2>Getting Started React</h2>
    <h3>JavaScript Library</h3>
    <p>Asabeneh Yetayeh</p>
    <small>Oct 2, 2020</small>
  </header>
)

// JSX element for the main part of the website
const main = (
  <main>
    <p>Prerequisite to get started react.js:</p>
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
    </ul>
  </main>
)

// JSX element for the footer part of the website
const footer = (
  <footer>
    <p>Copyright 2020</p>
  </footer>
)

// JSX element which contain all, it is a container or parent
const app = (
  <div>
    {header}
    {main}
    {footer}
  </div>
)
```

我们要将这三部分最终包裹在一个父元素中，否则无法进行渲染（还记得上面说过的只能渲染一个 JSX 元素吗？）

为了将 JSX 元素包含在另一个 JSX 元素中，我们使用大括号 {} 并在大括号内调用 JSX 的名称。

接下来，我们就可以将所有内容都放在一起并渲染出来。

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>30 Days Of React Challenge</title>
  </head>

  <body>
    <div class="root"></div>

    <script
      crossorigin
      src="https://unpkg.com/react@16/umd/react.development.js"
    ></script>
    <script
      crossorigin
      src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"
    ></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <script type="text/babel">
      // To get the root element from the HTML document
      const rootElement = document.querySelector('.root')

      // JSX element, header
      const header = (
        <header>
          <h1>Welcome to 30 Days Of React</h1>
          <h2>Getting Started React</h2>
          <h3>JavaScript Library</h3>
          <p>Asabeneh Yetayeh</p>
          <small>Oct 2, 2020</small>
        </header>
      )

      // JSX element, main
      const main = (
        <main>
          <p>Prerequisite to get started react.js:</p>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
          </ul>
        </main>
      )

      // JSX element, footer
      const footer = (
        <footer>
          <p>Copyright 2020</p>
        </footer>
      )

      // JSX element, app, a container or a parent
      const app = (
        <div>
          {header}
          {main}
          {footer}
        </div>
      )

      // we render the JSX element using the ReactDOM package
      // ReactDOM has the render method and the render method takes two argument
      ReactDOM.render(app, rootElement)
      // or
      //  ReactDOM.render([header, main, footer], rootElement)
    </script>
  </body>
</html>
```

![](/Users/heshengxin/Desktop/CodeResoure/imooc_project/30-days-of-react/imgs/day2_rendering_multiple_jsx_elements.png)
