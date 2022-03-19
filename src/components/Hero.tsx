import React, { useEffect } from 'react'
import me from '../assets/images/me.jpg'

import { motion } from 'framer-motion'

const Hero: React.FC = () => {
  useEffect(() => {}, [])

  return (
    <div className="hero mt-10 md:mt-0 px-6 mb-20 md:md-0 grid md:grid-cols-2 gap-4 h-3/4 text-center md:text-left content-center">
      <div className="absolute blurred-blob rounded-full filter blur-3xl hidden"></div>
      <div className="absolute blurred-blob rounded-full filter blur-3xl hidden"></div>
      <div className="absolute blurred-blob rounded-full filter blur-3xl hidden"></div>

      <div className="rounded items-center md:pl-32 w-full h-full space-y-6 md:pt-16 relative order-1 md:order-0">
        <h1 className="text-3xl md:text-5xl font-semibold md:font-bold">
          I'm Jeremiah Lena
        </h1>
        <h4 className="md:text-lg text-gray-700 leading-8 md:leading-10 mb-4">
          I'm a Lagos-based software engineer who specialized in building{' '}
          <span className="text-green-600 custom_underline primary">web</span>{' '}
          and mobile applications with{' '}
          <span className="custom_underline text-green-600 primary">
            visually appealing
          </span>{' '}
          and{' '}
          <span className="custom_underline text-green-600 primary">
            interactive
          </span>{' '}
          user interfaces, paying close attention to{' '}
          <span className="custom_underline text-green-600 primary">
            detail
          </span>{' '}
          and prioritizing performance{' '}
        </h4>
        <div className="flex space-x-4 mt-5 justify-center md:justify-start md:justify-none">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9, rotate: -3 }}
            className="hover:bg-white hover:border-green-500 hover:text-green-500 rounded-full bg-green-500 border border-transparent text-white tracking-wide px-8 py-3 font-bold"
          >
            CONNECT
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9, rotate: -3 }}
            className="hover:bg-green-500 bg-white bg-opacity-30 text-green-500 hover:text-white hover:border-green-500 border border-green-300 md:border-white rounded-full bg-transparent tracking-wide px-5 py-2 font-bold"
          >
            See more...
          </motion.button>
        </div>
      </div>
      <div className="rounded relative p-18 w-full h-full order-1 md-order-0">
        <div className="rounded-xl relative shadow-2xl mx-auto myImageContainer">
          <img src={me} className="myImage" alt="jeremiah lena" />
        </div>
      </div>
    </div>
  )
}

export { Hero }
