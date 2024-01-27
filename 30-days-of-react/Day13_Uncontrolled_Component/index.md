- [非受控组件](#非受控组件)
  - [从非受控组件中获取数据](#从非受控组件中获取数据)
  - [从表单中获取多个数据](#从表单中获取多个数据)
- [练习](#练习)
  - [练习1](#练习1)

### 非受控组件

在 React 中，大多数时间我们都按照 React 官方文档的建议使用受控组件。而如果要编写非受控组件，我们可以使用 ref 来从 DOM 中获取表单元素的值，而不会为每个状态的更新编写事件处理程序。

#### 从非受控组件中获取数据

我们使用 `useRef` 来创建一个 ref 对象，并将其挂载到对应的元素上。ref 对象包含一个 `current` 属性，这个属性可以用来引用被 ref 所标识的 DOM 元素或者组件实例。来看一个例子：

```js
import React, { useRef } from 'react';
import ReactDOM from 'react-dom'

function App() {
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(inputRef.current.value)
  }

  return (
    <div className='App'>
      <form onSubmit={handleSubmit}>
        <label htmlFor='firstName'>First Name: </label>
        <input
          type='text'
          id='firstName'
          name='firstName'
          placeholder='First Name'
          ref={inputRef}
        />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
```

#### 从表单中获取多个数据

我们可以使用多个 ref 从 DOM 中获取多个数据。

```js
import React, { useRef } from 'react'
import ReactDOM from 'react-dom'

function App() {
  const input1Ref = useRef(null);
  const input2Ref = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const value1 = input1Ref.current.value;
    const value2 = input2Ref.current.value;
    console.log("Input 1:", value1);
    console.log("Input 2:", value2);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" ref={input1Ref} />
      <input type="text" ref={input2Ref} />
      <button type="submit">Submit</button>
    </form>
  );
}
```

一般情况来说，我们使用 ref 来获取 DOM 元素的场景是比较少的，基本上都是使用受控组件。而还有一个需要注意的点就是当我们在开发 React 项目时，避免不要直接使用 DOM，这是因为在 React 内部有自己处理 DOM 操作的方式。

### 练习

#### 练习1

1. 什么是受控组件

> 受控组件是指在 React 中，表单元素的值由 React 组件的状态 state 来控制和管理的组件。具体来说，受控组件通过将表单元素的值绑定到组件的状态，并在表单元素的改变事件中更新状态的方式来实现。
>
> 使用受控组件时，我们可以通过在表单元素上设置 `value` 属性来指定当前的值，并通过设置 `onChange` 事件来更新状态。这样，每当用户输入内容的时候，React 组件的状态将相应地更新，从而与表单元素的值保持同步。

2. 什么是非受控组件
3. 在 React 中如何获取某个 HTML 元素的内容
4. 为什么在 React 中直接操作 DOM 不是一个好的事情
5. React 中最常用的是受控还是非受控组件？
6. 在开发非受控组件时需要什么？
7. 什么时候使用非受控组件
8. 什么时候需要使用受控组件
9.  是否有用过受控或者非受控组件来完成表单验证？
10. 在非受控组件中，是否需要将状态写入组件的输入中