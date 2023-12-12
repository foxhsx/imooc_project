- 函数组件中的 props

- 什么是 props

- props 对象

- 解构 props

- 定义 prop 类型

- 设置默认的 props

- 练习：组件与属性
  
  - 练习1
  
  - 练习2
  
  - 练习3

### 函数组件中的 props

在上一节，我们了解了如何向 React 组件中注入不同的数据类型。现在，让我们看看如何在组件中使用它以及如何将不同的数据作为 props 传递。

### 什么是 props

props 是 React 中的一个特殊的关键字，代表属性，用于将数据从一个组件传递到另一个组件（基本是从父组件传递到子组件）。

我们可以说 props 是一个数据载体或者传输数据的手段。让我们来看看给普通函数传入参数和给组件传入 props 有什么不同：

```js
// function syntax

const getUserInfo = (firstName, lastName, country) => {
  return `${firstName} ${lastName}. Lives in ${country}.`
}

// calling a functons

getUserInfo('Asabeneh', 'Yeteyeh', 'Finland')

//component syntax

// User component, component should start with an uppercase
const User = (props) => {
  return (
    <div>
      <h1>
        {props.firstName}
        {props.lastName}
      </h1>
      <small>{props.country}</small>
    </div>
  )
}
// calling or instantiating a component, this component has three properties and we call them props:firstName, lastName, country
<User firstName = 'Asabeneh', lastName='Yetayeh' country = 'Finland' />
```

可以看到给普通函数传入参数，返回值是一个拼接的字符串，当然它也可以是其他类型的数据。但是对于组件来说，它只能返回一个 JSX 元素。

### props 对象

React props 是一个在创建 React 组件时立即获得的对象。在将属性传递给组件之前，让我们来检查一下 props 对象中都有什么。

```js
import React from 'react'
import ReactDOM from 'react-dom'

// Header Component
const Header = (props) => {
  console.log(props) // empty object, {}
  return (
    <header>
      <div className='header-wrapper'>
        <h1>{welcome}</h1>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <p>
          {author.firstName} {author.lastName}
        </p>
        <small>{date}</small>
      </div>
    </header>
  )
}

// The App, or the parent or the container component
// Functional Component
const App = () => {
  return (
    <div className='app'>
      <Header />
    </div>
  )
}

const rootElement = document.getElementById('root')

ReactDOM.render(<App />, rootElement)
```

在上面的日志打印中，我们将会得到一个空对象。这意味着我们如果在使用组件时不传递任何属性到组件中，那 props 将会为空对象。

让我们从一个简单的例子开始。

在下面示例中，welcome 字段将作为 Header 组件的一个 prop，然后在父组件中使用 Header 组件时，可以给这个组件传递一个对应的值进去。

```js
import React from 'react'
import ReactDOM from 'react-dom'

// Header Component
const Header = (props) => {
  console.log(props) // {welcome:'Welcome to 30 Days Of React'}
  return (
    <header>
      <div className='header-wrapper'>
        <h1>{props.welcome}</h1>
      </div>
    </header>
  )
}

// The App, or the parent or the container component
// Functional Component
const App = () => {
  return (
    <div className='app'>
      <Header welcome='Welcome to 30 Days Of React' />
    </div>
  )
}

const rootElement = document.getElementById('root')

ReactDOM.render(<App />, rootElement)
```

当我们将这个组件渲染到浏览器时，可以在浏览器控制台看到对应的日志输出（即下面的对象），这意味着我们传递给 Header 组件的 welcome 属性是OK的。

```json
{
  "welcome": "Welcome to 30 Days Of React"
}
```

### 解构 props

### 定义 prop 类型

### 设置默认的 props

### 练习：组件与属性

#### 练习1

#### 练习2

#### 练习3


