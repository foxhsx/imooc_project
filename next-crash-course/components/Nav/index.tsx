import Link from 'next/link'
import React from 'react'
import navStyles from './index.module.css'

export const Nav = () => {
  return (
    <nav className={navStyles.nav}>
      <ul className='flex justify-center list-none items-center'>
        <li>
          <Link href='/'>Home</Link>
        </li>
        <li>
          <Link href='/about'>About</Link>
        </li>
      </ul>
    </nav>
  )
}