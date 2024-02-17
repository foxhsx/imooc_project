- [Forms](#forms)
  - [从 input 中获取数据](#从-input-中获取数据)
  - [从表单获取多个数据](#从表单获取多个数据)
  - [从不同类型的 input 中获取数据](#从不同类型的-input-中获取数据)
  - [表单验证](#表单验证)
    - [什么是验证？](#什么是验证)
    - [验证的目的是什么](#验证的目的是什么)
    - [如何验证](#如何验证)

## Forms

关于表单我们已经在第12节学习过了。这一节主要是介绍如何使用 Hook 来获取表单数据。

### 从 input 中获取数据

结合上一节学习到的 useState，我们可以修改一下之前在类组件中的代码：

```js
import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  // initial state and method to update state
  const [firstName, setFirstName] = useState('')
  const handleChange = (e) => {
    const value = e.target.value
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

### 从表单获取多个数据

上面只是简单的举了一个例子，并没有将 input 元素放到 form 表单中，接下来我们看下如何在表单中获取多个 input 元素的值。

```js
import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const initialState = {
    firstName: '',
    lastName: '',
    country: '',
    title: '',
  }
  const [formData, setData] = useState(initialState)

  const onChange = (e) => {
    const { name, value } = e.target
    setData({ ...formData, [name]: value })
  }
  const onSubmit = (e) => {
    /* 
     e.preventDefault()
      stops the default behavior of form element
     specifically refreshing of page
     */
    e.preventDefault()

    /*
     the is the place where we connect backend api 
     to send the data to the database
     */
    console.log(formData)
  }

  // accessing the state value by destrutcturing the state
  const { firstName, lastName, title, country } = formData
  return (
    <div className='App'>
      <h3>Add Student</h3>
      <form onSubmit={onSubmit}>
        <div>
          <input
            type='text'
            name='firstName'
            placeholder='First Name'
            value={firstName}
            onChange={onChange}
          />
        </div>
        <div>
          <input
            type='text'
            name='lastName'
            placeholder='Last Name'
            value={lastName}
            onChange={onChange}
          />
        </div>
        <div>
          <input
            type='text'
            name='country'
            placeholder='Country'
            value={country}
            onChange={onChange}
          />
        </div>
        <div>
          <input
            type='text'
            name='title'
            placeholder='Title'
            value={title}
            onChange={onChange}
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

### 从不同类型的 input 中获取数据

如果 input 元素的类型不一样，我们要如何获取对应的值呢？

```js
// index.js
import React, { useState } from 'react'
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
  <option key={label} value={value}>
    {' '}
    {label}
  </option>
))

const App = (props) => {
  const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    title: '',
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
  const [formData, setFormData] = useState(initialState)

  const onChange = (e) => {
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
      setFormData({
        ...formData,
        skills: { ...formData.skills, [name]: checked },
      })
    } else if (type === 'file') {
      setFormData({ ...formData, [name]: e.target.files[0] })
    } else {
      setFormData({ ...formData, [name]: value })
    }
  }
  const onSubmit = (e) => {
    /*
     e.preventDefault()
     stops the default behavior of form element
     specifically refreshing of page
    */
    e.preventDefault()
    const {
      firstName,
      lastName,
      title,
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
    } = formData

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
      title,
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

  // accessing the state value by destrutcturing the state
  const {
    firstName,
    lastName,
    title,
    country,
    email,
    tel,
    dateOfBirth,
    favoriteColor,
    weight,
    gender,
    bio,
  } = formData
  return (
    <div className='App'>
      <h3>Add Student</h3>
      <form onSubmit={onSubmit}>
        <div className='row'>
          <div className='form-group'>
            <label htmlFor='firstName'>First Name </label>
            <input
              type='text'
              id='firstName'
              name='firstName'
              value={firstName}
              onChange={onChange}
              placeholder='First Name'
            />
          </div>
          <div className='form-group'>
            <label htmlFor='lastName'>Last Name </label>
            <input
              type='text'
              id='lastName'
              name='lastName'
              value={lastName}
              onChange={onChange}
              placeholder='Last Name'
            />
          </div>
          <div className='form-group'>
            <label htmlFor='title'>Title </label>
            <input
              type='text'
              id='title'
              name='title'
              placeholder='Title'
              value={title}
              onChange={onChange}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='email'>Email </label>
            <input
              type='email'
              id='email'
              name='email'
              value={email}
              onChange={onChange}
              placeholder='Email'
            />
          </div>
        </div>

        <div className='form-group'>
          <label htmlFor='tel'>Telephone </label>
          <input
            type='tel'
            id='tel'
            name='tel'
            value={tel}
            onChange={onChange}
            placeholder='Tel'
          />
        </div>

        <div className='form-group'>
          <label htmlFor='dateOfBirth'>Date of birth </label>
          <input
            type='date'
            id='dateOfBirth'
            name='dateOfBirth'
            value={dateOfBirth}
            onChange={onChange}
            placeholder='Date of Birth'
          />
        </div>
        <div className='form-group'>
          <label htmlFor='favoriteColor'>Favorite Color</label>
          <input
            type='color'
            id='color'
            name='favoriteColor'
            value={favoriteColor}
            onChange={onChange}
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
            onChange={onChange}
            placeholder='Weight in Kg'
          />
        </div>
        <div>
          <label htmlFor='country'>Country</label> <br />
          <select
            name='country'
            onChange={onChange}
            id='country'
            value={country}
          >
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
              onChange={onChange}
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
              onChange={onChange}
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
              onChange={onChange}
              checked={gender === 'Other'}
            />
            <label htmlFor='other'>Other</label>
          </div>
        </div>

        <div>
          <p>Select your skills</p>
          <div>
            <input type='checkbox' id='html' name='html' onChange={onChange} />
            <label htmlFor='html'>HTML</label>
          </div>
          <div>
            <input type='checkbox' id='css' name='css' onChange={onChange} />
            <label htmlFor='css'>CSS</label>
          </div>
          <div>
            <input
              type='checkbox'
              id='javascript'
              name='javascript'
              onChange={onChange}
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
            onChange={onChange}
            cols='120'
            rows='10'
            placeholder='Write about yourself ...'
          />
        </div>

        <div>
          <input type='file' name='file' onChange={onChange} />
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
```

### 表单验证

#### 什么是验证？

检查或证明本例数据中某些内容的有效性或准确性的行动或过程。

#### 验证的目的是什么

验证的主要目的是从用户那里获取所需的数据。此外，还可以防止恶意用户和数据。

#### 如何验证

```js
// index.js
import React, { useState } from 'react'
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
  <option key={label} value={value}>
    {' '}
    {label}
  </option>
))

const App = (props) => {
  const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    title: '',
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
    touched: {
      firstName: false,
      lastName: false,
    },
  }
  const [formData, setFormData] = useState(initialState)

  const onChange = (e) => {
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
      setFormData({
        ...formData,
        skills: { ...formData.skills, [name]: checked },
      })
    } else if (type === 'file') {
      setFormData({ ...formData, [name]: e.target.files[0] })
    } else {
      setFormData({ ...formData, [name]: value })
    }
  }
  const onSubmit = (e) => {
    /*
     e.preventDefault()
     stops the default behavior of form element
     specifically refreshing of page
    */
    e.preventDefault()
    const {
      firstName,
      lastName,
      title,
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
    } = formData

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
      title,
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
  const onBlur = (e) => {
    const { name } = e.target
    setFormData({ ...formData, touched: { ...formData.touched, [name]: true } })
  }
  const validate = () => {
    // Object to collect error feedback and to display on the form
    const errors = {
      firstName: '',
    }

    if (
      (formData.touched.firstName && formData.firstName.length < 3) ||
      (formData.touched.firstName && formData.firstName.length > 12)
    ) {
      errors.firstName = 'First name must be between 2 and 12'
    }
    return errors
  }

  // accessing the state value by destrutcturing the state
  const {
    firstName,
    lastName,
    title,
    country,
    email,
    tel,
    dateOfBirth,
    favoriteColor,
    weight,
    gender,
    bio,
  } = formData

  const errors = validate()

  return (
    <div className='App'>
      <h3>Add Student</h3>
      <form onSubmit={onSubmit}>
        <div className='row'>
          <div className='form-group'>
            <label htmlFor='firstName'>First Name </label>
            <input
              type='text'
              id='firstName'
              name='firstName'
              value={firstName}
              onChange={onChange}
              onBlur={onBlur}
              placeholder='First Name'
            />
            <br />
            {errors.firstName && <small>{errors.firstName}</small>}
          </div>
          <div className='form-group'>
            <label htmlFor='lastName'>Last Name </label>
            <input
              type='text'
              id='lastName'
              name='lastName'
              value={lastName}
              onChange={onChange}
              placeholder='Last Name'
            />
          </div>
          <div className='form-group'>
            <label htmlFor='title'>Title </label>
            <input
              type='text'
              id='title'
              name='title'
              placeholder='Title'
              value={title}
              onChange={onChange}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='email'>Email </label>
            <input
              type='email'
              id='email'
              name='email'
              value={email}
              onChange={onChange}
              placeholder='Email'
            />
          </div>
        </div>

        <div className='form-group'>
          <label htmlFor='tel'>Telephone </label>
          <input
            type='tel'
            id='tel'
            name='tel'
            value={tel}
            onChange={onChange}
            placeholder='Tel'
          />
        </div>

        <div className='form-group'>
          <label htmlFor='dateOfBirth'>Date of birth </label>
          <input
            type='date'
            id='dateOfBirth'
            name='dateOfBirth'
            value={dateOfBirth}
            onChange={onChange}
            placeholder='Date of Birth'
          />
        </div>
        <div className='form-group'>
          <label htmlFor='favoriteColor'>Favorite Color</label>
          <input
            type='color'
            id='color'
            name='favoriteColor'
            value={favoriteColor}
            onChange={onChange}
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
            onChange={onChange}
            placeholder='Weight in Kg'
          />
        </div>
        <div>
          <label htmlFor='country'>Country</label> <br />
          <select
            name='country'
            onChange={onChange}
            id='country'
            value={country}
          >
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
              onChange={onChange}
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
              onChange={onChange}
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
              onChange={onChange}
              checked={gender === 'Other'}
            />
            <label htmlFor='other'>Other</label>
          </div>
        </div>

        <div>
          <p>Select your skills</p>
          <div>
            <input type='checkbox' id='html' name='html' onChange={onChange} />
            <label htmlFor='html'>HTML</label>
          </div>
          <div>
            <input type='checkbox' id='css' name='css' onChange={onChange} />
            <label htmlFor='css'>CSS</label>
          </div>
          <div>
            <input
              type='checkbox'
              id='javascript'
              name='javascript'
              onChange={onChange}
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
            onChange={onChange}
            cols='120'
            rows='10'
            placeholder='Write about yourself ...'
          />
        </div>

        <div>
          <input type='file' name='file' onChange={onChange} />
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
```