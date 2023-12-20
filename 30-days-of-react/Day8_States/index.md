- [状态](#状态)
  
  - [什么是状态？](#什么是状态)
  
  - [如何设置状态](#如何设置状态)
  
  - [使用 JS 方法重置状态](#使用-js-方法重置状态)

- [练习](#练习)
  
  - [练习1](#练习1)
  
  - [练习2](#练习2)
  
  - [练习3](#练习3)

### 状态

#### 什么是状态？

什么是状态？state 的英文含义是某人或者某物在特定时间所处的特定状况。

比如：

- 你是快乐还是悲伤？

- 灯是亮着的还是关着的

- 存在还是不存在？

- 杯子是满的还是空的

再比如，我很高兴，因为我喜欢创建 30 天的 React 挑战。我相信你也很幸福。

在 React 中，State 是一个对象，当状态数据发生变化时，会触发组件的重新渲染。

#### 如何设置状态

在类组件中，我们在构造函数内部或者外部都可以设置状态。但是如果要修改状态，则必须使用 setState 来进行，否则无法触发组件的重新渲染。

```js
import React, { Component } from 'react';

class MyComponent extends Component {
  state = {
    count: 0
  };

  handleClick = () => {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.handleClick}>Increment</button>
      </div>
    );
  }
}

export default MyComponent;
```

在这个例子中，我们初始化了一个 count 的状态，然后在 handleClick 方法中使用 this.setState 来更新 count 状态。

#### 使用 JS 方法重置状态

就像上面说的，我们必须使用 setState 来更新组件中的状态，所以在组件中调用 this.setState 来实现状态的更新并触发组件的重新渲染。

我们可以拓展一下上面的例子，增加一个减法的按钮：

```js
// index.js
import React from 'react'
import ReactDOM from 'react-dom'
class App extends React.Component {
  // declaring state
  state = {
    count: 0,
  }
  // method which add one to the state

  addOne = () => {
    this.setState({ count: this.state.count + 1 })
  }

  // method which subtract one to the state
  minusOne = () => {
    this.setState({ count: this.state.count - 1 })
  }
  render() {
    // accessing the state value
    const count = this.state.count
    return (
      <div className='App'>
        <h1>{count} </h1>

        <div>
          <button className='btn btn-add' onClick={this.addOne}>
            +1
          </button>{' '}
          <button className='btn btn-minus' onClick={this.minusOne}>
            -1
          </button>
        </div>
      </div>
    )
  }
}
const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
```

我们也可以将目前为止所有的代码进行改造，在里面添加对应的状态。

```js
// index.js
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

// class based component
class Header extends React.Component {
  constructor(props) {
    super(props)
  }
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

const Count = ({ count, addOne, minusOne }) => (
  <div>
    <h1>{count} </h1>
    <div>
      <Button text='+1' onClick={addOne} style={buttonStyles} />
      <Button text='-1' onClick={minusOne} style={buttonStyles} />
    </div>
  </div>
)

// TechList Component
// class base component
class TechList extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { techs } = this.props
    const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>)
    return techsFormatted
  }
}

// Main Component
// Class Component
class Main extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const {
      techs,
      user,
      greetPeople,
      handleTime,
      changeBackground,
      count,
      addOne,
      minusOne,
    } = this.props
    return (
      <main>
        <div className='main-wrapper'>
          <p>Prerequisite to get started react.js:</p>
          <ul>
            <TechList techs={techs} />
          </ul>
          <UserCard user={user} />
          <Button
            text='Greet People'
            onClick={greetPeople}
            style={buttonStyles}
          />
          <Button text='Show Time' onClick={handleTime} style={buttonStyles} />
          <Button
            text='Change Background'
            onClick={changeBackground}
            style={buttonStyles}
          />
          <Count count={count} addOne={addOne} minusOne={minusOne} />
        </div>
      </main>
    )
  }
}

// Footer Component
// Class component
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

class App extends React.Component {
  state = {
    count: 0,
    styles: {
      backgroundColor: '',
      color: '',
    },
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
    return ` ${month} ${date}, ${year}`
  }
  addOne = () => {
    this.setState({ count: this.state.count + 1 })
  }

  // method which subtract one to the state
  minusOne = () => {
    this.setState({ count: this.state.count - 1 })
  }
  handleTime = () => {
    alert(this.showDate(new Date()))
  }
  greetPeople = () => {
    alert('Welcome to 30 Days Of React Challenge, 2020')
  }
  changeBackground = () => {}
  render() {
    const data = {
      welcome: 'Welcome to 30 Days Of React',
      title: 'Getting Started React',
      subtitle: 'JavaScript Library',
      author: {
        firstName: 'Asabeneh',
        lastName: 'Yetayeh',
      },
      date: 'Oct 7, 2020',
    }
    const techs = ['HTML', 'CSS', 'JavaScript']
    const date = new Date()
    // copying the author from data object to user variable using spread operator
    const user = { ...data.author, image: asabenehImage }

    return (
      <div className='app'>
        {this.state.backgroundColor}
        <Header data={data} />
        <Main
          user={user}
          techs={techs}
          handleTime={this.handleTime}
          greetPeople={this.greetPeople}
          changeBackground={this.changeBackground}
          addOne={this.addOne}
          minusOne={this.minusOne}
          count={this.state.count}
        />
        <Footer date={new Date()} />
      </div>
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
```

上述部分都是在类组件中改变状态，而在 React Hooks 中，我们会使用 useState Hook 来设置组件的状态：

```js
import React, { useState } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  }

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}

export default MyComponent;
```

在 Hooks 中，使用 React 提供的 useState Hook 来给组件添加状态。它的基本用法就是调用 useState 并传入初始状态的值，它会返回一个包含当前状态的值和更新状态的函数的数组。在使用这个 Hook 时可以：

1. 基本用法：调用 useState 并传入初始状态的值，它会返回一个数组，第一个元素是当前状态的值，第二个元素是更新状态的函数。

2. 多个状态：可以多次调用 useState 来添加多个状态

3. 更新状态：调用返回的更新状态的函数来更新状态。这个函数可以接受一个新的状态值，也可以接受一个函数，该函数接受当前状态值作为参数，返回新的状态值

4. ⚠️注意，不能在 if 或者循环中使用 Hook

现在相信你对状态 state 已经有了一定的了解。在之后的章节中，我们也会继续使用状态，因为在 React 中，state 状态和 props 是比较核心的部分。

### 练习

#### 练习1

1. React 中的状态是什么？  

2. React 中的 props 和 state 有什么区别？  

3. 如何访问 React 组件中的状态？  

4. 如何在 React 组件中设置集合？

#### 练习2

- 使用 React state 来更改页面的背景。您可以使用此技术为您的作品集应用深色模式。

![](../imgs/08_day_changing_background_exercise.gif)

- 长时间的封锁后，你可能会想到旅行，但不知道去哪里。您可能有兴趣开发一个随机国家/地区选择器来选择您的度假目的地。

![](../imgs/08_day_select_country_exercise.gif)

#### 练习3
