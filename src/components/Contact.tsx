import { motion } from 'framer-motion'

export const Contact = () => {
  return (
    <motion.div className="contact min-h-screen items-center flex justify-center flex-col">
      <h1 className="text-center text-5xl md:text-8xl uppercase text-white font-bold primary">
        Hello
      </h1>
      <form action = "mailto:jeremiahlena13@gmail.com?subject=Jeremiah&body=Howareyou">
          <button type="submit">submit</button>
      </form>
    </motion.div>
  )
}
