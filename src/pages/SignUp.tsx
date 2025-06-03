import { useEffect, useState } from 'react'
import { z } from 'zod'
import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'
import { Label } from '../components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select'
import { Link } from 'react-router'
import { motion } from 'motion/react'
import { getSecurityAwnser, postCreateUser } from '../api/sdk.gen'
import type {
  GetSecurityAwnserResponse,
  PostCreateUserData,
} from '../api/types.gen'

// Schema para validação da página 1
const userDataSchema = z.object({
  name: z.string().min(3, 'Username deve ter pelo menos 3 caracteres'),
  displayName: z.string().optional(),
  password: z.string().min(8, 'Password deve ter pelo menos 8 caracteres'),
})

// Schema para validação das respostas de segurança
const securityAnswerSchema = z.object({
  questionId: z.number().min(1, 'Selecione uma questão'),
  answer: z.string().min(1, 'Resposta é obrigatória'),
})

const securityAnswersSchema = z
  .array(securityAnswerSchema)
  .length(3, 'Exatamente 3 questões devem ser respondidas')
  .refine(
    (answers) => {
      const questionIds = answers.map((a) => a.questionId)
      return new Set(questionIds).size === questionIds.length
    },
    { message: 'Todas as questões devem ser únicas' }
  )

type UserData = z.infer<typeof userDataSchema>
type SecurityAnswer = z.infer<typeof securityAnswerSchema>

