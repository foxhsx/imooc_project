import React from 'react'
import ReactDOM from 'react-dom'
import Cat from './Cats'
import './cat.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Cat />
  </React.StrictMode>
)