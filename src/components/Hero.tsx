import React, { useEffect } from 'react'
import me from '../assets/images/me.jpg'

const Hero: React.FC = () => {
  useEffect(() => {}, [])

  return (
    <div className="hero grid md:grid-cols-2 gap-4 h-3/4 text-center md:text-left">
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
          <button className="hover:bg-white hover:border-green-500 hover:text-green-500 rounded-full bg-green-500 border border-transparent text-white tracking-wide px-8 py-3 font-bold">
            CONNECT
          </button>
          <button className="border-green-500 hover:bg-green-500 hover:text-white border rounded-full bg-white text-green-500 tracking-wide px-5 py-2 font-bold">
            See more...
          </button>
        </div>
      </div>
      <div className="rounded relative p-18 w-full h-full order-1 md-order-0">
        <div className="w-72 h-72 absolute bg-green-300 rounded-full mix-blend-multiply filter blur-xl"></div>
        <img
          src={me}
          className="rounded-xl relative shadow-xl mx-auto w-80 "
          alt="jeremiah lena"
        />
      </div>
    </div>
  )
}

export { Hero }
