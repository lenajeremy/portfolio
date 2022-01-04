import { motion } from 'framer-motion'
import html from '../assets/icons/html.png';
import css from '../assets/icons/css.png'
import js from '../assets/icons/js.png'
import react from '../assets/icons/react.png'
import git from '../assets/icons/git.png'

export const MyStack = () => {

    
  return (
    <div className="md:p-10 technologies h-screen overflow-hidden flex flex-col justify-center">
      <h1 className="text-center text-8xl uppercase text-white font-bold primary">
        TECHNOLOGIES
      </h1>
      <motion.div className='flex gap-24 px-24'>
        <div className='ht techml'>
            <img src={html} alt="" />
        </div>
        <div className="cs techs">
            <img src = {css} alt = '' />
        </div>
        <div className="js tech">
            <img src = {js} alt = '' />
        </div>
        <div className="re techact">
            <img src = {react} alt = '' />
        </div>
        <div className='gi techt'>
            <img src={git} alt="" />
        </div>
      </motion.div>
    </div>
  )
}
