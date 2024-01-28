- [组件的生命周期](#组件的生命周期)
  - [什么是组件的生命周期](#什么是组件的生命周期)
  - [挂载](#挂载)
  - [Constructor](#constructor)
    - [getDerivedStateFromProps](#getderivedstatefromprops)
    - [Render](#render)
    - [ComponentDidMount](#componentdidmount)
  - [更新](#更新)
    - [getDerivedStateFromProps](#getderivedstatefromprops-1)
    - [shouldComponentUpdate](#shouldcomponentupdate)
    - [Render](#render-1)
    - [componentDidUpdate](#componentdidupdate)
  - [卸载](#卸载)
- [练习](#练习)
  - [练习1](#练习1)

## 组件的生命周期

### 什么是组件的生命周期

组件生命周期是React应用程序中挂载、更新和销毁组件的过程。我们可以将组件生命周期与人类成长的过程联系起来：出生、成年、年老和死亡。在 React 组件中，组件先进行安装或渲染，然后通过更改数据进行更新，最后在不需要时销毁。在 React 中，每个组件都有三个主要阶段：

- 挂载
- 更新
- 卸载

### 挂载

渲染或将 React 组件放入 DOM 中称为挂载。在挂载 React 组件期间，React 内部会按照以下内置方法的顺序依次执行。

1. constructor()
2. static getDerivedStateFromProps()
3. render()
4. componentDidMount()

当我们开发类组件时，我们需要使用内置的渲染 `render` 方法，这个方法是必需的，而其他方法是可选的。

```js
import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class App extends Component {
  constructor(props) {
    super(props)
    console.log('I am  the constructor and  I will be the first to run.')
    this.state = {
      firstName: '',
    }
  }

  static getDerivedStateFromProps(props, state) {
    console.log(
      'I am getDerivedStateFromProps and I will be the second to run.'
    )
    return null
  }
  componentDidMount() {
    console.log('I am componentDidMount and I will be last to run.')
  }

  render() {
    console.log('I am render and I will be the third to run.')
    return (
      <div className='App'>
        <h1>React Component Life Cycle</h1>
      </div>
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
```

### Constructor

当组件启动时，constructor() 方法在任何其他方法之前执行，它是设置初始状态和其他值的地方。在类中，我们使用构造函数参数从父级继承，而在 React 中，构造函数采用 props 参数，并且还必须调用 super 方法。

```js
import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class App extends Component {
  constructor(props) {
    super(props)
    console.log('I am  the constructor and  I will be the first to run.')
    this.state = {
      firstName: '',
    }
  }
  render() {
    return (
      <div className='App'>
        <h1>React Component Life Cycle</h1>
        <h2>The constructor is the first to Run</h2>
        <p>Author:{this.state.firstName}</p>
      </div>
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
```

#### getDerivedStateFromProps

从名字上我们就可以理解，这个方法从 props 中派生出一个状态。 getDerivedStateFromProps() 方法在渲染 DOM 中的组件之前调用。这是根据初始 props 设置状态对象的正确位置。

```js
import React, { Component } from 'react'
import ReactDOM from 'react-dom'

const User = ({ firstName }) => (
  <div>
    <h1>{firstName}</h1>
  </div>
)

class App extends Component {
  constructor(props) {
    super(props)
    console.log('I am  the constructor and  I will be the first to run.')
    // we can write state inside or outside the constructor
    // if is written outside the constructor it does not need the keyword this
    this.state = {
      firstName: 'John',
    }
  }
  static getDerivedStateFromProps(props, state) {
    console.log(
      'I am getDerivedStateFromProps and I will be the second to run.'
    )
    return { firstName: props.firstName }
  }

  render() {
    return (
      <div className='App'>
        <h1>React Component Life Cycle</h1>
        <h3>getDerivedStateFromProps</h3>
        <User firstName={this.state.firstName} />
      </div>
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App firstName='Asabeneh' />, rootElement)
```

#### Render

当我们创建基于类的组件时，render 方法是必需的方法。 render 方法是我们返回 JSX 的地方。只要状态发生变化，渲染方法就会进行渲染。不要在渲染方法中设置状态。

```js
import React, { Component } from 'react'
import ReactDOM from 'react-dom'

const User = ({ firstName }) => (
  <div>
    <h1>{firstName}</h1>
  </div>
)

class App extends Component {
  constructor(props) {
    super(props)
    console.log('I am  the constructor and  I will be the first to run.')
    // we can write state inside or outside the constructor
    // if is written outside the constructor it does not need the keyword this
    this.state = {
      firstName: 'John',
    }
  }
  render() {
    // Never do this
    // Do not reset inside the render method, create a method to reset the state

    return (
      <div className='App'>
        <h1>React Component Life Cycle</h1>
        <h3>Render method</h3>
        <User firstName={this.firstName} />
      </div>
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App firstName='Asabeneh' />, rootElement)
```

#### ComponentDidMount

正如我们可以理解的，这个方法在组件渲染后调用的方法名称。这是设置时间间隔和调用API的地方。看看下面的 componentDidMount 方法中的 setTimeout 实现。

```js
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
class App extends Component {
  constructor(props) {
    super(props)
    console.log('I am  the constructor and  I will be the first to run.')
    this.state = {
      firstName: 'John',
    }
  }
  componentDidMount() {
    console.log('I am componentDidMount and I will be last to run.')
    // after 3 seconds it resets the state
    setTimeout(() => {
      this.setState({
        firstName: 'Asabeneh',
      })
    }, 3000)
  }

  render() {
    return (
      <div className='App'>
        <h1>React Component Life Cycle</h1>
        <h2>componentDidMount Method</h2>
        {this.state.firstName}
      </div>
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
```

在上面的代码片段中，我们看到了如何在 componentDidMount 方法中实现 setTimeout。在下一个示例中，我们将使用 fetch 实现 API 调用。

```js
import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class App extends Component {
  constructor(props) {
    super(props)
    console.log('I am  the constructor and  I will be the first to run.')
    this.state = {
      firstName: 'John',
      data: [],
    }
  }

  componentDidMount() {
    console.log('I am componentDidMount and I will be last to run.')
    const API_URL = 'https://restcountries.eu/rest/v2/all'
    fetch(API_URL)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        console.log(data)
        this.setState({
          data,
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  render() {
    return (
      <div className='App'>
        <h1>React Component Life Cycle</h1>
        <h1>Calling API</h1>
        <div>
          <p>There are {this.state.data.length} countries in the api</p>
          <div className='countries-wrapper'>
            {this.state.data.map((country) => (
              <div>
                <div>
                  {' '}
                  <img src={country.flag} alt={country.name} />{' '}
                </div>
                <div>
                  <h1>{country.name}</h1>
                  <p>Capital: {country.capital}</p>
                  <p>Population: {country.population}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
```

### 更新

#### getDerivedStateFromProps

#### shouldComponentUpdate

#### Render

#### componentDidUpdate

### 卸载

## 练习

### 练习1