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
2. 你知道多少种 input 类型？
3. 请说出 input 元素的至少四种属性
4. htmlFor 的重要性是什么？
5. 写出一个在本节内容中没有提及的 input 类型
6. 什么是受控输入？
7. 编写受控输入需要什么？
8. 可以使用哪些事件类型来监听 input 元素上的内容更新？
9. 当我们使用 checkbox 复选框时，得到的 value 值是什么？
10. 什么时候使用 onChange\onBlur\onSubmit？
11. 在提交表单时，编写 e.preventDefault() 的目的是什么
12. 在 React 中如何绑定数据？
13. 什么是表单验证？
14. 当我们修改 input 元素中的值时，需要什么事件进行监听？
15. 我们可以使用哪些事件类型来验证输入内容是否合法？

#### 练习2

1. 给本节内容中的表单元素增加格式校验，先自定义校验，然后再尝试使用 validator.js 进行校验。