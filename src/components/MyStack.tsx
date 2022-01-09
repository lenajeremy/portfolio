import { motion } from 'framer-motion'
import html from '../assets/icons/html.png'
import css from '../assets/icons/css.png'
import js from '../assets/icons/js.png'
import react from '../assets/icons/react.png'
import git from '../assets/icons/git.png'

const AboutMe: React.FC = () => {
  return (
    <div className="pl-20 space-y-6 w-1/2">
      <p className="text-lg leading-8 md:leading-10">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi
        necessitatibus sint incidunt similique quaerat facilis quas ut voluptas
        aperiam tempore exercitationem quisquam veniam perspiciatis, ullam
        ratione quod temporibus sed qui.
      </p>
      <p className="text-lg leadinng-8 md:leading-10">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum unde
        odio iusto alias quia totam repudiandae vero suscipit perferendis
        dolorem?
      </p>

      <p className="text-lg leadinng-8 md:leading-10">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum unde
        odio iusto alias quia totam repudiandae vero suscipit perferendis
        dolorem? Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Asperiores, porro.
      </p>
    </div>
  )
}

const Technologies: React.FC = () => {
  const technologies = [
    'React',
    'React Native',
    'Firebase',
    'Framer Motion',
    'HTML5',
    'CSS3',
    'SCSS',
    'Responsive Design',
    'Javascript',
    'Git',
    'Redux',
    'NextJS',
    'Agile Development',
  ]

  return (
    <div className='flex flex-wrap w-1/2 stackContainer pr-10'>
      {technologies.map((tech) => (
        <p className='stack bg-green-800'>{tech}</p>
      ))}
    </div>
  )
}

export const MyStack = () => {
  return (
    <>
    <div className="mt-10 md:mt-0 md:p-10 technologies min-h-screen overflow-hidden flex flex-col justify-center">
      <h1 className="text-center text-4xl md:text-8xl uppercase text-white font-bold primary">
        SKILLS
      </h1>
      <div className="flex gap-10 my-10">
        <AboutMe />
        <Technologies />
      </div>
    </div>

    <div className='h-60 w-full items-center justify-center flex'>
      <button className='block text-3xl resumeDownload tracking-wide bg-green-800 px-16 py-10'>DOWNLOAD RESUME</button>
    </div>
    </>
  )
}
