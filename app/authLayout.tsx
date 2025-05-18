import { Link, Outlet } from 'react-router'
import Canary from './components/ui/logo'
import { motion } from 'motion/react'

export default function AuthLayout() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50, scale: 1.05 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ type: 'spring', stiffness: 80 }}
      className="h-screen w-screen flex flex-row items-center justify-center"
    >
      <div className="shadow-2xl rounded-l-2xl w-1/3 h-3/4 bg-radial-[at_50%_100%] from-sky-200 via-blue-400 to-indigo-900 to-90%">
        <Link
          to={'/'}
          className="w-full h-full flex flex-col items-center justify-center"
        >
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.325, delay: 0.2 }}
          >
            <Canary className="fill-white" width={256} height={256} />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.325, delay: 0.4 }}
            className="text-white font-bold text-8xl tracking-[.1em]"
          >
            canary
          </motion.h1>
        </Link>
      </div>
      <div className="w-2/4 h-3/4 border-zinc-200 border-t-2 border-r-2 border-b-2 shadow-2xl rounded-r-2xl p-16">
        <Outlet />
      </div>
    </motion.div>
  )
}
