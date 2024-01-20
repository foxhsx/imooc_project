import { useState } from 'react';
import Main from './Main';
import Rectangle from './Rectangle';

function App() {
  const [firstName, setFirstName] = useState('');
  const [message, setMessage] = useState('');

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

  const handleSubmit = () => {
    setMessage('click submit')
  }

  return (
    <div>
        <Main />
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
              value={firstName}
            />
          </div>

          <div>
            <input type='submit' value='Submit' />
          </div>
        </form>
        <Rectangle />
      </div>
  )
}

export default App;
