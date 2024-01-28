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

将组件安装到 DOM 上后，可以在状态或 props 更改时更新它。 React 组件的更新可能是由 props 或 state 的更改引起的。当组件被重新渲染时，这些方法将按以下顺序调用：

1. static getDerivedStateFromProps()
2. shouldComponentUpdate()
3. render()
4. getSnapshotBeforeUpdate()
5. componentDidUpdate()

#### getDerivedStateFromProps

与挂载阶段类似，更新阶段也可以调用getDerivedStateFromProps。 getDerivedStateFromProps 是组件更新时调用的第一个方法。

#### shouldComponentUpdate

shouldComponentUpdate() 内置生命周期方法会返回一个布尔值。如果此方法不返回 true，则应用程序将不会更新。

如果该方法不返回 true，则应用程序将永远不会更新。例如，这可以用于在达到某个点（游戏、订阅）时阻止使用，或者可以阻止某个用户。

例如，如果我们想在 30 天后停止进行挑战，我们可以将天数从 1 增加到 30，并且我们可以在第 30 天阻止应用程序。看这个例子。

```js
import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class App extends Component {
  constructor(props) {
    super(props)
    console.log('I am  the constructor and  I will be the first to run.')
    this.state = {
      firstName: 'John',
      day: 1,
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextProps, nextState)
    console.log(nextState.day)
    if (nextState.day > 31) {
      return false
    } else {
      return true
    }
  }
  // the doChallenge increment the day by one
  doChallenge = () => {
    this.setState({
      day: this.state.day + 1,
    })
  }
  render() {
    return (
      <div className='App'>
        <h1>React Component Life Cycle</h1>
        <button onClick={this.doChallenge}>Do Challenge</button>
        <p>Challenge: Day {this.state.day}</p>
        {this.state.congratulate && <h2>{this.state.congratulate}</h2>}
      </div>
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
```

#### Render

正如我们在组件的安装阶段提到的，当组件更新时会调用 render() 方法。它必须使用新的更改将 HTML 重新渲染到 DOM。

#### componentDidUpdate

componentDidUpdate 方法采用两个参数：prevProps 和 prevState。在 DOM 中更新组件后调用它。

我们把上面的两种生命周期方法结合起来使用。

```js
import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class App extends Component {
  constructor(props) {
    super(props)
    console.log('I am  the constructor and  I will be the first to run.')
    this.state = {
      day: 1,
      congratulate: '',
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextProps, nextState)
    console.log(nextState.day)
    if (nextState.day > 31) {
      return false
    } else {
      return true
    }
  }

  doChallenge = () => {
    this.setState({
      day: this.state.day + 1,
    })
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.day == 30) {
      this.setState({
        congratulate: 'Congratulations,Challenge has been completed',
      })
    }
    console.log(prevState, prevProps)
  }

  render() {
    return (
      <div className='App'>
        <h1>React Component Life Cycle</h1>
        <h1>Calling API</h1>
        <button onClick={this.doChallenge}>Do Challenge</button>
        <p>Challenge: Day {this.state.day}</p>
        {this.state.congratulate && <h2>{this.state.congratulate}</h2>}
      </div>
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
```

### 卸载

组件生命周期的最后阶段是卸载。卸载阶段从 DOM 中删除组件。 componentWillUnmount 方法是卸载组件时调用的唯一内置方法。

## 练习

### 练习1

- 什么是组件生命周期

> React 组件生命周期是指组件在被创建、更新和销毁等阶段所经历的一系列过程。每个阶段都有特定的方法被调用，这些方法被称为生命周期方法。

- 生命周期的目的是什么

> 生命周期的主要目的是帮助开发人员在不同阶段控制组件的行为。通过生命周期方法，开发人员可以在组件各个阶段中执行特定的操作（如初始化状态、更新 DOM、清理资源等），从而使组件的行为符合预期并具有更好的性能。

- 组件生命周期的三个阶段是什么

> 组件生命周期可以分为三个阶段：安装（mounting）、更新（updating）和卸载（unmounting）。

- 安装是什么意思？

> 安装是指当组件第一次被创建并插入到 DOM 中时发生的过程。在这个阶段中，组件将进行初始化，包括设置初始状态、绑定事件处理程序和订阅数据源等。

- 更新是什么意思

> 更新是指当组件的属性或状态发生变化时，组件需要重新渲染并更新到 DOM 中的过程。在这个阶段中，组件将根据新的属性或状态进行更新，包括更新 DOM、重新计算状态等。

- 卸载是什么意思？

> 卸载是指当组件从 DOM 中移除时发生的过程。在这个阶段中，组件将清理和释放与其相关的资源，包括取消事件处理程序、取消订阅数据源等。

- 最常见的内置安装生命周期方法是什么？

> 最常见的内置安装生命周期方法是 componentDidMount。这个方法会在组件第一次插入到 DOM 中后被调用。在这个方法中，开发人员可以执行一些初始化操作，如启动定时器、发送网络请求等。

- 安装生命周期方法有哪些？

> 安装生命周期方法包括：
> * `constructor()`
> * `static getDerivedStateFromProps(props, state)`
> * `render()`
> * `componentDidMount()`
> 
> 其中，`constructor()` 方法在组件被创建时被调用，用于初始化组件的状态；`static getDerivedStateFromProps()` 方法在组件接收新的属性时被调用，用于更新组件的状态；`render()` 方法用于渲染组件的 UI；`componentDidMount()` 方法在组件第一次插入到 DOM 中后被调用，用于执行一些初始化操作。

- 更新生命周期方法有哪些？

> 更新生命周期方法包括：
> * `static getDerivedStateFromProps(props, state)`
> * `shouldComponentUpdate(nextProps, nextState)`
> * `render()`
> * `getSnapshotBeforeUpdate(prevProps, prevState)`
> * `componentDidUpdate(prevProps, prevState, snapshot)`
>
> 其中，`static getDerivedStateFromProps()` 方法在组件接收新的属性时被调用，用于更新组件的状态；`shouldComponentUpdate()` 方法用于判断组件是否需要重新渲染；`render()` 方法用于渲染组件的 UI；`getSnapshotBeforeUpdate()` 方法在组件更新前被调用，可以用于获取更新前的 DOM 状态或滚动位置等信息；`componentDidUpdate()` 方法在组件更新后被调用，用于执行一些更新后的操作。

- 卸载生命周期方法是什么？

> 卸载生命周期方法只有一个，即 `componentWillUnmount()`。这个方法在组件从 DOM 中移除前被调用，用于清理和释放与其相关的资源，如取消事件处理程序、取消订阅数据源等。
