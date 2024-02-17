- [介绍 React Hook](#介绍-react-hook)
  - [基础 Hook](#基础-hook)
    - [State Hook](#state-hook)
    - [Effect Hook](#effect-hook)
    - [Context Hook](#context-hook)
  - [Additional Hook](#additional-hook)
    - [useReducer](#usereducer)
    - [useCallback](#usecallback)
    - [useMemo](#usememo)
    - [useRef](#useref)
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

Additional Hooks 是指除了上述的 Hook 之外，React 还额外提供的一些 Hook，用于处理特定的场景或者实现特定的功能，它们包括：

- useReducer
- useCallback
- useMemo
- useRef
- useImperativeHandle
- useLayoutEffect
- useDebugValue
- useDeferredValue
- useTransition
- useId

这里我们只介绍前四个常用的。

#### useReducer

useReducer 是 React 提供的一个 Hook，用于管理组件中复杂的状态逻辑。它可以替代 useState 来管理状态，并且常用于需要多个相关值来共同决定状态变化的场景，或者需要根据先前的状态来更新状态的场景。

useReducer 接收两个参数：reducer 函数和初始状态。reducer 函数接收当前状态和要进行的操作（action），然后根据操作返回新的状态。通常，操作会包含一个 type 字段，用于指示进行何种类型的状态更新，也可能包含一些额外的数据，用于更新状态所需的信息。

这是 useState 部分的计数器示例，重写为使用 reducer：

```js
const initialState = { count: 0 }

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      throw new Error();
  }
}


function Counter() {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <>
            Count: {state.count}
            <button onClick={() => dispatch({type: 'decrement'})}>-</button>
            <button onClick={() => dispatch({type: 'increment'})}>+</button>
        </>
    )
}
```

`useReducer` 可以用于模块级的公共状态管理。通过将 `useReducer` 与 Context API 结合，可以创建一个模块级的状态管理方案，使得多个组件可以共享和操作相同的状态。

```js

import React, { createContext, useContext, useReducer } from 'react';

// 创建一个 Context 对象
const ModuleContext = createContext();

// 定义初始状态和 reducer 函数
const initialState = {
  count: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

// 创建一个 Provider 组件，包裹需要共享状态的组件
function ModuleProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ModuleContext.Provider value={{ state, dispatch }}>
      {children}
    </ModuleContext.Provider>
  );
}

// 自定义 hook 用于在子组件中使用共享状态
function useModule() {
  const context = useContext(ModuleContext);
  if (!context) {
    throw new Error('useModule must be used within a ModuleProvider');
  }
  return context;
}

// 在子组件中使用共享状态
function ModuleComponent() {
  const { state, dispatch } = useModule();

  return (
    <div>
      Count: {state.count}
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
    </div>
  );
}

// 在父组件中使用 Provider 包裹需要共享状态的子组件
function App() {
  return (
    <ModuleProvider>
      <ModuleComponent />
    </ModuleProvider>
  );
}
```

> 在 React 中，`useContext` hook 只会返回传递给 `<Context.Provider>` 组件的 `value` 值。在我们的例子中，`<ModuleContext.Provider>` 的 `value` 是一个对象，包含了 `state` 和 `dispatch`。因此，在 `useModule` 中，我们可以直接获取到这个对象，从而在子组件中访问到 `state` 和 `dispatch`。

需要注意的是，在 React 中，`useReducer` 是同步的，并不能直接处理异步调用。如果你需要在 `useReducer` 中处理异步操作，可以结合使用 `useEffect` 和其他异步库（如 Axios、fetch 等）来实现。

```js
import React, { createContext, useContext, useReducer, useEffect } from 'react';

// 创建一个 Context 对象
const ModuleContext = createContext();

// 定义初始状态和 reducer 函数
const initialState = {
  loading: false,
  data: null,
  error: null,
};

function reducer(state, action) {
  switch (action.type) {
    case 'fetch_start':
      return { ...state, loading: true };
    case 'fetch_success':
      return { loading: false, data: action.payload, error: null };
    case 'fetch_error':
      return { loading: false, data: null, error: action.payload };
    default:
      return state;
  }
}

// 创建一个 Provider 组件，包裹需要共享状态的组件
function ModuleProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ModuleContext.Provider value={{ state, dispatch }}>
      {children}
    </ModuleContext.Provider>
  );
}

// 自定义 hook 用于在子组件中使用共享状态
function useModule() {
  const context = useContext(ModuleContext);
  if (!context) {
    throw new Error('useModule must be used within a ModuleProvider');
  }
  return context;
}

// 在子组件中使用共享状态，并发起异步调用
function ModuleComponent() {
  const { state, dispatch } = useModule();

  useEffect(() => {
    dispatch({ type: 'fetch_start' });
    fetchData()
      .then((data) => {
        dispatch({ type: 'fetch_success', payload: data });
      })
      .catch((error) => {
        dispatch({ type: 'fetch_error', payload: error.message });
      });
  }, []); // 只在组件挂载时执行一次

  return (
    <div>
      {state.loading ? <p>Loading...</p> : state.error ? <p>Error: {state.error}</p> : <p>Data: {state.data}</p>}
    </div>
  );
}

// 模拟异步数据获取
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // 模拟异步操作
      const randomNum = Math.floor(Math.random() * 10);
      if (randomNum < 5) {
        resolve('Success data');
      } else {
        reject(new Error('Failed to fetch data'));
      }
    }, 2000);
  });
}

// 在父组件中使用 Provider 包裹需要共享状态的子组件
function App() {
  return (
    <ModuleProvider>
      <ModuleComponent />
    </ModuleProvider>
  );
}
```

#### useCallback

在 React 中，`useCallback` 是一个用于优化性能的 Hook，它用于返回一个稳定的记忆化函数。简单来说，`useCallback` 用于避免在每次渲染时都创建新的函数实例。

当将函数作为 `prop` 传递给子组件时，如果该函数在父组件重新渲染时被创建了新的实例，可能会导致子组件不必要地重新渲染。这是因为子组件会检查传递给它的 `prop` 是否发生更改，包括函数类型的 prop。如果函数每次都是新的实例，那么子组件就会认为该 prop 发生了更改，即使实际上函数的行为没有发生变化。

使用 `useCallback` 可以确保依赖项（如 state 或其他 prop）未发生变化时，返回相同的函数实例，以减少子组件的不必要渲染。

> **如果函数只在当前组件被使用，那还需要使用 useCallback 吗？**
> 
> 如果函数只在当前组件被使用，那么使用 ```useCallback``` 并不是必须的，因为即使该函数在重新渲染时被创建了新的实例，也不会影响其他组件的渲染。
> 
> 但是，如果该函数需要作为 props 传递给子组件，或者在 useEffect 的依赖项数组中使用，那么使用 ```useCallback``` 仍然是一个优化性能的好方法。这是因为使用 ```useCallback``` 可以确保依赖项未发生变化时返回相同的函数实例，从而减少子组件的不必要渲染。
> 
> 另外，即使函数只在当前组件使用，使用 ```useCallback``` 仍然可以让代码更清晰易懂，尤其是在处理复杂逻辑或需要多次调用的情况下。
> 
> 综上所述，使用 ```useCallback``` 并不是必须的，但是它可以帮助我们优化性能和代码结构。

`useCallback` 接受两个参数：回调函数和依赖项数组。当依赖项数组中的任何一个值发生变化时，`useCallback` 将返回一个新的记忆化函数。如果依赖项数组为空，则该回调函数只会在组件第一次渲染时创建，并且在后续渲染中始终返回同一个函数实例。

```js

import React, { useState, useCallback } from 'react';

function ParentComponent() {
  const [count, setCount] = useState(0);

  // 使用 useCallback 包装回调函数，确保依赖项未发生变化时返回相同的函数实例
  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <ChildComponent onClick={handleClick} />
    </div>
  );
}

function ChildComponent({ onClick }) {
  console.log('ChildComponent render');
  return <button onClick={onClick}>Increment</button>;
}
```

`useCallback(fn, deps) `相当于 `useMemo(() => fn, deps)`。

#### useMemo

`useMemo` 是 React 提供的一个 Hook，用于在**渲染过程中**对值进行记忆化处理，以避免不必要的重复计算。

当我们需要根据某些特定的依赖项计算出一个数值，并且这个计算过程可能比较昂贵耗时时，可以使用 `useMemo` 来缓存计算结果，避免在每次重新渲染时都重新计算。

`useMemo` 接受一个工厂函数和一个依赖项数组，并返回工厂函数的计算结果。只有在依赖项发生变化时，`useMemo` 才会重新计算值；否则，它会返回上一次的缓存值。

如果未提供依赖项，则每次渲染时都会计算一个新值。

```js
import React, { useMemo } from 'react';

function ExpensiveCalculationComponent({ a, b }) {
  // 使用 useMemo 缓存计算结果，只有 a 或 b 变化时才重新计算
  const result = useMemo(() => {
    console.log('Calculating...');
    return a * b;
  }, [a, b]);

  return <div>Result: {result}</div>;
}

function App() {
  const [valueA, setValueA] = React.useState(5);
  const [valueB, setValueB] = React.useState(10);

  return (
    <div>
      <ExpensiveCalculationComponent a={valueA} b={valueB} />
      <button onClick={() => setValueA(valueA + 1)}>Increment A</button>
      <button onClick={() => setValueB(valueB + 1)}>Increment B</button>
    </div>
  );
}

export default App;
```

在使用 useMemo 时，有一些需要注意的地方：

1. 性能优化：确保只有在需要时才使用 useMemo。不要过度优化，只有在存在明显的性能问题或计算开销较大时才使用 useMemo 进行优化。

2. 依赖项数组：要明确指定 useMemo 的依赖项数组。依赖项数组中的变量发生变化时，才会触发 useMemo 中的工厂函数进行重新计算。如果依赖项数组未正确设置，可能会导致缓存的值不会在预期的时机进行更新。

3. 不要滥用：避免在不必要的情况下滥用 useMemo。只有在确实需要缓存计算结果时才使用 useMemo，否则可能会增加代码复杂度，导致代码难以理解。

4. 内存占用：虽然 useMemo 可以帮助避免不必要的重复计算，但缓存的值可能会占用一定的内存空间。因此，在处理大数据量或长列表时，需要谨慎使用 useMemo，以避免过多的内存占用。

5. 与 useCallback 区分：记住 useMemo 用于缓存数值，而 useCallback 用于缓存回调函数。在使用时要根据具体场景选择合适的 Hook。

6. 不处理副作用：useMemo 适用于对值进行缓存和记忆化计算，不应该用于处理副作用。如果要处理副作用，请在 useEffect 中进行。

> 如果在 useMemo 中处理副作用，可能会导致一些问题。
> 
> 首先，useMemo 的目的是为了缓存计算结果，而不是处理副作用。在 useMemo 中处理副作用可能会导致代码难以理解和维护。
> 
> 其次，由于 useMemo 的执行时机是在组件渲染时进行的，而副作用可能会导致组件外部状态的改变，这样可能会导致应用程序状态出现问题。
> 
> 最后，由于 useMemo 的执行是在渲染阶段进行的，而副作用操作通常需要在组件挂载或卸载时进行，因此在 useMemo 中处理副作用很可能会导致不正确的执行时机，从而导致副作用无法正确地执行。
> 
> 综上所述，不建议在 useMemo 中处理副作用。如果需要处理副作用，应该使用 useEffect 来处理，以确保副作用的正确执行时机并处理好依赖关系。

#### useRef

useRef 是 React 提供的一个 Hook，用于在函数组件中创建持久化的引用。它类似于 class 组件中的 ref。

useRef 返回一个可变的 ref 对象，该对象的 current 属性可以存储任意可变值。在组件的多次渲染之间，ref 对象的值保持不变。

主要用途有两个：

1. 访问 DOM 元素或自定义组件实例：可以使用 useRef 来获取组件中的 DOM 元素或自定义组件的实例。将 ref 对象赋给组件的 ref 属性，就可以在函数组件中访问相应的 DOM 元素或组件实例。

2. 存储任意可变值：可以使用 useRef 来存储任意可变的值，而不会触发组件重新渲染。通过修改 ref 对象的 current 属性，可以在函数组件中保存和访问这个值。

```js
function TextInputWithFocusButton() {
  const inputEl = useRef(null);
  const onButtonClick = () => {
    // `current` points to the mounted text input element
    inputEl.current.focus();
  };
  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  );
}
```

本质上，useRef 就像一个“盒子”，可以在其 .current 属性中保存可变值。  

您可能熟悉 refs 主要是作为访问 DOM 的一种方式。如果使用 <div ref={myRef} /> 将 ref 对象传递给 React，每当该节点发生更改时，React 都会将其 .current 属性设置为相应的 DOM 节点。  

然而，useRef() 的用途不仅仅是 ref 属性。它可以方便地保留任何可变值。

> 改变 .current 属性不会导致重新渲染。

因此，当需要存储和更新一些不影响组件渲染的状态时，可以使用 useRef 来实现。

## 练习

### 练习1

将您编写的所有内容转换为 React hooks。
