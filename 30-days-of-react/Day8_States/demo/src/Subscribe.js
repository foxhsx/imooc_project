import React from 'react'

const Subscribe = () => {
  return (
    <div className="subscribe-wrapper">
      <h1>SUBSCRIBE</h1>
      <p>Sign up with your email address to receive news and updates.</p>
      <div className='input-wrapper'>
        <input placeholder='First name' type="text" />
        <input placeholder='Last name' type="text" />
        <input placeholder='email' type="email" />
      </div>
      <button>Subscribe</button>
    </div>
  )
}

export default Subscribe
