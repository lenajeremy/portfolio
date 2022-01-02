import React, { useEffect } from 'react'
import me from '../assets/images/me.jpg'

import { motion } from 'framer-motion'

const Hero: React.FC = () => {
  useEffect(() => {}, [])

  return (
    <div className="hero grid md:grid-cols-2 gap-4 h-3/4 text-center md:text-left">
      <div className="absolute blurred-blob bg-green-300 rounded-full filter blur-3xl"></div>
      <div className="absolute blurred-blob rounded-full filter blur-3xl"></div>
      <div className="absolute blurred-blob rounded-full filter blur-3xl"></div>

      <div className="rounded items-center md:pl-32 w-full h-full space-y-4 md:pt-20 relative order-1 md:order-0">
        <h1 className="text-3xl md:text-5xl font-semibold md:font-bold">
          I'm Jeremiah Lena
        </h1>
        <h4 className="text-lg text-gray-700 leading-5 md:leading-10 mb-4">
          I'm a frontend developer. I enjoy building{' '}
          <span className="text-green-600 custom_underline primary">web</span>{' '}
          and mobile application with{' '}
          <span className="custom_underline text-green-600 primary">
            visually appealing
          </span>{' '}
          and{' '}
          <span className="custom_underline text-green-600 primary">
            interactive
          </span>{' '}
          user interfaces. I strongly believe that overrall user experience
          should be a priority when building applications.{' '}
        </h4>
        <div className="flex space-x-4 mt-5">
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
            className="border-green-500 hover:bg-green-500 hover:text-white border rounded-full bg-white text-green-500 tracking-wide px-5 py-2 font-bold"
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
