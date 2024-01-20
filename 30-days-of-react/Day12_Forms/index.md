- [表单](#表单)
  - [输入框 input](#输入框-input)
  - [在表单中写入多个输入框](#在表单中写入多个输入框)
  - [输入框的不同类型](#输入框的不同类型)
- [表单校验](#表单校验)
  - [什么是校验？](#什么是校验)
  - [表单校验的目的是什么？](#表单校验的目的是什么)
  - [验证的类型有哪些？](#验证的类型有哪些)
- [练习](#练习)
  - [练习1](#练习1)
  - [练习2](#练习2)

### 表单

表单用于收集用户填写的数据。无论是注册、登录还是申请工作，我们都会填写不同的表单字段，然后通过提交这些数据将其存储到远程数据库中。

这些表单字段的类型也有不同，比如有简单的文本、电子邮件、密码、电话、日期、复选框、单选框、下拉框以及文本区域等等。

对于 input 文本框来说，目前 HTML5 已经提供了如下所示的多种字段类型。

```html
<input type="text" />
<input type="number" />
<input type="range" />

<input type="email" />
<input type="password" />
<input type="tel" />

<input type="checkbox" />
<input type="radio" />

<input type="color" />

<input type="url" />
<input type="image" />
<input type="file" />

<input type="hidden" />

<input type="date" />
<input type="datetime-local" />
<input type="month" />
<input type="week" />
<input type="time" />

<input type="reset" />
<input type="search" />
<input type="submit" />
<input type="button" />
```

还有 select 和 textarea 元素：

```html
<textarea>Please write your comment ...</textarea>

<select name="country">
  <option value="">Select your country</option>
  <option value="finland">Finland</option>
  <option value="sweden">Sweden</option>
  <option value=denmark">Denmark</option>
  <option value="norway">Norway</option>
  <option value="iceland">Iceland</option>
</select>
```

现在，相信您已经了解了表单中的大部分元素以及字段类型。接下来，让我们正式从输入框 input 元素开始。

在前一天，我们学习了不同类型的事件，今天我们将重点关注 onChange 事件，该事件类型会在输入字段数据发生更改时触发。

默认场景下，在 input 框中输入内容之后会有一个内存来存储输入数据。但在本节中，我们会使用一个状态来控制该内存，并实现受控输入。后面我们会在单独的部分介绍非受控的输入。

#### 输入框 input

现在我们需要一个 input 元素、事件侦听器和状态来从受控的输入框中获取数据。

input 元素具有许多属性，例如 value\name\id\placeholder\type 和事件处理程序。我们可以通过使用 id 和 label 元素的 htmlFor 属性来链接 label 和 input 元素。当两者之间关联时，我们点击 label 元素，也会聚焦到 input 输入框上。

```js
import React, { useState } from 'react'
import ReactDOM from 'react-dom'

function App() {
  const [firstName, setFirstName] = useState('')

  const handleChange = (e) => {
    const { value } = e.target;
    setFirstName(value)
  }

  return (
    <div className='App'>
      <label htmlFor='firstName'>First Name: </label>
      <input
        type='text'
        id='firstName'
        name='firstName'
        placeholder='First Name'
        value={firstName}
        onChange={this.handleChange}
      />
      <h1>{this.state.firstName}</h1>
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
```

通常情况下，我们会将 input 输入框包裹在 form 表单元素下，然后通过填写不同的信息之后进行表单的提交。

#### 在表单中写入多个输入框

#### 输入框的不同类型

### 表单校验

#### 什么是校验？

#### 表单校验的目的是什么？

#### 验证的类型有哪些？

### 练习

#### 练习1

#### 练习2