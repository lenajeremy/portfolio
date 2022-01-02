import { motion } from 'framer-motion'
import html from '../assets/icons/html.png';
import css from '../assets/icons/css.png'
import js from '../assets/icons/js.png'
import react from '../assets/icons/react.png'
import git from '../assets/icons/git.png'

export const MyStack = () => {

    
  return (
    <div className="md:p-10 technologies h-screen overflow-hidden flex flex-col justify-center">
      <h1 className="text-right text-8xl uppercase text-white font-bold primary">
        TECHNOLOGIES
      </h1>
      <motion.div className='flex gap-10'>
        <div className='html'>
            <img src={html} alt="" />
        </div>
        <div className="css">
            <img src = {css} alt = '' />
        </div>
        <div className="js">
            <img src = {js} alt = '' />
        </div>
        <div className="react">
            <img src = {react} alt = '' />
        </div>
        <div className='git'>
            <img src={git} alt="" />
        </div>
      </motion.div>
    </div>
  )
}
