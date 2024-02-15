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

需要注意的是 useEffect 的执行是在每次完成渲染后触发效果。但是这样的话，假如在组件中的某个状态发生改变时，会导致组件的重新渲染，而重新渲染又会导致 useEffect 的执行。

这对于性能的消耗在项目中是巨大的，因为我们可能只需要在某些特定状态发生变化时才想让 useEffect 重新执行。而要实现此目的，就需要给 useEffect 传入第二个参数，它是 useEffect 的依赖项，是一个数组，也就是说会影响到 useEffect 执行的依赖项可能不止一个。

如果传入空数组 [] 作为依赖项，表示 Effect Hook 只在组件挂载和卸载时执行，不依赖任何变量，这样可以模拟类似于 componentDidMount 和 componentWillUnmount 的行为。

```js
useEffect(
  () => {
    const subscription = props.source.subscribe();
    return () => {
      subscription.unsubscribe();
    };
  },
  [props.source],
);
```

#### Context Hook

Context Hook 是 React 中用于访问和修改全局状态的 Hook，它可以让我们在组件之间共享数据，而无需通过 props 层层传递。

Context Hook 可以和 Provider 和 Consumer 一起使用，Provider 提供数据，Consumer 使用数据。

使用 Context Hook 需要先创建一个 Context 对象，可以通过调用 React.createContext() 来创建：

```js
import React from 'react';
const MyContext = React.createContext(defaultValue);
```

其中 defaultValue 是当没有匹配到 Provider 时的默认值。

> - `Context` `对象：Context` 对象是 `React` 提供的用于共享数据的一种机制。它允许我们将数据通过组件树进行传递，而无需在每个层级手动传递 props。
> - `createContext()`：`createContext()` 方法用于创建一个 `Context` 对象。它接受一个默认值作为参数，当组件没有匹配到对应的 `Provider` 时会使用默认值。
> - `Provider`：`Provider` 是用于提供数据的组件，它通过 `value` 属性传递数据给后代组件。
> - `Consumer`：`Consumer` 是用于消费数据的组件，它通过 `Context` 对象来获取 `Provider` 提供的数据。

然后可以使用 useContext() Hook 来访问这个 Context 对象，并获取 Provider 提供的数据：

```js
import { useContext } from 'react';
const value = useContext(MyContext);
```

useContext() 接收一个 Context 对象作为参数，返回 Provider 提供的数据。需要注意的是，只有当当前组件所处的树中存在匹配到的 Provider 时，useContext() 才能获取到对应的数据。

```js
import React, { useState } from 'react';

const ThemeContext = React.createContext('light');

function App() {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={theme}>
      <button onClick={toggleTheme}>Toggle theme</button>
      <Toolbar />
    </ThemeContext.Provider>
  );
}

function Toolbar() {
  const theme = useContext(ThemeContext);
  const style = {
    padding: '10px',
    backgroundColor: theme === 'light' ? '#fff' : '#000',
    color: theme === 'light' ? '#000' : '#fff'
  };

  return (
    <div style={style}>
      This is a toolbar
    </div>
  );
}
```

在这个例子中，App 组件提供了一个 ThemeContext.Provider，并将当前主题状态传递给 Provider 的 value 属性。Toolbar 组件使用 useContext() Hook 获取 Provider 提供的主题数据，并根据不同主题样式渲染自己的样式。

我们也可以创建多个 Context 对象来管理不同的全局状态，在不同的组件中使用不同的 Context。

我们为什么要使用 Context Hook？

- 避免 `prop drilling`：在多层嵌套的组件中，如果数据需要从顶层组件传递到底层组件，会导致 prop drilling（属性钻取），使代码变得冗余且难以维护。
- 全局状态管理：有些数据需要在整个应用中共享，例如用户信息、主题等，使用 Context 可以方便地实现全局状态管理。

在使用时需要注意哪些事项？

- 避免滥用：不应该把所有的状态都放入 Context 中，只有那些真正需要在整个应用中共享的状态才应该放入 Context。
- 性能考虑：Context 中的数据发生变化时，整个使用了该 Context 的子组件都会重新渲染，因此需要谨慎管理 Context 中的数据。
- 过度嵌套：过多的 Context 嵌套可能会导致代码结构复杂，应该合理规划 Context 的使用层级。

无论组件嵌套有多深，只要在 Provider 的范围内，都可以使用 useContext() Hook 来获取 Provider 提供的数据。

### Additional Hook

## 练习

### 练习1
