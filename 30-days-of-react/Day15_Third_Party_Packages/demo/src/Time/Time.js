import React from 'react'
import moment from 'moment'

const Time = () => {
  return (
    <div className='App'>
      <h1>How to use moment</h1>
      <p>This challenge was started {moment('2020-10-01').fromNow()}</p>
      <p>The challenge will be over in {moment('2020-10-30').fromNow()}</p>
      <p>Today is {moment(new Date()).format('MMMM DD, YYYY HH:mm')}</p>
    </div>
  )
}

export default Time