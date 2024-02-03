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
2. 什么是高阶分量
3. 高阶函数和高阶分量有什么区别？
4. 高阶组件可以让我们增强组件。 （True 或 False）

## 练习2

1. 制作一个可以处理所有输入类型的高阶组件。