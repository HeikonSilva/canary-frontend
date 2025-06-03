import { useState, useEffect } from 'react'
import { z } from 'zod'
import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'
import { Label } from '../components/ui/label'
import { Link } from 'react-router'
import { motion } from 'motion/react'
import { postLogin } from '../api/sdk.gen'
import type { PostLoginData } from '../api/types.gen'

// Schema para validação do login
const loginSchema = z.object({
  name: z.string().min(1, 'Nome de usuário é obrigatório'),
  password: z.string().min(1, 'Senha é obrigatória'),
})

type LoginData = z.infer<typeof loginSchema>

// Estado global para armazenar o token (pode ser movido para um contexto)
let accessToken: string | null = null

export const getAccessToken = () => accessToken
export const setAccessToken = (token: string | null) => {
  accessToken = token
}

export default function SignIn() {
  const [loginData, setLoginData] = useState<LoginData>({
    name: '',
    password: '',
  })

  const [errors, setErrors] = useState<
    Partial<Record<keyof LoginData, string>>
  >({})
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState<string | null>(null)

  // Validação em tempo real
  useEffect(() => {
    try {
      loginSchema.parse(loginData)
      setErrors({})
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Partial<Record<keyof LoginData, string>> = {}
        error.errors.forEach((err) => {
          if (err.path[0]) {
            newErrors[err.path[0] as keyof LoginData] = err.message
          }
        })
        setErrors(newErrors)
      }
    }
  }, [loginData])

  const handleInputChange = (field: keyof LoginData, value: string) => {
    setLoginData((prev) => ({ ...prev, [field]: value }))
    setMessage(null) // Limpa mensagens ao digitar
  }

  const handleSubmit = async () => {
    try {
      // Validar dados antes do envio
      loginSchema.parse(loginData)

      setLoading(true)
      setMessage(null)

      const loginRequest: PostLoginData = {
        body: {
          name: loginData.name,
          password: loginData.password,
        },
        url: '/login',
      }

      const response = await postLogin(loginRequest)

      // Assumindo que o token vem na resposta
      if (response.data && 'token' in response.data) {
        setAccessToken(response.data.token as string)
        setMessage('Login realizado com sucesso!')
        console.log('Token armazenado:', response.data.token)
      } else {
        setMessage('Login realizado, mas token não encontrado na resposta.')
      }
    } catch (error) {
      console.error('Erro ao fazer login:', error)
      setMessage('Erro ao fazer login. Verifique suas credenciais.')
    } finally {
      setLoading(false)
    }
  }

  const isFormValid =
    Object.keys(errors).length === 0 && loginData.name && loginData.password

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
      <Link to={'/sign-up'} replace>
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
            <Label htmlFor="name" className="mb-4">
              Username
            </Label>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.325, delay: 0.3 }}
          >
            <Input
              id="name"
              type="text"
              placeholder="Username"
              value={loginData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
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
            <Input
              id="password"
              type="password"
              placeholder="Password"
              value={loginData.password}
              onChange={(e) => handleInputChange('password', e.target.value)}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
          </motion.div>
          <Link to={'/forgot-password'} replace>
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

        {message && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.325, delay: 0.7 }}
          >
            <p
              className={`text-sm ${
                message.includes('sucesso') ? 'text-green-500' : 'text-red-500'
              }`}
            >
              {message}
            </p>
          </motion.div>
        )}

        <div className="flex flex-row-reverse justify-between">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.325, delay: 0.7 }}
          >
            <Button
              variant={'default'}
              onClick={handleSubmit}
              disabled={!isFormValid || loading}
            >
              {loading ? 'Fazendo login...' : 'Login'}
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
