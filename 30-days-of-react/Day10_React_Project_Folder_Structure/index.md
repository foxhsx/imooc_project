- [React 项目文件夹结构和文件命名](#react-项目文件夹结构和文件命名)
  - [文件命名](#文件命名)
  - [文件夹](#文件夹)
  - [组件文件夹](#组件文件夹)
  - [Fragments](#fragments)
- [练习](#练习)
  - [练习1](#练习1)
  - [练习2](#练习2)


### React 项目文件夹结构和文件命名

在 React 中没有严格的规范来约束文件夹结构以及文件命名。一般情况下，目录结构以及文件命名都是由开发团队来约定的。

也有一些公司内部会使用自己定制的一套代码规范、目录结构以及文件命名方式。

当然，对于 React 项目来说，目录结构以及文件命名是没有对错之分的，只不过易于理解和处理文件的结构会比一般的目录结构具有更好的可维护性和可扩展性。

如果您想进一步了解 React 项目的目录结构知识，可以查看以下文章：

- [React 目录结构 by devaradise](https://www.devaradise.com/react-project-folder-structure)
- [React 目录结构 by robinwieruch](https://www.robinwieruch.de/react-folder-structure)
- [React 目录结构 by Faraz Ahmad](https://dev.to/farazamiruddin/an-opinionated-guide-to-react-folder-structure-file-naming-1l7i)
- [React 目录结构 by maxrozen](https://maxrozen.com/guidelines-improve-react-app-folder-structure/)

一个好的目录结构划分方式，对于整个项目而言的意义是巨大的。

#### 文件命名

在 React 项目中，一般给组件命名都使用大驼峰（CamelCase）的命名方式，且命名能清晰反应该文件的作用或功能。

#### 文件夹

在 React 项目中，我们一般会：
- 将图片、图标和字体文件等静态资源放置在 assets 目录中；
- 而全局的 css 样式文件一般会放置在 styles 目录中
- 全局公用的组件会放置在 src 下的 Components 目录中

到目前为止，我们一直都在 index.js 文件中来开发组件。现在，让我们为里面的组件单独创建一个文件，并将这些组件文件都导入到 App.js 中。

在开发中，所有的源码都在 src 目录中，且所有包含源码的目录也都在此文件夹下。

我们现在要做的，就是将 index.js 中的组件拆出来，然后在 App.js 中引入，最后将 App.js 在 index.js 中引入，最终将其渲染在页面上。也就是说 index.js 是将组件与 index.html 连接起来的途径。

在开始拆分之前，我们先来看一个简单的例子：

```js
// src/index.js
// index.js
import React from 'react'
import ReactDOM from 'react-dom'

const App = () => <h1>Welcome to 30 Days Of React</h1>

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
```

在上面的代码中，App 组件在 index.js 中，让我们将其作为一个文件拆出来：

```js
// src/App.js
import React from 'react'
const App = () => <h1>Welcome to 30 Days Of React</h1>
```

我们必须导出组件才能将其导入到另一个文件中。我们可以将其导出为默认导出或者命名导出。

在一个文件中，我们可以创建一个默认导出和多个命名导出。

先来看看命名导出：

```js
// src/App.js
import React from 'react'

// named export in arrow function
export const App = () => <h1>Welcome to 30 Days Of React</h1>

// or
export function App () {
  return <h1>Welcome to 30 Days Of  React</h1>
}
```

> ⚠️注意，上述代码块中的内容，二选一即可。

现在，让我们将 App 组件导入到 index.js 中。

```js
// index.js
import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
```

那默认导出怎么实现呢？也很简单，使用 `export default` 即可：

```js
// src/App.js
import React from 'react'
// export default in arrow function
export default const App = () => <h1>Welcome to 30 Days Of React</h1>

// or
export default function App () {
  return <h1>Welcome to 30 Days Of React</h1>
}

// or
const App = () => <h1>Welcome to 30 Days Of React</h1>
export default App
```

三选一即可。一般会使用第三种，因为还需要定义组件的 props 类型，这个后面的文章再说。

然后在 index.js 中引入时，就不需要再使用大括号将其包裹起来了。

```js
// index.js
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
```

还记得之前我们创建的组件吗？它们都被揉和到了 index.js 中，现在让我们将它们拆成一个个独立的组件文件，再将其引入到 App.js 中。

```js
// Header.js
import React from 'react'

// Header component
class Header extends React.Component {
  render() {
    console.log(this.props.data)
    const {
      welcome,
      title,
      subtitle,
      author: { firstName, lastName },
      date,
    } = this.props.data

    return (
      <header>
        <div className='header-wrapper'>
          <h1>{welcome}</h1>
          <h2>{title}</h2>
          <h3>{subtitle}</h3>
          <p>
            {firstName} {lastName}
          </p>
          <small>{date}</small>
        </div>
      </header>
    )
  }
}

export default Header

// Country.js
import React from 'react'

const Country = ({
  country: { name, capital, flag, languages, population, currency },
}) => {
  const formatedCapital =
    capital.length > 0 ? (
      <>
        <span>Capital: </span>
        {capital}
      </>
    ) : (
      ''
    )
  const formatLanguage = languages.length > 1 ? `Languages` : `Language`
  return (
    <div className='country'>
      <div className='country_flag'>
        <img src={flag} alt={name} />
      </div>
      <h3 className='country_name'>{name.toUpperCase()}</h3>
      <div class='country_text'>
        <p>{formatedCapital}</p>
        <p>
          <span>{formatLanguage}: </span>
          {languages.join(', ')}
        </p>
        <p>
          <span>Population: </span>
          {population.toLocaleString()}
        </p>
        <p>
          <span>Currency: </span>
          {currency}
        </p>
      </div>
    </div>
  )
}

export default Country

// UserCard.js
import React from 'react'

const UserCard = () => (
  <div className='user-card'>
    <img src={asabenehImage} alt='asabeneh image' />
    <h2>Asabeneh Yetayeh</h2>
  </div>
)

// HexaColor.js
const hexaColor = () => {
  let str = '0123456789abcdef'
  let color = ''
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * str.length)
    color += str[index]
  }
  return '#' + color
}

export default const HexaColor = () => <div>{hexaColor()}</div>

// Message.js
import React from 'react'

export default const Message = ({ message }) => (
  <div>
    <h1>{message}</h1>
  </div>
)

// Login.js
import React from 'react'

export default const Login = () => (
  <div>
    <h3>Please Login</h3>
  </div>
)

// Welcome.js
import React from 'react'

export default const Welcome = (props) => (
  <div>
    <h1>Welcome to 30 Days Of React</h1>
  </div>
)

// Button.js
import React from 'react'

export default const Button = ({ text, onClick, style }) => (
  <button style={style} onClick={onClick}>
    {text}
  </button>
)

// TechList.js
import React from 'react'

class TechList extends React.Component {
  render() {
    const { techs } = this.props
    const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>)
    return techsFormatted
  }
}

export default TechList

// Main.js
import React from 'react'
import Button from './Button.js'
import Message from './Message.js'
import TechList from './TechList.js'

// CSS styles in JavaScript Object
const buttonStyles = {
  backgroundColor: '#61dbfb',
  padding: 10,
  border: 'none',
  borderRadius: 5,
  margin: 3,
  cursor: 'pointer',
  fontSize: 22,
  color: 'white',
  margin: '0 auto',
}

class Main extends React.Component {
  render() {
    const {
      techs,
      greetPeople,
      handleTime,
      loggedIn,
      handleLogin,
      message,
    } = this.props
    console.log(message)

    const status = loggedIn ? <Welcome /> : <Login />
    return (
      <main>
        <div className='main-wrapper'>
          <p>Prerequisite to get started react.js:</p>
          <ul>
            <TechList techs={this.props.techs} />
          </ul>
          {techs.length === 3 && (
            <p>You have all the prerequisite courses to get started React</p>
          )}
          <div>
            <Button
              text='Show Time'
              onClick={handleTime}
              style={buttonStyles}
            />{' '}
            <Button
              text='Greet People'
              onClick={greetPeople}
              style={buttonStyles}
            />
            {!loggedIn && <p>Please login to access more information about 30 Days Of React challenge</p>}
          </div>
          <div style={{ margin: 30 }}>
            <Button
              text={loggedIn ? 'Logout' : 'Login'}
              style={buttonStyles}
              onClick={handleLogin}
            />
            <br />
            {status}
          </div>
          <Message message={message} />
        </div>
      </main>
    )
  }
}

// Footer.js
import React from 'react'

class Footer extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <footer>
        <div className='footer-wrapper'>
          <p>Copyright {this.props.date.getFullYear()}</p>
        </div>
      </footer>
    )
  }
}

export default Footer
```

在上述代码块中，一共有 11 个组件，每个组件都在对应的 js 文件中被定义并导出，现在让我们再定义一个 App.js 文件，并在其中引入这些组件：

```js
// App.js
import React from 'react'
import Header from './Header.js'
import Main from './Main.js'
import Footer from './Footer.js'

class App extends React.Component {
  state = {
    loggedIn: false,
    techs: ['HTML', 'CSS', 'JS'],
    message: 'Click show time or Greet people to change me',
  }
  handleLogin = () => {
    this.setState({
      loggedIn: !this.state.loggedIn,
    })
  }
  showDate = (time) => {
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
    return `${month} ${date}, ${year}`
  }
  handleTime = () => {
    let message = this.showDate(new Date())
    this.setState({ message })
  }
  greetPeople = () => {
    let message = 'Welcome to 30 Days Of React Challenge, 2020'
    this.setState({ message })
  }

  render() {
    const data = {
      welcome: '30 Days Of React',
      title: 'Getting Started React',
      subtitle: 'JavaScript Library',
      author: {
        firstName: 'Asabeneh',
        lastName: 'Yetayeh',
      },
      date: 'Oct 9, 2020',
    }
    const techs = ['HTML', 'CSS', 'JavaScript']

    return (
      <div className='app'>
        {this.state.backgroundColor}
        <Header data={data} />

        <Main
          techs={techs}
          handleTime={this.handleTime}
          greetPeople={this.greetPeople}
          loggedIn={this.state.loggedIn}
          handleLogin={this.handleLogin}
          message={this.state.message}
        />

        <Footer date={new Date()} />
      </div>
    )
  }
}

export default App
```

最后将 App.js 组件引入到 index.js 中进行渲染：

```js
// index.js
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
```

#### 组件文件夹

通常，我们会将项目中的公用组件放置在 src/components 目录中。

#### Fragments

Fragments 是避免在 JSX 中使用不必要的父元素的一种方法。要知道一个 React 组件，必须要有一个根元素来进行包裹，如果没有则会报错。

而假如我们确实不想在组件渲染出来以后还有一个额外的父元素，那就可以使用 React 内置的组件 Fragments。

```js
import React, { Fragment } from 'react'

const Skills = () => {
  return (
    <Fragment>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
    </Fragment>
  )
}
const RequiredSkills = () => {
  return (
    <ul>
      <Skills />
    </ul>
  )
}
```

在新版的 React 中，它也有一种简写方式 `<></>`：

```js
import React from 'react'

// Recommended
const Skills = () => {
  return (
    <>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
    </>
  )
}

const RequiredSkills = () => {
  return (
    <ul>
      <Skills />
    </ul>
  )
}
```

接下来，让我们做一些练习，来巩固一下今天学到的知识。

### 练习

#### 练习1

1. React 目录结构和文件命名的重要性是什么？
2. 如何导入和导出文件
3. 创建一个组件并将其导出（使用命名或者默认导出）
4. 将上一个创建的组件导入到 App.js 中

#### 练习2

1. 将第8天挑战中实现的黑暗模式拆分成组件再组合