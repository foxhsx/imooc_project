import React from 'react'
import './header.scss'
import headerStyles from './header.module.css'
const Header = () => (
  <header>
    <div className={headerStyles['header-wrapper']}>
      <h1>30 Days Of React</h1>
      <h2>Getting Started React</h2>
      <h3>JavaScript Library</h3>
      <p>Instructor: Asabeneh Yetayeh</p>
      <small>Oct 15, 2020</small>
    </div>
  </header>
)

export default Header