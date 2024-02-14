- [介绍 React Hook](#介绍-react-hook)
  - [基础 Hook](#基础-hook)
    - [State Hook](#state-hook)
    - [Effect Hook](#effect-hook)
    - [Context Hook](#context-hook)
  - [Additional Hook](#additional-hook)
- [练习](#练习)
  - [练习1](#练习1)

## 介绍 React Hook

Hooks 是 React 16.8 中的新增功能。它允许我们使用状态、生命周期方法和其他 React 功能，而无需编写类组件。如果我们使用 Hook，则整个应用程序中只能有一个功能组件。有关更多详细说明，请查看 [React 文档](https://reactjs.org/docs/hooks-reference.html)。

Hook 分为基本的一些 Hook 和一些具有附加功能的 Hook。

### 基础 Hook

基础的 Hook 分为：
- useState
- useEffect
- useContext

#### State Hook

使用 State Hook，我们可以直接在函数组件中设置并访问状态，而无需编写类组件。

要使用钩子，首先我们应该从react导入useState钩子。 useState 是一个函数，它接受一个参数并返回当前状态和可让您更新它的函数。

在初始渲染期间，返回的状态（state）与作为第一个参数传递的值相同。

在后续重新渲染期间，useState 返回的第一个值将始终是应用更新后的最新状态。

```js
// index.js
import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  // Declaring new state variable
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <h1>{count} </h1>
      <button onClick={() => setCount(count + 1)}>Add One</button>
    </div>
  )
}
const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
```

我们使用 useState Hook 来定义一个 count 的状态，并设置初始值为 0，然后使用 setCount 来更新状态。

我们也可以编写单独的函数，而不是将函数写在大括号内。

```js
// index.js
import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  // Declaring new state variable
  const [count, setCount] = useState(0)
  const addOne = () => {
    let value = count + 1
    setCount(value)
  }
  const minusOne = () => {
    let value = count - 1
    setCount(value)
  }
  return (
    <div className='App'>
      <h1>{count} </h1>
      <button onClick={addOne}>Add One</button> <button onClick={minusOne}>Minus One</button>
    </div>
  )
}
const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
```

我们也可以在更新值的时候，在 setCount 里面使用函数的形势，此时回调函数的参数就是之前的值，而回调函数体内就返回处理之后的新值。

```js
const [state, setState] = useState({});
setState(prevState => {
  // Object.assign would also work
  return {...prevState, ...updatedValues};
});
```

与类组件中的 setState 方法不同，useState 不会自动合并更新对象。我们可以通过将函数更新器形式与对象扩展语法相结合来复制此行为。

#### Effect Hook

Effect Hook 是 React 函数组件中用于处理副作用的 Hook，它是在组件渲染后执行的，可以用于处理数据获取、订阅事件、手动操作 DOM 等副作用操作。

使用 Effect Hook 需要调用 useEffect() 函数，并传入一个回调函数，这个回调函数会在每次组件渲染后执行，可以通过返回一个清理函数来清除副作用。

我们来看一个计数器的例子：

```js
import { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

清理函数会在组件从 UI 中删除之前运行，以防止内存泄漏。此外，如果一个组件渲染多次（通常会这样做），则在执行下一个效果之前会清除前一个效果。

#### Context Hook

### Additional Hook

## 练习

### 练习1
