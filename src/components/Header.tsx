import React from 'react'
import { Link } from 'react-router-dom'

import {
  motion,
  useTransform,
  useViewportScroll,
} from 'framer-motion'

export const Header: React.FC = () => {
  const { scrollY } = useViewportScroll()

  const width = useTransform(scrollY, [0, 100], [30, 0])
  const opacity = useTransform(scrollY, [0, 100], [1, 0])
  const scale = useTransform(scrollY, [30, 100], [1, 2])
  const translateX = useTransform(scale, value => (value - 1)  * 48)

  return (
    <React.Fragment>
      <header className="header flex md:py-8 justify-between md:px-32 p-10">
        <Link to="/">
          <motion.div
            style={{ scale, x: translateX }}
            className="header__logo text-green-400 text-2xl font-bold pointer"
          >
            <motion.span className="logo-j1" whileHover={{ y: -5 }}>
              J
            </motion.span>
            <motion.span
              whileHover={{ y: -5 }}
              style={{ width, opacity }}
              className="header__letter logo-e1"
            >
              E
            </motion.span>
            <motion.span
              whileHover={{ y: -5 }}
              style={{ width, opacity }}
              className="header__letter logo-r1"
            >
              R
            </motion.span>
            <motion.span
              whileHover={{ y: -5 }}
              style={{ width, opacity }}
              className="header__letter logo-e2"
            >
              E
            </motion.span>
            <motion.span
              whileHover={{ y: -5 }}
              style={{ width, opacity }}
              className="header__letter logo-m1"
            >
              M
            </motion.span>
            <motion.span
              whileHover={{ y: -5 }}
              style={{ width, opacity }}
              className="header__letter logo-i1"
            >
              I
            </motion.span>
            <motion.span
              whileHover={{ y: -5 }}
              style={{ width, opacity }}
              className="header__letter logo-a1"
            >
              A
            </motion.span>
            <motion.span
              whileHover={{ y: -5 }}
              style={{ width, opacity }}
              className="header__letter logo-h1"
            >
              H
            </motion.span>
            <motion.span className="logo-p">.</motion.span>
          </motion.div>
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
            <li className="header__navitem text-white bg-green-400 px-3 py-1 hover:bg-green-200 hover:text-green-500 rounded-full font-bold tracking-wide uppercase">
              <motion.a href="/" whileTap={{scale: 0.9, rotate: -3}} whileHover={{scale: 1.1}}>Contact</motion.a>
            </li>
          </ul>
        </div>
      </header>
    </React.Fragment>
  )
}
