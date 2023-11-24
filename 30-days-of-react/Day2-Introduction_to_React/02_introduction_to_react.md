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

#### 在 JSX 中设置样式和类名

现在，让我们在 JSX 中添加一些样式进去。给 JSX 添加样式的方式有两种：

- 内联样式：以样式对象的形式来设置。每个 CSS 属性都成为一个 key（使用驼峰命名），每个属性值都成为该对象的一个值（是一个字符串）。

```jsx
const header = (
  <header
    style={{ border: '2px solid orange', color: 'black', fontSize: '18px' }}
  >
    <h1>Welcome to 30 Days Of React</h1>
    <h2>Getting Started React</h2>
    <h3>JavaScript Library</h3>
    <p>Asabeneh Yetayeh</p>
    <small>Oct 2, 2020</small>
  </header>
)

// or we can write it this way

const style = { border: '2px solid orange', color: 'black', fontSize: '18px' }

const header = (
  <header style={style}>
    <h1>Welcome to 30 Days Of React</h1>
    <h2>Getting Started React</h2>
    <h3>JavaScript Library</h3>
    <p>Asabeneh Yetayeh</p>
    <small>Oct 2, 2020</small>
  </header>
)
```

- 使用 className：在 JSX 中我们使用 className 而非 class，这是因为 class 是 JS 中的保留字。

```jsx
const title = <h1 className='title'>Getting Started React</h1>
const inputField = (
  <div>
    <label htmlFor='firstname'>First Name</label>
    <input type='text' id='firstname' placeholder='First Name' />
  </div>
)
```

> 与 className 类似，`htmlFor` 用来替代 `label` 标签中的 `for` 属性。

我们来看一段完整的、使用内部样式的方式来设置 JSX 的 CSS：

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500|Roboto:300,400,500&display=swap"
      rel="stylesheet"
    />

    <title>30 Days Of React Challenge</title>
    <style>
      /* == General style === */
      * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
      }

      html,
      body {
        height: 100%;
        line-height: 1.5;
        font-family: 'Montserrat';
        font-weight: 300;
        color: black;
      }

      .root {
        min-height: 100%;
        position: relative;
      }

      .header-wrapper,
      .main-wrapper,
      .footer-wrapper {
        width: 85%;
        margin: auto;
      }

      .header-wrapper,
      .main-wrapper {
        padding: 10px;
        margin: 2px auto;
      }

      h1 {
        font-size: 70px;
        font-weight: 300;
      }

      h2,
      h3 {
        font-weight: 300;
      }

      header {
        background-color: #61dbfb;
        padding: 10px;
      }

      main {
        padding: 10px;
        padding-bottom: 60px;
        /* Height of the footer */
      }

      ul {
        margin-left: 15px;
      }

      ul li {
        list-style: none;
      }

      footer {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 60px;
        /* Height of the footer */
        background: #6cf;
      }

      .footer-wrapper {
        font-weight: 400;
        text-align: center;
        line-height: 60px;
      }
    </style>
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
          <div className='header-wrapper'>
            <h1>Welcome to 30 Days Of React</h1>
            <h2>Getting Started React</h2>
            <h3>JavaScript Library</h3>
            <p>Instructor: Asabeneh Yetayeh</p>
            <small>Date: Oct 1, 2020</small>
          </div>
        </header>
      )

      // JSX element, main
      const main = (
        <main>
          <div className='main-wrapper'>
            <p>
              Prerequisite to get started{' '}
              <strong>
                <em>react.js</em>
              </strong>
              :
            </p>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li> JavaScript</li>
            </ul>
          </div>
        </main>
      )

      // JSX element, footer
      const footer = (
        <footer>
          <div className='footer-wrapper'>
            <p>Copyright 2020</p>
          </div>
        </footer>
      )

      // JSX element, app
      const app = (
        <div className='app'>
          {header}
          {main}
          {footer}
        </div>
      )

      // we render the JSX element using the ReactDOM package
      ReactDOM.render(app, rootElement)
    </script>
  </body>
