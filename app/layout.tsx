import { motion } from 'motion/react'
import { Outlet } from 'react-router'
import Canary from './components/ui/logo'

export default function Layout() {
  return (
    <div className="h-screen w-screen flex flex-col p-18 shadow-2xl">
      <div className="w-full h-18">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.325, delay: 0.2 }}
          className="flex flex-row p-2 gap-2 shadow-lg"
        >
          <Canary className="fill-blue-500" height={36} width={36} />
          <h1 className="font-semibold text-2xl select-none">canary</h1>
        </motion.div>
      </div>
      <div className="w-full h-full">
        <Outlet />
      </div>
    </div>
  )
}
