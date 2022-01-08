import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

import {
  animate,
  motion,
  useTransform,
  useViewportScroll,
  useMotionValue,
} from 'framer-motion'

export const Header: React.FC<{openMenu?: any}> = ({openMenu}) => {
  const { scrollY } = useViewportScroll()

  const assumedScrollPositon = useMotionValue(0)
  const width = useTransform(assumedScrollPositon, [0, 150], [window.innerWidth <= 768 ? 20 : 30, 0])
  const opacity = useTransform(assumedScrollPositon, [0, 150], [1, 0])
  const scale = useTransform(assumedScrollPositon, [50, 150], [1, 2])

  useEffect(() => {

    scrollY.onChange((scrollPosition) => {

      if (scrollPosition >= 150) {
        animate(assumedScrollPositon, 150, {duration: 0.5})
      } else {
        animate(assumedScrollPositon, 0, {duration: 0.5})
      }

    })

    // return unsubscribe()
  }, [])
  return (
    <React.Fragment>
      <header className="header flex md:py-10 items-center justify-between uppercase md:px-28 px-6 py-10">
        <Link to="/">
          <motion.div
            style={{ scale }}
            className="header__logo text-green-400 text-2xl font-bold pointer"
          >
            <motion.span className="logo-j1" whileHover={{ y: -6 }}>
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
        {/* <div className="header__nav hidden md:block">
          <ul className="flex space-x-10 text-lg align-center">
            <li className="header__navitem--active text-green-500 font-bold">
              <a href="/">Home</a>
            </li>
            <li className="header__navitem">
              <a href="/">Projects</a>
            </li>
            <li className="header__navitem">
              <a href="/">Tech</a>
            </li>
            <li>
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <motion.path
                  fill = 'canvastext'
                  d="M12 10.999c1.437.438 2.562 1.564 2.999 3.001.44-1.437 1.565-2.562 3.001-3-1.436-.439-2.561-1.563-3.001-3-.437 1.436-1.562 2.561-2.999 2.999zm8.001.001c.958.293 1.707 1.042 2 2.001.291-.959 1.042-1.709 1.999-2.001-.957-.292-1.707-1.042-2-2-.293.958-1.042 1.708-1.999 2zm-1-9c-.437 1.437-1.563 2.562-2.998 3.001 1.438.44 2.561 1.564 3.001 3.002.437-1.438 1.563-2.563 2.996-3.002-1.433-.437-2.559-1.564-2.999-3.001zm-7.001 22c-6.617 0-12-5.383-12-12s5.383-12 12-12c1.894 0 3.63.497 5.37 1.179-2.948.504-9.37 3.266-9.37 10.821 0 7.454 5.917 10.208 9.37 10.821-1.5.846-3.476 1.179-5.37 1.179z"
                />
              </motion.svg>
            </li>
          </ul>
        </div> */}
        <motion.div className="breadcrumbs flex flex-col" onClick={() => openMenu && openMenu()}>
          <motion.div className="line" layoutId='headerLine1' ></motion.div>
          <motion.div className="line" layoutId = 'headerLine2'></motion.div>
        </motion.div>
      </header>
    </React.Fragment>
  )
}
