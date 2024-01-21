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
        onChange={handleChange}
      />
      <h1>{firstName}</h1>
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
```

通常情况下，我们会将 input 输入框包裹在 form 表单元素下，然后通过填写不同的信息之后进行表单的提交。

#### 在表单中写入多个输入框

现在，我们将开发一个收集用户信息的小表单。我们的用户是一名学生，我们将使用 form 元素和一定数量的 input 元素来收集用户信息。

在这个过程中，我们将使用 onSubmit 和 onChange 事件来提交和修改用户的信息。您也可以查看[演示](https://codepen.io/Asabeneh/full/eYNvJda)。

```js
import React, { useState } from 'react'
import ReactDOM from 'react-dom'

function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [country, setCountry] = useState('');
  const [title, setTitle] = useState('');

  const stateMap = {
    firstName: (value) => setFirstName(value),
    lastName: (value) => setLastName(value),
    country: (value) => setCountry(value),
    title: (value) => setTitle(value),
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    stateMap[name](value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log({
      firstName,
      lastName,
      country,
      title
    })
  }

  return (
    <div className='App'>
      <h3>Add Student</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type='text'
            name='firstName'
            placeholder='First Name'
            value={firstName}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type='text'
            name='lastName'
            placeholder='Last Name'
            value={lastName}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type='text'
            name='country'
            placeholder='Country'
            value={country}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type='text'
            name='title'
            placeholder='Title'
            value={title}
            onChange={handleChange}
          />
        </div>

        <button class='btn btn-success'>Submit</button>
      </form>
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
```

这样一个简单的表单就完成了。不过大家应该也注意到了，这个表单中都是文本类型的输入框，但实际上也还有很多不同类型的输入框，让我们来继续探索一下其他类型的输入框吧。

#### 输入框的不同类型

废话不多说，我们直接看代码：

```js
// index.js
import React, { Component } from 'react'
import ReactDOM from 'react-dom'

const options = [
  {
    value: '',
    label: '-- Select Country--',
  },
  {
    value: 'Finland',
    label: 'Finland',
  },
  {
    value: 'Sweden',
    label: 'Sweden',
  },
  {
    value: 'Norway',
    label: 'Norway',
  },
  {
    value: 'Denmark',
    label: 'Denmark',
  },
]

// mapping the options to list(array) of JSX options

const selectOptions = options.map(({ value, label }) => (
  <option value={value}> {label}</option>
))

class App extends React.Component {
  // declaring state
  state = {
    firstName: '',
    lastName: '',
    email: '',
    country: '',
    tel: '',
    dateOfBirth: '',
    favoriteColor: '',
    weight: '',
    gender: '',
    file: '',
    bio: '',
    skills: {
      html: false,
      css: false,
      javascript: false,
    },
  }
  handleChange = (e) => {
    /*
     we can get the name and value like: e.target.name, e.target.value
    Wwe can also destructure name and value from e.target
    const name = e.target.name
    const value = e.target.value
    */
    const { name, value, type, checked } = e.target
    /*
    [variablename] we can make a value stored in a certain variable could be a key for an object, in this case a key for the state
    */

    if (type === 'checkbox') {
      this.setState({
        skills: { ...this.state.skills, [name]: checked },
      })
    } else if (type === 'file') {
      console.log(type, 'cehck here')
      this.setState({ [name]: e.target.files[0] })
    } else {
      this.setState({ [name]: value })
    }
  }
  handleSubmit = (e) => {
    /*
     e.preventDefault()
     stops the default behavior of form element
     specifically refreshing of page
    */
    e.preventDefault()
    const {
      firstName,
      lastName,
      email,
      tel,
      dateOfBirth,
      favoriteColor,
      weight,
      country,
      gender,
      bio,
      file,
      skills,
    } = this.state

    const formattedSkills = []
    for (const key in skills) {
      console.log(key)
      if (skills[key]) {
        formattedSkills.push(key.toUpperCase())
      }
    }
    const data = {
      firstName,
      lastName,
      email,
      tel,
      dateOfBirth,
      favoriteColor,
      weight,
      country,
      gender,
      bio,
      file,
      skills: formattedSkills,
    }
    /*
     the is the place where we connect backend api 
     to send the data to the database
     */
    console.log(data)
  }

  render() {
    // accessing the state value by destrutcturing the state
    const {
      firstName,
      lastName,
      email,
      tel,
      dateOfBirth,
      favoriteColor,
      weight,
      country,
      gender,
      bio,
    } = this.state
    return (
      <div className='App'>
        <h3>Add Student</h3>
        <form onSubmit={this.handleSubmit}>
          <div className='row'>
            <div className='form-group'>
              <label htmlFor='firstName'>First Name </label>
              <input
                type='text'
                name='firstName'
                value={firstName}
                onChange={this.handleChange}
                placeholder='First Name'
              />
            </div>
            <div className='form-group'>
              <label htmlFor='lastName'>Last Name </label>
              <input
                type='text'
                name='lastName'
                value={this.state.lastName}
                onChange={this.handleChange}
                placeholder='Last Name'
              />
            </div>
            <div className='form-group'>
              <label htmlFor='email'>Email </label>
              <input
                type='email'
                name='email'
                value={email}
                onChange={this.handleChange}
                placeholder='Email'
              />
            </div>
          </div>

          <div className='form-group'>
            <label htmlFor='tel'>Telephone </label>
            <input
              type='tel'
              name='tel'
              value={tel}
              onChange={this.handleChange}
              placeholder='Tel'
            />
          </div>

          <div className='form-group'>
            <label htmlFor='dateOfBirth'>Date of birth </label>
            <input
              type='date'
              name='dateOfBirth'
              value={dateOfBirth}
              onChange={this.handleChange}
              placeholder='Date of Birth'
            />
          </div>
          <div className='form-group'>
            <label htmlFor='favoriteColor'>Favorite Color</label>
            <input
              type='color'
              id='color'
              name='color'
              value={favoriteColor}
              onChange={this.handleChange}
              placeholder='Favorite Color'
            />
          </div>
          <div className='form-group'>
            <label htmlFor='weight'>Weight </label>
            <input
              type='number'
              id='weight'
              name='weight'
              value={weight}
              onChange={this.handleChange}
              placeholder='Weight in Kg'
            />
          </div>
          <div>
            <label htmlFor='country'>Country</label> <br />
            <select name='country' onChange={this.handleChange} id='country'>
              {selectOptions}
            </select>
          </div>

          <div>
            <p>Gender</p>
            <div>
              <input
                type='radio'
                id='female'
                name='gender'
                value='Female'
                onChange={this.handleChange}
                checked={gender === 'Female'}
              />
              <label htmlFor='female'>Female</label>
            </div>
            <div>
              <input
                id='male'
                type='radio'
                name='gender'
                value='Male'
                onChange={this.handleChange}
                checked={gender === 'Male'}
              />
              <label htmlFor='male'>Male</label>
            </div>
            <div>
              <input
                id='other'
                type='radio'
                name='gender'
                value='Other'
                onChange={this.handleChange}
                checked={gender === 'Other'}
              />
              <label htmlFor='other'>Other</label>
            </div>
          </div>

          <div>
            <p>Select your skills</p>
            <div>
              <input
                type='checkbox'
                id='html'
                name='html'
                onChange={this.handleChange}
              />
              <label htmlFor='html'>HTML</label>
            </div>
            <div>
              <input
                type='checkbox'
                id='css'
                name='css'
                onChange={this.handleChange}
              />
              <label htmlFor='css'>CSS</label>
            </div>
            <div>
              <input
                type='checkbox'
                id='javascript'
                name='javascript'
                onChange={this.handleChange}
              />
              <label htmlFor='javascript'>JavaScript</label>
            </div>
          </div>
          <div>
            <label htmlFor='bio'>Bio</label> <br />
            <textarea
              id='bio'
              name='bio'
              value={bio}
              onChange={this.handleChange}
              cols='120'
              rows='10'
              placeholder='Write about yourself ...'
            />
          </div>

          <div>
            <input type='file' name='file' onChange={this.handleChange} />
          </div>
          <div>
            <button>Submit</button>
          </div>
        </form>
      </div>
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
```

### 表单校验

#### 什么是校验？


表单校验其实就是检查或者证明表单中的数据是否是有效的或者说是符合预期的。

#### 表单校验的目的是什么？

表单校验的主要目的是从用户那里获取到有效的、正确的数据。同时，也放置恶意用户和数据。

#### 验证的类型有哪些？

表单校验可以从前端或者服务端来进行。一般来说，二者都需要进行校验，加强数据层面的有效性和安全性验证。

在前端中，我们通常使用 HTML5 内置的验证或者使用正则表达式来进行验证。

在下面的代码片段中，我们会对第一个字段增加校验逻辑。通过它来学习一下表单验证是如何工作的，我们可以使用 onBlur 事件在失去焦点时进行验证。

```js
// index.js
import React, { Component } from 'react'
import ReactDOM from 'react-dom'

function App() {
  const [firstName, setFirstName] = useState('')

  const handleChange = (e) {
    setFirstName(e.target.value)
  }

  const validate = useMemo(() => {
    if (firstName.length < 3 || firstName.length > 12) {
      return 'First name must be between 2 and 12'
    }
    return 'pass ✅'
  }, [firstName])

  return (
    <div className='App'>
      <div className='form-group'>
        <label htmlFor='firstName'>First Name </label>
        <input
          type='text'
          name='firstName'
          value={firstName}
          onChange={handleChange}
          placeholder='First Name'
        /> <br />
        <small>{validate}</small>
      </div>
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
```

### 练习

#### 练习1

1. form 表单的重要性是什么？

> 首先要知道，表单是用户与网页进行交互的主要方式之一，我们在网页上进行操作时，会经常遇到表单操作。
>
> 对于表单来说，它有以下几个作用：
> 1. 数据收集和传输：通过 form 表单，用户可以向服务器提交数据。这样，网站就能够收集用户的信息。例如注册、登录、订阅和反馈等。同时，form 表单也支持文件上传，用户可以通过表单将文件发送到服务器。
> 2. 用户交互和操作：form 表单提供了各种输入元素，例如文本框、复选框、单选按钮、下拉列表等等。用户可以在这些元素中输入或者选择数据，与网站进行交互和操作。
> 3. 数据验证和其安全性：form 表单可以对用户输入的数据进行验证，确保数据的合法性和有效性。通过设置必填字段、数据类型验证、长度限制等，可以防止错误或者恶意输入数据。这有助于提高用户体验和保护网站的安全性。
> 4. 多页面数据传递：form 表单还可以用于在不同页面之间传递数据。通过将数据存储在隐藏字段或者会话中，可以在用户导航到不同页面时保留数据状态，避免数据丢失。
>
> 综上所述，form 表单在网页开发中起着至关重要的作用，它使得用户能够与网站进行交互、传输数据和实现数据验证，提高用户体验和网站安全性。

2. 你知道多少种 input 类型？

> 17 种，分别是 text\password\email\number\checkbox\radio\file\date\time\datetime-local\range\color\search\tel\url\month\week

3. 请说出 input 元素的至少四种属性

> type\name\value\placeholder\required\readonly\disabled.
>
> 还有一些 html 元素通用的属性，比如 id\class 等等。

4. htmlFor 的重要性是什么？

> htmlFor 的作用是将 label 元素和表单元素关联起来，用于提高表单的可用性和可访问性。它有以下几个作用：
> 1. 表单元素关联：通过将 `for` 属性（在 React 中是 `htmlFor`）设置为表单元素的 id，可以明确地将 `label` 标签与相应的表单元素关联起来。这样，当用户点击 `label` 标签时，浏览器就会自动将焦点设置到关联的表单元素上，方便用户进行输入。
> 2. 提升可访问性：对于视觉受限的用户，例如使用屏幕阅读器的用户或者通过键盘导航的用户，`for` 属性可以提供更好的可访问性。屏幕阅读器可以读取 label 标签的文本，并将焦点转移到关联的表单元素上，从而帮助用户了解表单的用途和操作方式。
> 3. 扩大点击区域：通过将 input 元素嵌套在 label 标签上，并设置 for 属性，可以扩大用户点击的区域。这对移动设备或者触摸屏来说特别有用，因为它增加了操作表单元素的目标面积，提高了用户的操作准确性。

5. 写出一个在本节内容中没有提及的 input 类型
6. 什么是受控输入？

> 其实在 React 组件中，也有一个概念叫受控组件，这个我们后面也会提到。先来看看什么是受控输入。
>
> 受控输入其实是指通过 JS 控制表单输入元素的值和状态的一种方式。
>
> 在 HTML 中，通常使用 input\textarea\select 等元素来创建表单输入项。一般场景下，这些输入元素的值由用户直接输入或者选择的，并且可以通过 DOM API 来获取。然而，对于某些场景，我们可能需要在 JS 中对输入元素的值进行控制和处理。
>
> 在受控输入中，我们会使用特定的状态变量（通常是一个状态值或者状态对象）来存储输入元素的值，并将其与输入元素进行绑定。当用户输入或者选择发生变化时，我们通过事件监听或者其他方式更新状态变量的值，从而实现对输入元素的控制。
>
> 通过将输入元素的值和状态变量进行绑定，我们可以实现以下功能：
> 1. 初始化和同步：我们可以通过将初始值设置为状态变量的值，来初始化输入元素的值。同时，当状态变量的值发生变化时，我们可以将新的值同步到相关的输入元素上
> 2. 处理和验证：我们可以在更新状态变量的过程中，对输入的值进行处理和验证。例如，可以检查输入是否符合预期的格式或者范围，并根据结果更新状态变量的值
> 3. 响应性交互：由于输入元素的值和状态变量绑定，我们可以通过监听状态变量的变化来实现响应式的交互。例如，根据输入值的变化，可以动态显示或隐藏其他元素、改变样式或触发其他逻辑操作。

7. 编写受控输入需要什么？

> 1. 输入元素：在 HTML 中使用 input、textarea\select 等元素创建表单的输入项。确保设置一个唯一的 id 属性，以便将其与 label 元素和状态变量关联起来。
> 2. 标签元素：在输入元素之前或者之后使用 label 元素来提供文本的描述或者标签。通过 label 元素的 for 属性设置为输入元素的 id 值，可以将标签与输入元素进行关联，从而提高可用性和可访问性。
> 3. 状态变量：定义一个状态变量来存储输入元素的值。这可以是一个简单的变量，也可以是一个对象，根据实际场景来进行设计。
> 4. 事件处理程序：使用 JS 来编写事件处理程序，以响应输入元素的变化，通常，我们会监听输入元素的 change 事件或者其他适当的事件，并在事件处理程序中更新状态变量的值。
> 5. 绑定输入值：将输入元素的值绑定到状态变量。通过将输入元素的 value 属性或者 selected 属性设置为状态变量的值，实现输入元素与状态之间的双向绑定。
> 6. 反映状态变化：使用状态变量的值来更新输入元素的状态。通过将状态变量的值用作输入元素的初始值，并在状态变量的值发生变化时更新输入元素的值，确保它们保持同步。
> 7. 其他处理逻辑：你可以根据需要对输入值进行处理、验证和其他操作。例如，你可以在更新状态变量的值之前对用户的输入进行格式检查或验证。这样，你可以控制输入数据的有效性并采取相应的行动。

8. 可以使用哪些事件类型来监听 input 元素上的内容更新？

> input\change\keydown\keyup\paste 等事件都可以用来监听内容的更新

9.  当我们使用 checkbox 复选框时，得到的 value 值是什么？

> 当选中复选框时此时得到的值为 checkbox 上 value 属性的值。如果复选框上的 value 属性没有定义，那么选中时复选框的值将为 "on"

10. 什么时候使用 onChange\onBlur\onSubmit？

> 1. onChange 事件用于监听值的实时变化，通常会在用户输入过程中被频繁触发
> 2. onBlur 用于监听失去焦点的时刻，通常在用户完成输入并离开输入框时触发。
> 3. onSubmit 用于监听表单提交的时刻，通常在用户点击提交按钮或按下回车键时触发。

11. 在提交表单时，编写 e.preventDefault() 的目的是什么
12. 在 React 中如何绑定数据？
13. 什么是表单验证？
14. 当我们修改 input 元素中的值时，需要什么事件进行监听？
15. 我们可以使用哪些事件类型来验证输入内容是否合法？

#### 练习2

1. 给本节内容中的表单元素增加格式校验，先自定义校验，然后再尝试使用 validator.js 进行校验。