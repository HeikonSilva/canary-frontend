import { Button } from '@/components/ui/button'
import { motion } from 'motion/react'

export default function Landing() {
  return (
    <div className="p-4 gap-4 flex flex-col min-h-screen">
      <div className="flex flex-row justify-between">
        <div className="flex flex-row gap-2">
          <img src="/logo" />
          <h1 className="font-semibold text-2xl">canary</h1>
        </div>
        <div className="space-x-2">
          <Button variant={'ghost'}>Contact</Button>
          <Button variant={'ghost'}>Docs</Button>
          <Button variant={'ghost'}>Dashboard</Button>
          <Button variant={'ghost'}>Sign Up</Button>
        </div>
      </div>
      <div className="shadow-xl rounded-2xl bg-radial-[at_50%_100%] from-sky-200 via-blue-400 to-indigo-900 to-90% w-full h-[calc(100vh-1rem-2rem-2.25rem)] flex flex-row">
        <div className="w-1/2 h-full flex flex-col gap-4 justify-center items-center">
          <div className="text-center text-white space-y-4 ">
            <h1 className="text-8xl font-bold">canary</h1>
            <h2 className="text-2xl font-semibold">
              A message app that just works
            </h2>
          </div>
          <div className="space-x-4">
            <Button>Get Start</Button>
            <Button variant={'outline'}>Learn More</Button>
          </div>
        </div>
        <div className="w-3/4 h-full flex flex-col gap-4 justify-center items-center">
          <div className="flex flex-col gap-4 items-center relative h-[28rem] w-full">
            <motion.div
              className="z-1 shadow-2xl bg-white aspect-video h-96 rounded-lg absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              initial={{ x: 0, y: 0 }}
              animate={{ x: -80, y: -40, rotateY: 12.5 }}
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 100 }}
            >
              <img src="/vscode.png" className="h-full w-full rounded-lg" />
            </motion.div>
            <motion.div
              className="z-2 shadow-2xl bg-white aspect-video h-96 rounded-lg absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              initial={{ x: 0, y: 0 }}
              animate={{ x: 80, y: 40, rotateY: 12.5 }}
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 100 }}
            >
              {' '}
              <img src="/vscode.png" className="h-full w-full rounded-lg" />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
