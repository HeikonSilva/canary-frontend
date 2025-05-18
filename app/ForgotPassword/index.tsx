import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { motion } from 'motion/react'
import { Link } from 'react-router'

export default function ForgotPassord() {
  return (
    <div className="flex flex-col space-y-2">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.325, delay: 0 }}
        className="text-2xl font-semibold"
      >
        Password Reset
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
        <div className="flex flex-row-reverse justify-between">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.325, delay: 0.4 }}
          >
            <Button variant={'default'}>Reset Password</Button>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
