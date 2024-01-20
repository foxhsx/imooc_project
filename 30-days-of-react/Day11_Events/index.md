- [什么是事件？](#什么是事件)
- [练习](#练习)
  - [练习1](#练习1)
  - [练习2](#练习2)

### 什么是事件？

事件是在程序中能够被识别的动作或者操作。我们在使用计算机时，经常会触发以下操作，这些操作都属于事件：
- 单击某个按钮
- 将鼠标悬浮在某个图片上
- 按下键盘
- 滚动鼠标滚轮
- ……

在本节中，我们只关注一些鼠标和键盘事件。

在 React 中处理事件和使用纯 JS 处理 DOM 元素事件是非常相似的。它们俩的在处理事件上的语法差异在于：
- React 事件使用驼峰式命名，而不是小写。比如 `onClick`;
- React 使用 JSX，所以我们可以传递一个函数作为事件处理程序，而不是一个字符串。

让我们来看一些示例：

在 HTML 中使用事件
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>30 Days Of React App</title>
  </head>
  <body>
    <button>onclick="greetPeople()">Greet People</button>
    <script>
      const greetPeople = () => {
        alert('Welcome to 30 Days Of React Challenge')
      }
    </script>
  </body>
</html>
```

而在 React 中，情况略有不同：
```js
import React from 'react'
// if it is functional components
const App = () => {
  const greetPeople = () => {
    alert('Welcome to 30 Days Of React Challenge')
  }
  return <button onClick={greetPeople}> </button>
}
```

它俩之间还有一个区别是，在 React 中不能通过返回 false 来组织 React 里的默认行为。我们必须显式地调用 PreventDefault。

在 HTML 中，为了防止打开新页面的默认链接行为，我们可以有如下操作：

```html
<a href="#" onclick="console.log('The link was clicked.'); return false">
  Click me
</a>
```

而在 React 中，可能是这样的：

```js
import React, { Component } from 'react';

class App extends Component {
  handleClick = (event) => {
    event.preventDefault();
    alert('Welcome to 30 Days Of React Challenge');
  }

  render() {
    return (
      <a href="#" onClick={this.handleClick}>
        Click me
      </a>
    );
  }
}
```

让我们来学习更多的鼠标以及键盘事件：

```js
// App.js
import { useState } from 'react'

function App() {
  const [firstName, setFirstName] = useState('');
  const [message, setMessage] = useState('');
  const [key, setKey] = useState('');

  const handleClick = () => {
    setMessage('Welcome to the world of events')
  }

  const handleChange = (e) => {
    setMessage(e.target.value)
    setFirstName(e.target.value)
  }

  const handleMouseMove = () => {
    setMessage('mouse is moving')
  }

  const handleKeyPress = (e) => {
    setMessage(`${e.target.value} has been pressed and the keycode is` + e.charCode)
  }

  const handleBlur = () => {
    setMessage('Input field has been blurred')
  }

  const handleCopy = () => {
    setMessage('Using 30 Days Of React for commercial purpose is not allowed')
  }

  return (
    <div>
        <h1>Welcome to the World of Events</h1>

        <button onClick={handleClick}>Click Me</button>
        <button onMouseMove={handleMouseMove}>Move mouse on me</button>
        <p onCopy={handleCopy}>
          Check copy right permission by copying this text
        </p>

        <p>{message}</p>
        <label htmlFor=''> Test for onKeyPress Event: </label>
        <input type='text' onKeyPress={handleKeyPress} />
        <br />

        <label htmlFor=''> Test for onBlur Event: </label>
        <input type='text' onBlur={handleBlur} />

        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor='firstName'>First Name: </label>
            <input
              onChange={handleChange}
              name='firstName'
              value={value}
            />
          </div>

          <div>
            <input type='submit' value='Submit' />
          </div>
        </form>
      </div>
  )
}

export default App
```

然后在 index.js 中引入：

```js
// index.js
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.js'

const rootElement = document.getElementById('root')
// we render the JSX element using the ReactDOM package
ReactDOM.render(<App />, rootElement)
```

### 练习

#### 练习1

1. 什么是事件？

> 在 Web 开发中，事件通常与用户交互相关，例如用户点击按钮、移动鼠标、输入文本等。浏览器通过 JS 来监听这些事件，并执行相应的操作。比如，当用户点击按钮时，可以监听按钮的 click 事件，并执行一个函数来处理点击事件。
>
> 在 React 中，事件也是非常重要的概念。组件中的事件通常是由用户触发的，例如用户点击按钮、输入文本等。React 使用类似于 HTML 的方式来绑定事件，例如 onClick、onSubmit 等。当事件被触发时，React 会调用相应的处理函数来处理事件，从而改变组件的状态并更新页面显示。

2. HTML 元素事件和 React 事件有何不同？

> 1. 语法：HTML 元素事件使用类似于 HTML 的属性来绑定事件，例如 `onclick`、`onmouseover` 等。而 React 事件使用驼峰命名的属性作为事件处理函数，例如 `onClick`、`onMouseOver` 等。
> 2. 事件处理函数：在 HTML 中，事件处理函数可以直接指定为全局函数或者内联函数。而在 React 中，事件处理函数通常为组件内部的方法，需要通过箭头函数或者 `.bind()` 来确保正确的函数上下文。
> 3. 事件绑定时机：在 HTML 中，事件可以在元素渲染时直接绑定。而在 React 中，事件通常在组件渲染时通过 JSX 绑定，也可以在组件内部的方法中动态绑定
> 4. 事件对象：在 HTML 中，事件处理函数会自动接受一个事件对象作为参数，可以使用该对象获取相关的信息。而在 React 事件中，事件对象被封装在合成事件（SyntheticEvent）中，具有跨浏览器兼容性，并提供了一些额外的功能。
> 5. 事件冒泡和捕获：在 HTML 事件中，默认支持事件冒泡和捕获机制，可以通过添加 addEventListener 监听器来捕获事件。但是在 React 中，都需要开发人员手动进行实现。

3. 至少写 4 个键盘事件

> - onKeyup：当用户释放任意键时触发，与 keydown 事件相对应。
> - onKeyDown：当用户按下任意键时触发，包括非字符键（例如 Shift、Ctrl、Alt 等）和功能键（例如箭头键、回车键等）。
> - onKeyPress：当用户按下字符键时触发，包括字母、数字和标点符号等可打印字符。
> - onInput：当用户在输入框或文本区域中输入文本时触发，包括键盘输入和其他方式（例如复制粘贴、拖放等）。

4. 至少写 8 个鼠标事件

> - click
> - mouseMove
> - mouseUp
> - mouseDown
> - dbClick
> - mouseover
> - mouseLeave
> - mouseEnter

5. 最常见的鼠标和键盘事件都有哪些？

> 参见第 4 和第 5 题

6. 编写特定于输入元素的事件

```js
import React from 'react';

const InputElement = () => {
  const handleInput = (event) => {
    console.log('Input Value:', event.target.value);
  };

  const handleChange = (event) => {
    console.log('Selected Value:', event.target.value);
  };

  const handleFocus = (event) => {
    console.log('Focused on:', event.target);
  };

  const handleBlur = (event) => {
    console.log('Blurred from:', event.target);
  };

  return (
    <div>
      <input type="text" onInput={handleInput} />
      <select onChange={handleChange}>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
      </select>
      <input type="text" onFocus={handleFocus} onBlur={handleBlur} />
    </div>
  );
};

export default InputElement;
```

7. 编写特定于表单元素的事件

```js
import React, { useState } from 'react';

const FormElement = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form Submitted');
    // 执行表单提交逻辑
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormElement;
```

8. 当鼠标在 body 上移动时展示鼠标当前的坐标

```html
<!DOCTYPE html>
<html>
  <head>
    <title>展示鼠标坐标</title>
  </head>
  <body>
    <div id="coordinates"></div>

    <script type="text/javascript">
      // 获取坐标显示元素
      const coordinatesElement = document.getElementById('coordinates');

      // 监听 body 上的 mousemove 事件
      document.body.addEventListener('mousemove', (event) => {
        // 获取鼠标当前的坐标
        const mouseX = event.clientX;
        const mouseY = event.clientY;

        // 在页面上展示坐标
        coordinatesElement.textContent = `X: ${mouseX}, Y: ${mouseY}`;
      });
    </script>
  </body>
</html>

```

9.  onInput、onChange 和 onBlur 有什么区别？

> 实际上，这三个事件都属于表单事件，区别在于：
> 1. onInput 事件：当用户在输入框中输入内容时触发。它可以捕获实时的输入变化，包括用户键入、粘贴、剪切和撤销等操作。
> 2. onChange 事件：在表单元素的值发生变化并且失去焦点时触发。通常在用户修改完输入后，离开表单元素时才会触发。
> 3. onBlur 事件：当表单元素失去焦点时触发。它在用户离开表单元素时触发，无论是否有值的更改。

10. 我们把 onSubmit 事件放在哪里？

> onSubmit 事件一般放在 form 表单中才会生效。而为了防止表单提交后刷新页面，我们在处理函数中使用 event.preventDefault() 方法来阻止默认的提交行为。

#### 练习2

使用 onMouseEnter 事件实现以下内容

![](../imgs/day11_react_event_on_mouse_enter.gif)