export default function SignUp() {
  const [step, setStep] = useState<1 | 2>(1)

  // Estado da página 1
  const [userData, setUserData] = useState<UserData>({
    name: '',
    displayName: '',
    password: '',
  })
  const [userErrors, setUserErrors] = useState<
    Partial<Record<keyof UserData, string>>
  >({})

  // Estado da página 2
  const [securityQuestions, setSecurityQuestions] = useState<
    Array<{ id: number; question: string }>
  >([])
  const [securityAnswers, setSecurityAnswers] = useState<SecurityAnswer[]>([
    { questionId: 0, answer: '' },
    { questionId: 0, answer: '' },
    { questionId: 0, answer: '' },
  ])
  const [securityErrors, setSecurityErrors] = useState<string | null>(null)

  // Estados de loading e feedback
  const [loadingQuestions, setLoadingQuestions] = useState(false)
  const [loadingSubmit, setLoadingSubmit] = useState(false)
  const [submitMessage, setSubmitMessage] = useState<string | null>(null)

  // Validação da página 1 em tempo real
  useEffect(() => {
    try {
      userDataSchema.parse(userData)
      setUserErrors({})
    } catch (error) {
      if (error instanceof z.ZodError) {
        const errors: Partial<Record<keyof UserData, string>> = {}
        error.errors.forEach((err) => {
          if (err.path[0]) {
            errors[err.path[0] as keyof UserData] = err.message
          }
        })
        setUserErrors(errors)
      }
    }
  }, [userData])

  // Validação da página 2 em tempo real
  useEffect(() => {
    try {
      securityAnswersSchema.parse(securityAnswers)
      setSecurityErrors(null)
    } catch (error) {
      if (error instanceof z.ZodError) {
        setSecurityErrors(error.errors.map((err) => err.message).join(', '))
      }
    }
  }, [securityAnswers])

  // Buscar questões de segurança ao entrar na página 2
  useEffect(() => {
    if (step === 2 && securityQuestions.length === 0) {
      setLoadingQuestions(true)
      getSecurityAwnser()
        .then((response) => {
          const data = response.data as GetSecurityAwnserResponse
          setSecurityQuestions(data.securityQuestions)
        })
        .catch((error) => {
          console.error('Erro ao buscar questões de segurança:', error)
          setSecurityQuestions([])
        })
        .finally(() => {
          setLoadingQuestions(false)
        })
    }
  }, [step, securityQuestions.length])

  const handleUserDataChange = (field: keyof UserData, value: string) => {
    setUserData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSecurityAnswerChange = (
    index: number,
    field: keyof SecurityAnswer,
    value: string | number
  ) => {
    setSecurityAnswers((prev) => {
      const newAnswers = [...prev]
      newAnswers[index] = { ...newAnswers[index], [field]: value }
      return newAnswers
    })
  }

  const handleNext = () => {
    if (Object.keys(userErrors).length === 0) {
      setStep(2)
    }
  }

  const handleBack = () => {
    setStep(1)
  }

  const handleSubmit = async () => {
    try {
      // Validar dados antes do envio
      userDataSchema.parse(userData)
      securityAnswersSchema.parse(securityAnswers)

      setLoadingSubmit(true)

      const createUserData: PostCreateUserData = {
        body: {
          name: userData.name,
          password: userData.password,
          displayName: userData.displayName || undefined,
          securityAnswers: [
            securityAnswers[0],
            securityAnswers[1],
            securityAnswers[2],
          ] as [SecurityAnswer, SecurityAnswer, SecurityAnswer],
        },
        url: '/create-user',
      }

      await postCreateUser(createUserData)
      setSubmitMessage('Usuário criado com sucesso!')
    } catch (error) {
      console.error('Erro ao criar usuário:', error)
      setSubmitMessage('Erro ao criar usuário. Tente novamente.')
    } finally {
      setLoadingSubmit(false)
    }
  }

  // Função para obter questões disponíveis para cada select
  const getAvailableQuestions = (currentIndex: number) => {
    const selectedQuestionIds = securityAnswers
      .map((answer, index) => (index !== currentIndex ? answer.questionId : 0))
      .filter((id) => id > 0)

    return securityQuestions.filter((q) => !selectedQuestionIds.includes(q.id))
  }

  const isStep1Valid =
    Object.keys(userErrors).length === 0 && userData.name && userData.password

  const isStep2Valid =
    !securityErrors &&
    securityAnswers.every(
      (answer) => answer.questionId > 0 && answer.answer.trim()
    )

  if (step === 1) {
    return (
      <div className="flex flex-col space-y-2">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.325, delay: 0 }}
          className="text-2xl font-semibold"
        >
          Sign Up - Dados do Usuário
        </motion.h1>

        <Link to={'/sign-in'} replace>
          <motion.span
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.325, delay: 0.1 }}
            className="text-blue-500"
          >
            Already have an account?
          </motion.span>
        </Link>

        <div className="mt-8 space-y-8">
          <div>
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.325, delay: 0.2 }}
            >
              <Label htmlFor="username" className="mb-4">
                Username
              </Label>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.325, delay: 0.3 }}
            >
              <Input
                id="username"
                type="text"
                placeholder="Username"
                value={userData.name}
                onChange={(e) => handleUserDataChange('name', e.target.value)}
              />
              {userErrors.name && (
                <p className="text-red-500 text-sm mt-1">{userErrors.name}</p>
              )}
            </motion.div>
          </div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.325, delay: 0.4 }}
            >
              <Label htmlFor="displayName" className="mb-4">
                Display Name <span className="text-zinc-500">(Optional)</span>
              </Label>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.325, delay: 0.5 }}
            >
              <Input
                id="displayName"
                type="text"
                placeholder="Display Name"
                value={userData.displayName}
                onChange={(e) =>
                  handleUserDataChange('displayName', e.target.value)
                }
              />
              {userErrors.displayName && (
                <p className="text-red-500 text-sm mt-1">
                  {userErrors.displayName}
                </p>
              )}
            </motion.div>
          </div>

          <div className="space-y-2">
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.325, delay: 0.6 }}
            >
              <Label htmlFor="password" className="mb-4">
                Password
              </Label>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.325, delay: 0.7 }}
            >
              <Input
                id="password"
                type="password"
                placeholder="Password"
                value={userData.password}
                onChange={(e) =>
                  handleUserDataChange('password', e.target.value)
                }
              />
              {userErrors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {userErrors.password}
                </p>
              )}
            </motion.div>
          </div>

          <div className="flex flex-row-reverse justify-between">
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.325, delay: 0.8 }}
            >
              <Button
                variant={'default'}
                onClick={handleNext}
                disabled={!isStep1Valid}
              >
                Próximo
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    )
  }

  // Página 2 - Questões de Segurança
  return (
    <div className="flex flex-col space-y-2">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.325, delay: 0 }}
        className="text-2xl font-semibold"
      >
        Sign Up - Questões de Segurança
      </motion.h1>

      <div className="mt-8 space-y-8">
        {loadingQuestions ? (
          <p>Carregando questões...</p>
        ) : (
          securityAnswers.map((answer, index) => (
            <div key={index} className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.325, delay: 0.2 + index * 0.1 }}
              >
                <Label className="mb-4">Questão de Segurança {index + 1}</Label>
                <Select
                  value={answer.questionId.toString()}
                  onValueChange={(value) =>
                    handleSecurityAnswerChange(
                      index,
                      'questionId',
                      parseInt(value)
                    )
                  }
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Selecione uma questão" />
                  </SelectTrigger>
                  <SelectContent>
                    {getAvailableQuestions(index).map((question) => (
                      <SelectItem
                        key={question.id}
                        value={question.id.toString()}
                      >
                        {question.question}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.325, delay: 0.3 + index * 0.1 }}
              >
                <Label className="mb-2">Resposta {index + 1}</Label>
                <Input
                  type="text"
                  placeholder="Digite sua resposta"
                  value={answer.answer}
                  onChange={(e) =>
                    handleSecurityAnswerChange(index, 'answer', e.target.value)
                  }
                />
              </motion.div>
            </div>
          ))
        )}

        {securityErrors && (
          <p className="text-red-500 text-sm">{securityErrors}</p>
        )}

        {submitMessage && (
          <p
            className={`text-sm ${
              submitMessage.includes('sucesso')
                ? 'text-green-500'
                : 'text-red-500'
            }`}
          >
            {submitMessage}
          </p>
        )}

        <div className="flex justify-between">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.325, delay: 0.8 }}
          >
            <Button variant="outline" onClick={handleBack}>
              Voltar
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.325, delay: 0.8 }}
          >
            <Button
              variant="default"
              onClick={handleSubmit}
              disabled={!isStep2Valid || loadingSubmit}
            >
              {loadingSubmit ? 'Criando...' : 'Criar Conta'}
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
