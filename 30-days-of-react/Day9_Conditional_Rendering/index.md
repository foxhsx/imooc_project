## 条件渲染

条件渲染是一种在不同条件下渲染不同 JSX 或者组件的方式。我们可以使用常规的 if...else 语句、三元运算符和 && 来实现条件渲染。

*   [使用 if 和 else 实现条件渲染](#使用-if-和-else-实现条件渲染)

*   [使用三元表达式实现条件渲染](#使用三元表达式实现条件渲染)

*   [使用 && 运算符实现条件渲染](#使用--运算符实现条件渲染)

*   [练习](#练习)

    *   [练习1](#练习1)

    *   [练习2](#练习2)

    *   [练习3](#练习3)

### 使用 if 和 else 实现条件渲染

在下面的示例代码中，我们的初始状态 loggedIn 为 false，表示未登录。在此状态下我们会提示请用户先进行登录的内容，而如果为 true，表示用户已经登录，此时展示 Welcome to 30 Days Of React。

```js
// index.js
import React from 'react'
import ReactDOM from 'react-dom'

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
  margin: '3px auto',
  cursor: 'pointer',
  fontSize: 22,
  color: 'white',
}

// class based component
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

class App extends React.Component {
  state = {
    loggedIn: false,
  }
  handleLogin = () => {
    this.setState({
      loggedIn: !this.state.loggedIn,
    })
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

    let status
    let text

    if (this.state.loggedIn) {
      status = <h1>Welcome to 30 Days Of React</h1>
      text = 'Logout'
    } else {
      status = <h3>Please Login</h3>
      text = 'Login'
    }

    return (
      <div className='app'>
        <Header data={data} />
        {status}
        <Button text={text} style={buttonStyles} onClick={this.handleLogin} />
      </div>
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
```

可以看到我们在代码中也提供了一个按钮来处理登录和注销事件，使用这个按钮就可以切换用户的登录状态。

那假如我们的条件超过了两个呢？与 JS 一样，我们也可以使用 if...else...if 语句。

### 使用三元表达式实现条件渲染

三元表达式是 if...else 语句的替代方法。而且，三元表达式的使用场景比 if...else 更多。比如可以使用它来做样式、类名等属性的条件渲染。

```js
// index.js
import React from 'react'
import ReactDOM from 'react-dom'

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
  margin: '3px auto',
  cursor: 'pointer',
  fontSize: 22,
  color: 'white',
}

// class based component
class Header extends React.Component {
  render() {
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

const Login = () => (
  <div>
    <h3>Please Login</h3>
  </div>
)
const Welcome = (props) => (
  <div>
    <h1>Welcome to 30 Days Of React</h1>
  </div>
)

class App extends React.Component {
  state = {
    loggedIn: false,
  }
  handleLogin = () => {
    this.setState({
      loggedIn: !this.state.loggedIn,
    })
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

    const status = this.state.loggedIn ? <Welcome /> : <Login />

    return (
      <div className='app'>
        <Header data={data} />
        {status}
        <Button
          text={this.state.loggedIn ? 'Logout' : 'Login'}
          style={buttonStyles}
          onClick={this.handleLogin}
        />
      </div>
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
```

### 使用 && 运算符实现条件渲染

在使用 && 运算符时，如果 && 左边的条件为 true，那么最终将会呈现 && 右边的结果。

```js
// index.js
import React from 'react'
import ReactDOM from 'react-dom'

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
  margin: '3px auto',
  cursor: 'pointer',
  fontSize: 22,
  color: 'white',
}

// class based component
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
      <header style={this.props.styles}>
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
const Login = () => (
  <div>
    <h3>Please Login</h3>
  </div>
)
const Welcome = (props) => (
  <div>
    <h1>Welcome to 30 Days Of React</h1>
  </div>
)

class App extends React.Component {
  state = {
    loggedIn: false,
    techs: ['HTML', 'CSS', 'JS'],
  }
  handleLogin = () => {
    this.setState({
      loggedIn: !this.state.loggedIn,
    })
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

    // We can destructure state

    const { loggedIn, techs } = this.state

    const status = loggedIn ? <Welcome /> : <Login />

    return (
      <div className='app'>
        <Header data={data} />
        {status}
        <Button
          text={loggedIn ? 'Logout' : 'Login'}
          style={buttonStyles}
          onClick={this.handleLogin}
        />
        {techs.length === 3 && (
          <p>You have all the prerequisite courses to get started React</p>
        )}
        {!loggedIn && (
          <p>
            Please login to access more information about 30 Days Of React
            challenge
          </p>
        )}
      </div>
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
```

### 练习

#### 练习1

*   什么是条件渲染

    *   条件渲染就是根据不同的逻辑判断，渲染出不同的 UI，也就是说通过一些条件来控制是否渲染或者渲染的内容。

*   如何实现条件渲染

    *   实现条件渲染的方法一般来说有三种，分别是：

        *   if/if...else/if...else if...else

        *   && 运算符

        *   三元表达式

*   更喜欢使用哪种条件渲染的方法

    *   这里说喜欢，我觉得不太适合，因为在项目中要使用哪种方法是根据场景去进行选择的，如果是简单的逻辑运算，那使用三元表达式或者 && 操作符即可，而如果国际判断较多，那就使用 if...else 方法。

    *   还有一种场景，那就是有许多条件时，这个时候不太适用以上三种方法，策略模式会更适合，而且可读性和可维护性也更好

#### 练习2

1.  制作一个单页应用，根据一年四季来更改背景图片。

2.  制作一个单页面应用，根据一天中的时间段（早中晚）来更改背景图片

#### 练习3

在实际项目中，我们通过调用 API 接口来获取数据，而这一般是一个异步操作。现在请实现一个正在加载数据的一个 loading 效果，在数据加载后展示数据，可以使用 setTimeout 来模拟异步。
