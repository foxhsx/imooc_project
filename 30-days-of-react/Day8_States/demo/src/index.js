// index.js
import React, { useCallback, useMemo, useState } from 'react'
import ReactDOM from 'react-dom'
// To get the root element from the HTML document
import day3Demo from './images/day3_demo.jpg'
import htmlImg from './images/day3_frontend_technologies.png'
import Subscribe from './Subscribe'
import UserCard from './UserCard'
import SelectCountry from './SelectCountry'
// JSX element, header
const welcome = 'Welcome to 30 Days Of React'
const title = 'Getting Started React'
const subtitle = 'JavaScript Library'
const author = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
}
const date = 'Oct 2, 2020'

// JSX element, header
const header = (
  <header>
    <div className='header-wrapper'>
      <h1>{welcome}</h1>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      <p>
        Instructor: {author.firstName} {author.lastName}
      </p>
      <small>Date: {date}</small>
    </div>
  </header>
)

const numOne = 3
const numTwo = 2

const result = (
  <p>
    {numOne} + {numTwo} = {numOne + numTwo}
  </p>
)

const yearBorn = 1820
const currentYear = new Date().getFullYear()
const age = currentYear - yearBorn
const personAge = (
  <p>
    {' '}
    {author.firstName} {author.lastName} is {age} years old
  </p>
)

// JSX element, main
const techs = ['HTML', 'CSS', 'JavaScript']
const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>)

const user = (
  <div>
    <picture>
      <img src={day3Demo} alt='' />
      <img src={htmlImg} width="300" alt='' />
    </picture>
  </div>
)

// JSX element, main
const Main = ({ appBgColor }) => {
  const textColor = useMemo(() => {
    if (appBgColor === '#111625') {
      return 'white'
    } else {
      return 'black'
    }
  }, [appBgColor])
  return (
    <main style={{ color: textColor }}>
      <Subscribe />
      <UserCard />
      <SelectCountry />
      <div className='main-wrapper'>
        <p>
          Prerequisite to get started{' '}
          <strong>
            <em>react.js</em>
          </strong>
          :
        </p>
        <ul>{techsFormatted}</ul>
        {result}
        {personAge}
        {user}
      </div>
    </main>
  )
}

const copyRight = 'Copyright 2020'

// JSX element, footer
const footer = (
  <footer>
    <div className='footer-wrapper'>
      <p>{copyRight}</p>
    </div>
  </footer>
)



// JSX element, app
const App = () => {
  const [backgroundColor, setBackgroundColor] = useState('white')

  const changeBackground = useCallback(() => {
    const bgColor = backgroundColor === 'white' ? '#111625' : 'white'
    setBackgroundColor(bgColor)
  }, [backgroundColor])

  return (
    <div className='app' style={{ backgroundColor }}>
      {header}
      <button style={{
        color: '#fff',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '3px',
        cursor: 'pointer',
        backgroundColor: '#61dbfb',
        margin: '30px',
      }} onClick={changeBackground}>change background</button>
      <Main appBgColor={backgroundColor} />
      {footer}
    </div>
  )
}

const rootElement = document.getElementById('root')
// we render the JSX element using the ReactDOM package
ReactDOM.render(<App />, rootElement)