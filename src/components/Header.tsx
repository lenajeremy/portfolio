import React from 'react'
import { Link } from 'react-router-dom'

import {motion, useViewportScroll} from 'framer-motion'

export const Header: React.FC = () => {
    const { scrollY } = useViewportScroll()

  return (
    <React.Fragment>
      <header className="header flex md:py-16 justify-between md:px-32 p-10">
        <Link to="/">
          <div className="header__logo text-green-400 text-2xl font-bold pointer">
            <span className="header__letter logo-j1">J</span>
            <span className="header__letter logo-e1">E</span>
            <span className="header__letter logo-r1">R</span>
            <span className="header__letter logo-e2">E</span>
            <span className="header__letter logo-m1">M</span>
            <span className="header__letter logo-i1">I</span>
            <span className="header__letter logo-a1">A</span>
            <span className="header__letter logo-h1">H</span>
            <span className="header__letter logo-p">.</span>
          </div>
        </Link>
        <div className="header__nav hidden md:block">
          <ul className="flex space-x-10 text-lg align-center">
            <li className="header__navitem--active text-green-500 font-bold">
              <a href="/">Home</a>
            </li>
            <li className="header__navitem">
              <a href="/">About</a>
            </li>
            <li className="header__navitem">
              <a href="/">Projects</a>
            </li>
            <li className="header__navitem text-white bg-green-400 px-3 py-1 hover:bg-green-50 hover:text-green-500 rounded-full font-bold tracking-wide uppercase">
              <a href="/">Contact</a>
            </li>
          </ul>
        </div>
      </header>
    </React.Fragment>
  )
}
