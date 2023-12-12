- [函数组件中的 props](#函数组件中的-props)

- [什么是 props](#什么是-props)

- [props 对象](#props-对象)

- [解构 props](#解构-props)

- [定义 prop 类型](#定义-prop-类型)

- [设置默认的 props](#设置默认的-props)

- [练习：组件与属性](#练习组件与属性)
  
  - [练习1](#练习1)
  
  - [练习2](#练习2)
  
  - [练习3](#练习3)

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

props 对象中的类型支持：

- String

- Number

- Boolean

- Array

- Object

- Function

也就是说我们可以给组件中传递的属性，可以是以上数据类型的。

### 解构 props

什么意思呢？即我们在开发组件时，因为 props 是一个对象的原因，可以对组件参数中的 props 进行解构处理。

- 一步步解构（针对多级嵌套的对象）

```js
import React from 'react'
import ReactDOM from 'react-dom'

const showDate = (time) => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  const month = months[time.getMonth()].slice(0, 3)
  const year = time.getFullYear()
  const date = time.getDate()
  return ` ${month} ${date}, ${year}`
}
// Header Component
const Header = (props) => {
  const data = props.data
  const { welcome, title, subtitle, author, date } = data
  const { firstName, lastName } = author
  return (
    <header>
      <div className='header-wrapper'>
        <h1>{welcome}</h1>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <p>
          {firstName} {lastName}
        </p>
        <small>{showDate(date)}</small>
      </div>
    </header>
  )
}

// The App, or the parent or the container component
// Functional Component
const App = () => {
  const data = {
    welcome: 'Welcome to 30 Days Of React',
    title: 'Getting Started React',
    subtitle: 'JavaScript Library',
    author: {
      firstName: 'Asabeneh',
      lastName: 'Yetayeh',
    },
    date: new Date(),
  }

  return (
    <div className='app'>
      <Header data={data} />
    </div>
  )
}
const rootElement = document.getElementById('root')
// we render the JSX element using the ReactDOM package
ReactDOM.render(<App />, rootElement)
```

- 在一行进行解构（如果书写不当，没有兜底，可能报错）

```js
import React from 'react'
import ReactDOM from 'react-dom'

const showDate = (time) => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  const month = months[time.getMonth()].slice(0, 3)
  const year = time.getFullYear()
  const date = time.getDate()
  return ` ${month} ${date}, ${year}`
}
// Header Component
const Header = (props) => {
  const data = props.data
  const {
    welcome,
    title,
    subtitle,
    author: { firstName, lastName },
    date,
  } = data

  return (
    <header>
      <div className='header-wrapper'>
        <h1>{welcome}</h1>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <p>
          {firstName} {lastName}
        </p>
        <small>{showDate(date)}</small>
      </div>
    </header>
  )
}

// The App, or the parent or the container component
// Functional Component
const App = () => {
  const data = {
    welcome: 'Welcome to 30 Days Of React',
    title: 'Getting Started React',
    subtitle: 'JavaScript Library',
    author: {
      firstName: 'Asabeneh',
      lastName: 'Yetayeh',
    },
    date: new Date(),
  }

  return (
    <div className='app'>
      <Header data={data} />
    </div>
  )
}
const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
```

- 直接在函数组件参数中解构

```js
import React from 'react'
import ReactDOM from 'react-dom'

const showDate = (time) => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  const month = months[time.getMonth()].slice(0, 3)
  const year = time.getFullYear()
  const date = time.getDate()
  return ` ${month} ${date}, ${year}`
}
// Header Component
const Header = ({
  data: {
    welcome,
    title,
    subtitle,
    author: { firstName, lastName },
    date,
  },
}) => {
  return (
    <header>
      <div className='header-wrapper'>
        <h1>{welcome}</h1>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <p>
          {firstName} {lastName}
        </p>
        <small>{showDate(date)}</small>
      </div>
    </header>
  )
}

// The App, or the parent or the container component
// Functional Component
const App = () => {
  const data = {
    welcome: 'Welcome to 30 Days Of React',
    title: 'Getting Started React',
    subtitle: 'JavaScript Library',
    author: {
      firstName: 'Asabeneh',
      lastName: 'Yetayeh',
    },
    date: new Date(),
  }

  return (
    <div className='app'>
      <Header data={data} />
    </div>
  )
}
const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
```

现在，让我们将下面所有组件中的 props 都进行解构，然后将它们组合成一个页面。通常情况下我们会将 props 从父组件传递到子组件当中。例如，在 Main 组件中已经将 techs 和 user 分别传递给了 TechList 和 UserCard。

```js
import React from 'react'
import ReactDOM from 'react-dom'
import asabenehImage from './images/asabeneh.jpg'

// Fuction to show month date year

const showDate = (time) => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  const month = months[time.getMonth()].slice(0, 3)
  const year = time.getFullYear()
  const date = time.getDate()
  return ` ${month} ${date}, ${year}`
}

// Header Component
const Header = ({
  data: {
    welcome,
    title,
    subtitle,
    author: { firstName, lastName },
    date,
  },
}) => {
  return (
    <header>
      <div className='header-wrapper'>
        <h1>{welcome}</h1>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <p>
          {firstName} {lastName}
        </p>
        <small>{showDate(date)}</small>
      </div>
    </header>
  )
}

// TechList Component
const TechList = ({ techs }) => {
  const techList = techs.map((tech) => <li key={tech}>{tech}</li>)
  return techList
}

// User Card Component
const UserCard = ({ user: { firstName, lastName, image } }) => (
  <div className='user-card'>
    <img src={image} alt={firstName} />
    <h2>
      {firstName}
      {lastName}
    </h2>
  </div>
)

// A button component

const Button = ({ text, onClick, style }) => (
  <button style={style} onClick={onClick}>
    {text}
  </button>
)

// CSS styles in JavaScript Object
const buttonStyles = {
  backgroundColor: '#61dbfb',
  padding: 10,
  border: 'none',
  borderRadius: 5,
  margin: 3,
  cursor: 'pointer',
  fontSize: 18,
  color: 'white',
}

// Main Component
const Main = ({ user, techs, greetPeople, handleTime }) => (
  <main>
    <div className='main-wrapper'>
      <p>Prerequisite to get started react.js:</p>
      <ul>
        <TechList techs={techs} />
      </ul>
      <UserCard user={user} />
      <Button text='Greet People' onClick={greetPeople} style={buttonStyles} />
      <Button text='Show Time' onClick={handleTime} style={buttonStyles} />
    </div>
  </main>
)

// Footer Component
const Footer = ({ copyRight }) => (
  <footer>
    <div className='footer-wrapper'>
      <p>Copyright {copyRight.getFullYear()}</p>
    </div>
  </footer>
)

// The App, or the parent or the container component
// Functional Component
const App = () => {
  const data = {
    welcome: 'Welcome to 30 Days Of React',
    title: 'Getting Started React',
    subtitle: 'JavaScript Library',
    author: {
      firstName: 'Asabeneh',
      lastName: 'Yetayeh',
    },
    date: new Date(), // date needs to be formatted to a human readable format
  }
  const date = new Date()
  const techs = ['HTML', 'CSS', 'JavaScript']
  // copying the author from data object to user variable using spread operator
  const user = { ...data.author, image: asabenehImage }

  const handleTime = () => {
    alert(showDate(new Date()))
  }
  const greetPeople = () => {
    alert('Welcome to 30 Days Of React Challenge, 2020')
  }

  return (
    <div className='app'>
      <Header data={data} />
      <Main
        user={user}
        techs={techs}
        handleTime={handleTime}
        greetPeople={greetPeople}
      />
      <Footer copyRight={date} />
    </div>
  )
}
const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
```

### 定义 prop 类型

如果我们使用 TypeScript 来开发项目，可以很轻松的定义 props 的类型。但是如果是使用 JavaScript，由于它是弱语言类型，我们就需要依靠一些其他手段来定义 props 的数据类型，比如 propTypes 包。

```js
import React from 'react';
import ReactDOM from 'react-dom/client';
import PropTypes from 'prop-types'


const Header = (props) => {
  console.log(props) // {welcome:'Welcome to 30 Days Of React'}
  return (
    <header>
      <div className='header-wrapper'>
        <h1>{props?.welcome}</h1>
      </div>
    </header>
  )
}

Header.propTypes = {
  welcome: PropTypes.string,
}


export default Header
```

### 设置默认的 props

我们也可以为组件设置一些默认的 props 类型，这个时候可以使用 defaultProps。这个知识点我们将在其他章节详细介绍。

### 练习：组件与属性

#### 练习1

1. 组件中的 props 是什么？

2. 如何访问 React 组件中的 props？

3. 我们可以将哪些数据类型作为 props 传递给组件？

4. 什么是 propTypes？

5. 什么是 defaultProps？

#### 练习2

练习2和练习3都是前两节做过的内容，这里可以自行决定练习与否

#### 练习3
