import { useContext } from 'react'
import { ShowMenuContext } from '../ctxs/ShowMenu'
import { AnimatePresence, motion, useCycle, Variants } from 'framer-motion'
import ReactDOM from 'react-dom'
import { BrowserRouter, Link } from 'react-router-dom'
import '../portfolio.css'

const Menu: React.FC = () => {
  const { showMenu: toShow, toggleMenu } = useContext(ShowMenuContext)

  const navItemVariant: Variants = {
    initial: {
      opacity: 0,
      y: -20,
    },
    in: {
      opacity: 1,
      y: 0,
      transition: { delay: 0.7, duration: 0.4, ease: 'easeOut' },
    },
    out: {
      opacity: 0,
      y: 50,
    },
  }

  return ReactDOM.createPortal(
    <BrowserRouter>
      <AnimatePresence>
        {toShow && (
          <div className="fixed z-50 h-screen w-screen flex">
            {Array(4)
              .fill(0)
              .map((_, i) => (
                <motion.div
                  key={i}
                  style={{ backgroundColor: 'rgb(16 16 16)', width: '25%' }}
                  initial={{ height: 0 }}
                  animate={{
                    height: '100%',
                    transition: { delay: i * 0.2, duration: 0.4 },
                  }}
                  exit={{
                    height: 0,
                    transition: {
                      delay: (3 - i) * 0.3,
                      duration: 0.35,
                      when: 'beforeChildren',
                    },
                  }}
                ></motion.div>
              ))}

            <motion.div
              className="menuContent text-center absolute w-full h-full md:px-28 py-14"
              variants={navItemVariant}
              initial="initial"
              animate="in"
              exit="out"
            >

              <div className="flex w-full h-full items-center justify-center">
                <nav className="text-white">
                  <ul className="space-y-20">
                    <motion.li animate = {{y: 20, transition: {delay: 0.2}}} className="text-4xl uppercase tracking-wide">
                      <Link to="/">Home</Link>
                    </motion.li>
                    <motion.li animate = {{y: 20, transition: {delay: 0.4}}} className="text-4xl">
                      <Link to="/">Projects</Link>
                    </motion.li>
                    <motion.li animate = {{y: 20, transition: {delay: 0.6}}} className="text-4xl">
                      <Link to="/">Contact</Link>
                    </motion.li>
                  </ul>
                </nav>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </BrowserRouter>,
    document.getElementById('menu') as Element,
  )
}

export { Menu }

// const CloseMenu: React.FC<{ toggleMenu: any }> = ({ toggleMenu }) => {
//   return (
//     <motion.div className="breadcrumbs flex flex-col" onClick={toggleMenu}>
//       <motion.div
//         className="line"
//         initial={{ rotate: 0 }}
//         animate={{ backgroundColor: 'white', rotate: '-45deg' }}
//         exit={{ rotate: 0 }}
//       ></motion.div>
//       <motion.div
//         className="line"
//         initial={{ rotate: 0 }}
//         animate={{ backgroundColor: 'white', rotate: '45deg' }}
//         exit={{ rotate: 0 }}
//       ></motion.div>
//     </motion.div>
//   )
// }
