import { motion } from 'framer-motion'
import html from '../assets/icons/html.png';
import css from '../assets/icons/css.png'
import js from '../assets/icons/js.png'
import react from '../assets/icons/react.png'
import git from '../assets/icons/git.png'

export const MyStack = () => {

    
  return (
    <div className="mt-10 md:mt-0 md:p-10 technologies min-h-screen overflow-hidden flex flex-col justify-center">
      <h1 className="text-center text-4xl md:text-8xl uppercase text-white font-bold primary">
        TECHNOLOGIES
      </h1>
      <motion.div className='mt-8 flex md:gap-24 md:px-24 flex-col md:flex-row align-center gap-8'>
        <div className='html tech'>
            <img src={html} alt="" />
        </div>
        <div className="css tech">
            <img src = {css} alt = '' />
        </div>
        <div className="js tech">
            <img src = {js} alt = '' />
        </div>
        <div className="react tech">
            <img src = {react} alt = '' />
        </div>
        <div className='git tech'>
            <img src={git} alt="" />
        </div>
      </motion.div>
    </div>
  )
}
