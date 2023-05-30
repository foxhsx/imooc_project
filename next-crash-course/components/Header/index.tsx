import React from 'react'
import headerStyels from './index.module.css'

export const Header = () => {
  return (
    <header>
      <h1 className={`${headerStyels.title} text-center`}>
        <span>WebDev</span> News
      </h1>
      <p className='text-center'>keep up to date with the latest web dev news</p>
    </header>
  )
}
