import React, { useState } from 'react'
import { isEmail } from 'validator'

const Forms = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [country, setCountry] = useState('');
  const [email, setEmail] = useState('');
  const [validate, setValidate] = useState(null)

  const stateMap = {
    firstName: (value) => setFirstName(value),
    lastName: (value) => setLastName(value),
    country: (value) => setCountry(value),
    email: (value) => setEmail(value),
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    stateMap[name](value)
  }

  const firstNameValidator = (value) => {
    const length = value.length
    if (length < 2 || length > 12) {
      return 'first name must be between 2 and 12 characters in length.'
    }
    return null
  }

  const lastNameValidator = (value) => {
    const length = value.length
    if (length < 2 || length > 12) {
      return 'last name must be between 2 and 12 characters in length.'
    }
    return null
  }

  const emailValidator = (value) => {
    if (!isEmail(email)) {
      return 'Please enter a valid email address format.'
    }
    return null
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log({
      firstName,
      lastName,
      country,
      email
    })
    let validateResult = firstNameValidator(firstName) ||
      lastNameValidator(lastName) || emailValidator(email);
    console.log(validateResult, 'validateResult')
    setValidate(validateResult);
    if (validateResult) {
      return;
    }
  }

  console.log(validate, 'validate')

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
            name='email'
            placeholder='Email'
            value={email}
            onChange={handleChange}
          />
        </div>

        {validate && <p style={{ color: '#f90000' }}>{validate}</p>}

        <button className='btn btn-success'>Submit</button>
      </form>
    </div>
  )
}

export default Forms