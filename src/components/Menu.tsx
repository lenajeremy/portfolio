// import { useContext } from 'react'
// import { ShowMenuContext } from '../ctxs/ShowMenu'
import { motion, useCycle, Variants } from 'framer-motion'
import ReactDOM from 'react-dom'
import { BrowserRouter, Link } from 'react-router-dom'

const Menu: React.FC = () => {
  const [toShow, setShow] = useCycle(false, false)

  const navItemVariant: Variants = {
    initial: {
      opacity: 0,
      y: -50,
    },
    in: {
      opacity: 1,
      y: 1,
      transition: { delay: 1.3, duration: 1, ease: 'easeOut' },
    },
    out: {
      opacity: 0,
      y: 50,
    },
  }

  return ReactDOM.createPortal(
    toShow ? (
      <BrowserRouter>
        <div className="fixed z-50 h-screen w-screen flex">
          {Array(3)
            .fill(0)
            .map((_, i) => (
              <motion.div
                key={i}
                style={{ backgroundColor: '#10b981', width: '33.3333%' }}
                initial={{ height: 0 }}
                animate={{
                  height: '100%',
                  transition: { delay: i * 0.4, duration: 0.5 },
                }}
              ></motion.div>
            ))}

          <motion.div
            className="menuContent text-center absolute w-full h-full md:px-32 my-10"
            variants={navItemVariant}
            initial="initial"
            animate="in"
            exit="out"
          >
            <h1 className="text-5xl font-bold text-white text-center">J.</h1>

            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/">Projects</Link>
                </li>
                <li>
                  <Link to="/">Contact</Link>
                </li>
              </ul>
            </nav>
          </motion.div>
        </div>
      </BrowserRouter>
    ) : null,
    document.getElementById('menu') as Element,
  )
}

export { Menu }
