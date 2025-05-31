import { Button } from '../components/ui/button'
import Canary from '../components/ui/logo'
import { motion } from 'motion/react'
import { Link } from 'react-router'

export default function Landing() {
  return (
    <div className="p-4 gap-4 flex flex-col min-h-screen">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.325 }}
        className="flex flex-row justify-between"
      >
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.325, delay: 0.2 }}
          className="flex flex-row gap-2"
        >
          <Canary className="fill-blue-500" height={36} width={36} />
          <h1 className="font-semibold text-2xl select-none">canary</h1>
        </motion.div>
        <div className="flex flex-row gap-2">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              staggerChildren: 0.15,
              stiffness: 120,
              delay: 0.4,
              type: 'spring',
            }}
          >
            <Button variant={'ghost'}>Contact</Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              staggerChildren: 0.15,
              stiffness: 120,
              delay: 0.6,
              type: 'spring',
            }}
          >
            <Button variant={'ghost'}>Docs</Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              staggerChildren: 0.15,
              stiffness: 120,
              delay: 0.8,
              type: 'spring',
            }}
          >
            <Button variant={'ghost'}>Dashboard</Button>
          </motion.div>
          <Link to={'sign-up'}>
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                staggerChildren: 0.15,
                stiffness: 120,
                delay: 1.0,
                type: 'spring',
              }}
            >
              <Button variant={'ghost'}>Sign Up</Button>
            </motion.div>
          </Link>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -50, scale: 1.05 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ type: 'spring', stiffness: 80 }}
        className="shadow-xl rounded-2xl bg-radial-[at_50%_100%] from-sky-200 via-blue-400 to-indigo-900 to-90% w-full h-[calc(100vh-1rem-2rem-2.25rem)] flex flex-row"
      >
        <div className="w-1/2 h-full flex flex-col justify-center items-center gap-4">
          <div className="text-center text-white space-y-4 flex flex-col justify-center items-center ">
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.325, delay: 0.125 }}
            >
              <Canary className="fill-white" width={256} height={256} />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.325, delay: 0.325 }}
              className="text-8xl font-bold select-none tracking-[.1em]"
            >
              canary
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.325, delay: 0.525 }}
              className="text-2xl font-semibold select-none"
            >
              A message app that just works
            </motion.h2>
          </div>
          <div className="flex flex-row gap-2">
            <motion.div
              initial={{ opacity: 0, y: -25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.325, delay: 0.725 }}
            >
              <Button>Get Start</Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.325, delay: 0.925 }}
            >
              <Button variant={'outline'}>Learn More</Button>
            </motion.div>
          </div>
        </div>
        <div className="w-3/4 h-full flex flex-col gap-4 justify-center items-center">
          <motion.div
            initial={{ x: -80, y: -90, opacity: 0 }}
            animate={{ x: -80, y: -40, opacity: 1, rotateY: 12.5 }}
            transition={{ delay: 1.125, duration: 0.235 }}
          >
            <motion.div
              className="z-1 shadow-2xl bg-white aspect-video h-96 rounded-lg absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 1.025 }}
              transition={{ type: 'spring', stiffness: 80 }}
            >
              <img
                src="/vscode.png"
                className="pointer-events-none h-full w-full rounded-lg select-none"
              />
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ x: 80, y: -50, opacity: 0 }}
            animate={{ x: 80, y: 40, opacity: 1, rotateY: 12.5 }}
            transition={{ delay: 1.325, duration: 0.235 }}
          >
            <motion.div
              className="z-2 shadow-2xl bg-white aspect-video h-96 rounded-lg absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 1.025 }}
              transition={{ type: 'spring', stiffness: 80 }}
            >
              <img
                src="/vscode.png"
                className="pointer-events-none h-full w-full rounded-lg select-none"
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}
