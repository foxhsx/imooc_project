- [useRef](#useref)
  - [从 input 中获取数据](#从-input-中获取数据)
  - [获取焦点](#获取焦点)
  - [从DOM树中获取内容](#从dom树中获取内容)
  - [访问 DOM 元素并设置样式](#访问-dom-元素并设置样式)
  - [练习](#练习)


## useRef

在本节中，我们将使用 useRef Hook 来获取 input 数据或访问 React 应用程序中的任何 DOM 元素。

useRef 返回一个可变的 ref 对象，其 .current 属性就是当我们使用 useRef 时，初始传递给这个 Hook 的参数。返回的对象将在组件的整个生命周期内持续存在。

在下面的示例中，我们将了解如何使用 useRef 钩子：

- 从 input 中获取数据

- 访问 DOM 树中的元素。

### 从 input 中获取数据

既然使用 ref 来获取 input 的值，那么我们的元素最好是非受控的。

```js
import React, { useRef } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const ref = useRef(null)
  const onClick = () => {
    let value = ref.current.value
    alert(value)
  }
  return (
    <div className='App'>
      <h1>How to use data from uncontrolled input using useRef</h1>
      <input type='text' ref={ref} />
      <br />
      <button onClick={onClick}>Get Input Data</button>
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
```

### 获取焦点

我们也使用 ref 来触发 input 框的焦点事件。

```js
import React, { useRef } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const ref = useRef(null)
  const onClick = () => {
    ref.current.focus()
  }
  return (
    <div className='App'>
      <h1>How to focus on input element useRef</h1>
      <input type='text' ref={ref} />
      <br />
      <button onClick={onClick}>Click to Focus on input</button>
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
```

### 从DOM树中获取内容

当我们开发 React 应用程序时，一般不建议直接操作 DOM，因为 React 有自己的方式使用虚拟 DOM 来操作 DOM。如果我们需要从 DOM 树中获取一些内容，我们可以使用 useRef  Hook。

```js
import React, { useRef } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const ref = useRef(null)
  const onClick = () => {
    let content = ref.current.textContent
    alert(content)
    console.log(content)
  }
  return (
    <div className='App'>
      <h1 ref={ref}>How to getting content from the DOM tree</h1>
      <button onClick={onClick}>Getting Content</button>
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
```

### 访问 DOM 元素并设置样式

既然我们可以使用 ref 获取 DOM，那么同样的，我们也可以直接设置其样式。

```js
import React, { useRef } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const ref = useRef(null)
  const onClick = () => {
    ref.current.style.backgroundColor = '#61dbfb'
    ref.current.style.padding = '50px'
    ref.current.style.textAlign = 'center'
  }
  return (
    <div className='App'>
      <h1 ref={ref}>How to style HTML from the DOM tree using useRef</h1>
      <button onClick={onClick}>Style it</button>
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement
```

### 练习

开发以下应用程序：应用程序默认生成 27 种十六进制颜色。如果单击“生成”按钮，它将生成另一个新的 27 种十六进制颜色。