</html>
```

![](/Users/heshengxin/Desktop/CodeResoure/imooc_project/30-days-of-react/imgs/day2_internal_style.png)

#### 在 JSX 中使用数据

以上示例使用的都是静态数据，接下来我们将展示如何在 JSX 中使用动态数据。

上面例子中我们在使用 JSX 元素时，是通过 {} 大括号来将变量注入到 JSX 中，这里也是一样：

```jsx
const welcome = 'Welcome to 30 Days Of React'
const title = 'Getting Started React'
const subtitle = 'JavaScript Library'
const authorFirstName = 'Asabeneh'
const authorLastName = 'Yetayeh'
const date = 'Oct 1, 2020'

// JSX element, header
const header = (
  <header>
    <div className='header-wrapper'>
      <h1>{welcome}</h1>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      <p>
        Instructor: {authorFirstName} {authorLastName}
      </p>
      <small>Date: {date}</small>
    </div>
  </header>
)
```

##### 使用字符串

```jsx
const welcome = 'Welcome to 30 Days Of React'
const title = 'Getting Started React'
const subtitle = 'JavaScript Library'
const firstName = 'Asabeneh'
const lastName = 'Yetayeh'
const date = 'Oct 2, 2020'

// JSX element, header

// JSX element, header
const header = (
  <header>
    <div className='header-wrapper'>
      <h1>{welcome}</h1>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      <p>
        Instructor: {firstName} {lastName}
      </p>
      <small>Date: {date}</small>
    </div>
  </header>
)
```

##### 使用 number

```jsx
const numOne = 3
const numTwo = 2

const result = (
  <p>
    {numOne} + {numTwo} = {numOne + numTwo}
  </p>
)

const yearBorn = 1820
const currentYear = new Date().getFullYear()
const age = currentYear - yearBorn
const personAge = <p> {age}</p>
```

##### 使用数组

在 JSX 中可以直接使用数组，但是这样会将数组中的值都合并成一个字符串展示出来，如下代码块所示，最终渲染到页面上的结果会是一行 `HTMLCSSJavaScript` ，而这并不是我们想要的结果。

```jsx
const techs = ['HTML', 'CSS', 'JavaScript']

