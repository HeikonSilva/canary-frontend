import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Link } from 'react-router'
import { motion } from 'motion/react'

export default function SignIn() {
  return (
    <div className="flex flex-col space-y-2">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.325, delay: 0 }}
        className="text-2xl font-semibold"
      >
        Sign In
      </motion.h1>
      <Link to={'/signup'} replace>
        <motion.span
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.325, delay: 0.1 }}
          className="text-blue-500"
        >
          Dont have an account?
        </motion.span>
      </Link>

      <div className="mt-8 space-y-8">
        <div>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.325, delay: 0.2 }}
          >
            <Label htmlFor="email" className="mb-4">
              Email
            </Label>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.325, delay: 0.3 }}
          >
            <Input id="email" type="email" placeholder="Email" />
          </motion.div>
        </div>
        <div className="space-y-2">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.325, delay: 0.4 }}
          >
            <Label htmlFor="password" className="mb-4">
              Password
            </Label>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.325, delay: 0.5 }}
          >
            <Input id="password" type="password" placeholder="Password" />
          </motion.div>
          <Link to={'/forgotpassword'} replace>
            <motion.span
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.325, delay: 0.6 }}
              className="text-blue-500"
            >
              Have forgot your password?
            </motion.span>
          </Link>
        </div>
        <div className="flex flex-row-reverse justify-between">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.325, delay: 0.7 }}
          >
            <Button variant={'default'}>Login</Button>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
