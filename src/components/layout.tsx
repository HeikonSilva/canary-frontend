import { motion } from 'motion/react'
import { Outlet } from 'react-router'
import Canary from './ui/logo'

export default function Layout() {
  return (
    <div className="h-screen w-screen p-4">
      <motion.div
        initial={{ opacity: 0, y: -50, scale: 1.05 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ type: 'spring', stiffness: 80 }}
        className="flex flex-col justify-center w-full h-full rounded-2xl border-zinc-200 border-2 shadow-2xl"
      >
        <div className="w-full flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.325, delay: 0.2 }}
            className="p-2 flex flex-row gap-2"
          >
            <Canary className="fill-blue-500" height={36} width={36} />
            <h1 className="font-semibold text-2xl select-none">canary</h1>
          </motion.div>
        </div>
        <div className="w-full h-full overflow-y-hidden">
          <Outlet />
        </div>
      </motion.div>
    </div>
  )
}
