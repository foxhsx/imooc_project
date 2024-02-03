- [高阶组件](#高阶组件)
- [练习](#练习)
- [练习1](#练习1)
- [练习2](#练习2)

## 高阶组件

高阶组件类似于 JavaScript 中的高阶函数。在 JavaScript 中，高阶函数是接受另一个函数作为参数或返回另一个函数的函数。

与高阶函数类似，高阶组件接受一个组件并返回另一个组件。来看个例子：

```js
// One way of writing a Higher Order Component(HOC)
import React from 'react'
const higherOrderComponent = (Component) => {
  return (props) => {
    return <Component {...props} />
  }
}
```

大多数时候第三方库使用高阶组件。

```js
import React from 'react'
import ReactDOM from 'react-dom'

const Button = ({ onClick, text, style }) => {
  return (
    <button onClick={onClick} style={style}>
      {text}
    </button>
  )
}

const buttonWithStyle = (CompParam) => {
  const buttonStyles = {
    backgroundColor: '#61dbfb',
    padding: '10px 25px',
    border: 'none',
    borderRadius: 5,
    margin: 3,
    cursor: 'pointer',
    fontSize: 18,
    color: 'white',
  }
  return (props) => {
    return <CompParam {...props} style={buttonStyles} />
  }
}
const NewButton = buttonWithSuperPower(Button)

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Button text='No Style' />
        <NewButton text='Styled Button' />
      </div>
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
```

在上述案例的基础上，我们还可以拓展出更好玩儿的一些属性出来：

```js
import React from 'react'
import ReactDOM from 'react-dom'

const Button = ({ onClick, text, style }) => {
  return (
    <button onClick={onClick} style={style}>
      {text}
    </button>
  )
}

const buttonWithStyles = (CompParam, name = 'default') => {
  const colors = [
    {
      name: 'default',
      backgroundColor: '#e7e7e7',
      color: '#000000',
    },
    {
      name: 'react',
      backgroundColor: '#61dbfb',
      color: '#ffffff',
    },
    {
      name: 'success',
      backgroundColor: '#4CAF50',
      color: '#ffffff',
    },
    {
      name: 'info',
      backgroundColor: '#2196F3',
      color: '#ffffff',
    },
    {
      name: 'warning',
      backgroundColor: '#ff9800',
      color: '#ffffff',
    },
    {
      name: 'danger',
      backgroundColor: '#f44336',
      color: '#ffffff',
    },
  ]
  const { backgroundColor, color } = colors.find((c) => c.name === name)

  const buttonStyles = {
    backgroundColor,
    padding: '10px 45px',
    border: 'none',
    borderRadius: 3,
    margin: 3,
    cursor: 'pointer',
    fontSize: '1.25rem',
    color,
  }
  return (props) => {
    return <CompParam {...props} style={buttonStyles} />
  }
}

const NewButton = buttonWithSuperPower(Button)
const ReactButton = buttonWithSuperPower(Button, 'react')
const InfoButton = buttonWithSuperPower(Button, 'info')
const SuccessButton = buttonWithSuperPower(Button, 'success')
const WarningButton = buttonWithSuperPower(Button, 'warning')
const DangerButton = buttonWithSuperPower(Button, 'danger')

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Button text='No Style' onClick={() => alert('I am not styled yet')} />
        <NewButton
          text='Styled Button'
          onClick={() => alert('I am the default style')}
        />
        <ReactButton text='React' onClick={() => alert('I have react color')} />
        <InfoButton
          text='Info'
          onClick={() => alert('I am styled with info color')}
        />
        <SuccessButton text='Success' onClick={() => alert('I am successful')} />
        <WarningButton
          text='Warning'
          onClick={() => alert('I warn you many times')}
        />
        <DangerButton
          text='Danger'
          onClick={() => alert('Oh no, you can not restore it')}
        />
      </div>
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
```

对于高阶组件来说，我们举的例子只是它能提供给我们便利性的一小部分。高阶组件适用于以下情况：
1. 代码复用：如果多个组件需要相同的功能或代码逻辑，可以将这些共同的代码抽象成一个高阶组件，在各个组件中引用即可，实现了代码的复用。
2. 渲染劫持：高阶组件可以通过对原组件进行包装，从而对原组件的渲染过程进行干预、控制，达到特定的效果。例如，withRouter 高阶组件，通过将 react-router-dom 的 history 对象注入到被包装的组件中，使其具备路由功能。
3. 条件渲染：高阶组件可以根据条件渲染不同的组件。例如，withAuth 高阶组件可以基于用户权限来渲染不同的组件。

## 练习

## 练习1

1. 什么是高阶函数

> 高阶函数是指接受一个或者多个函数作为参数，并且/或者返回一个新函数的函数。简而言之，它是操作函数的函数。
>
> 高阶函数可以具有以下几种常见的用途：
> 1. 函数柯里化（Currying）：将一个接受多个参数的函数转化为一系列只接受一个参数的函数。这样做的好处是可以部分应用函数，延迟执行，或者创建更专注的函数。
> 2. 函数组合（Function Composition）: 将多个函数组合在一起，形成一个新的函数。这样可以将多个小的、可复用的函数组合成更复杂的函数。
> 3. 函数装饰器（Function Decorators）: 接受一个函数并返回一个新的函数，可以在不修改原函数的情况下添加额外的行为或者功能。
> 4. 回调函数（Callback Functions）: 将一个函数作为参数传递给另一个函数，并在适当的时候调用
>
> 高阶函数的应用可以提高代码的可读性、可维护性和可复用性，使代码更加模块化和灵活。常见的高阶函数有 `map`、`filter`、`reduce` 等数组方法，以及许多流行的函数式编程库中提供的函数。

2. 什么是高阶组件

> 高阶组件（Higher-Order Component, HOC）是一种在 React 中用于复用组件逻辑的技术。它本质上是一个函数，接受一个组件作为参数，并返回一个新的增强过的组件。
>
> 通过使用高阶组件，我们可以将一些通用的功能逻辑抽象出来，并将其应用到多个组件中，从而实现代码的复用和逻辑的解耦。
>
> 高阶组件可以用于以下几个常见的场景：
> 1. 属性代理（Prop Proxy）：高阶组件可以通过添加、修改或者删除组件的 props 来改变组件的行为。
> 2. 反向继承（Inheritance Inversion）：高阶组件可以通过继承被包装组件，并覆盖或者添加方法来改变组件的行为。
> 3. 渲染劫持（Render Hijacking）：高阶组件可以控制组件的渲染过程，包括条件渲染、渲染前后的操作等。
> 4. 状态抽象（State Abstraction）：高阶组件可以封装一些通用的状态管理逻辑，并通过 props 将其传递给被包装的组件。
>
> 使用高阶组件可以有效地提高代码的可复用性和可维护性，使得组件的逻辑更加清晰和模块化。在 React 生态中，很多第三方库和工具（如 Redux、React Router等）都使用了高阶组件来提供额外的功能和特性。

3. 高阶函数和高阶组件有什么区别？

> 高阶函数（Higher-Order Function）和高阶组件（Higher-Order Component）虽然名字相似，但实际上是两个不同的概念。
> 1. 高阶函数：高阶函数是指接受一个或者多个函数作为参数，并且/或者返回一个新函数的函数。它是一种操作函数的函数。高阶函数可以用于函数柯里化、函数组合、函数装饰器等场景。
> 2. 高阶组件：高阶组件是一种在 React 中用于复用组件逻辑的技术。它本质上是一个函数，接受一个组件作为参数，并返回一个新的增强过的组件。高阶组件可以通过属性代理、反向继承、渲染劫持、状态抽象等方法来增强组件的功能。
>
> 虽然高阶组件和高阶函数都是函数，但它们的应用领域是不同的：
> 高阶函数主要用于操作和处理函数，可以在函数级别上进行抽象和复用
> 高阶组件主要用于操作和处理 React 组件，可以在组件级别上进行抽象和复用
>
> 总结来说，高阶函数是一种用于处理函数的函数，而高阶组件是一种用于处理React组件的函数。它们解决的问题领域不同，但都能帮助我们提高代码的复用性和可维护性。

4. 高阶组件可以让我们增强组件。 （True 或 False）

> True

## 练习2

1. 制作一个可以处理所有输入类型的高阶组件。