// JSX element, main
const main = (
  <main>
    <div className='main-wrapper'>
      <p>
        Prerequisite to get started{' '}
        <strong>
          <em>react.js</em>
        </strong>
        :
      </p>
      <ul>{techs}</ul>
    </div>
  </main>
)
```

这里我们可以使用 `map` 方法来修改数组并将其格式化，这样就能渲染出三个 li 标签出来：

```jsx
const techs = ['HTML', 'CSS', 'JavaScript']
const techsFormatted = techs.map((tech) => <li>{tech}</li>)
```

不过需要注意的是，在 React 中使用数组时，***需要每个子项都具备唯一的 key***，否则浏览器控制台会抛出告警：

![](/Users/heshengxin/Desktop/CodeResoure/imooc_project/30-days-of-react/imgs/day2_map_list_id.png)

让我们在 map 时添加一个 Key 上去：

```jsx
// JSX element, main
const techs = ['HTML', 'CSS', 'JavaScript']
const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>)
```

##### 使用对象

在 JSX 中我们能直接使用 string、number、boolean 和数组，但是我们不能直接使用对象，而是将对象进行解构或者使用对象值，来看个例子：

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500|Roboto:300,400,500&display=swap"
      rel="stylesheet"
    />

    <title>30 Days Of React Challenge</title>
    <style>
      /* == General style === */
      * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
      }

      html,
      body {
        height: 100%;
        line-height: 1.5;
        font-family: 'Montserrat';
        font-weight: 300;
        color: black;
      }

      .root {
        min-height: 100%;
        position: relative;
      }

      .header-wrapper,
      .main-wrapper,
      .footer-wrapper {
        width: 85%;
        margin: auto;
      }

      .header-wrapper,
      .main-wrapper {
        padding: 10px;
        margin: 2px auto;
      }

      h1 {
        font-size: 70px;
        font-weight: 300;
      }

      h2,
      h3 {
        font-weight: 300;
      }

      header {
        background-color: #61dbfb;
        padding: 10px;
      }

      main {
        padding: 10px 10px 60px;
        /* Height of the footer */
      }

      ul {
        margin-left: 15px;
      }

      ul li {
        list-style: none;
      }

      footer {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 60px;
        /* Height of the footer */
        background: #6cf;
      }

      .footer-wrapper {
        font-weight: 400;
        text-align: center;
        line-height: 60px;
      }
    </style>
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
      const welcome = 'Welcome to 30 Days Of React'
      const title = 'Getting Started React'
      const subtitle = 'JavaScript Library'
      const author = {
        firstName: 'Asabeneh',
        lastName: 'Yetayeh',
      }
      const date = 'Oct 2, 2020'

      // JSX element, header
      const header = (
        <header>
          <div className='header-wrapper'>
            <h1>{welcome}</h1>
            <h2>{title}</h2>
            <h3>{subtitle}</h3>
            <p>
              Instructor: {author.firstName} {author.lastName}
            </p>
            <small>Date: {date}</small>
          </div>
        </header>
      )

      const numOne = 3
      const numTwo = 2

      const result = (
        <p>
          {numOne} + {numTwo} = {numOne + numTwo}
        </p>
      )

      const yearBorn = 1820
      const currentYear = new Date().getFullYear()
      const age = currentYear - yearBorn
      const personAge = (
        <p>
          {' '}
          {author.firstName} {author.lastName} is {age} years old
        </p>
      )

      // JSX element, main
      const techs = ['HTML', 'CSS', 'JavaScript']

      // JSX element, main
      const main = (
        <main>
          <div className='main-wrapper'>
            <p>
              Prerequisite to get started{' '}
              <strong>
                <em>react.js</em>
              </strong>
              :
            </p>
            <ul>{techs}</ul>
            {result}
            {personAge}
          </div>
        </main>
      )

      const copyRight = 'Copyright 2020'

      // JSX element, footer
      const footer = (
        <footer>
          <div className='footer-wrapper'>
            <p>{copyRight}</p>
          </div>
        </footer>
      )

      // JSX element, app
      const app = (
        <div className='app'>
          {header}
          {main}
          {footer}
        </div>
      )

      // we render the JSX element using the ReactDOM package
      ReactDOM.render(app, rootElement)
    </script>
  </body>
</html>
```

上述代码中，在 header 标签里有介绍 author 的部分，这一部分就是通过对象属性的方式直接访问对象里的值。

🌕你太棒了。您刚刚完成了第 2 天的挑战，在通往卓越的道路上您领先了两步。现在为您的大脑和肌肉做一些练习。

#### 练习

##### 练习1:什么是 React？

1. 什么是 React？
2. 什么是库？
3. 什么是单页面应用？
4. 什么是组件？
5. React 的最新版本是什么？
6. 什么是 DOM？
7. 什么是虚拟 DOM？
8. 网站都有哪些部分组成？

##### 练习2:为什么选择 React？

1. 为什么选择 React？
2. React 和 Vue 哪个更流行？

##### 练习3:JSX

1. 什么是 HTML 元素?
2. 如何编写一个自闭合的 HTML 元素?
3. 写出一些 HTML 的属性
4. 什么是 JSX?
5. 什么是 babel?
6. 什么是转译器?

##### 练习4:JSX元素

1. 什么是 JSX 元素？
2. 定义一个 name 的变量用来存储你的名字，并将其写入 JSX 元素
3. 编写一个 JSX 元素，显示您的全名、国家/地区、职务、性别、电子邮件、电话号码。使用 h1 显示名称，使用 p 显示其余信息，将这些信息存储在 user 变量中
4. 写一个 footer 元素

##### 练习5:内联样式

1. 给 main 元素设置样式
2. 给根组件 app.jsx 和 footer 组件设置样式
3. 给这个 JSX 添加更多的样式进去

##### 练习6:内部样式

1. 对不同的元素使用不同的样式

##### 练习7:在 JSX 中使用数据

1. 练习如何在 JSX 元素中使用动态数据（字符串、数字、布尔值、数组、对象）
