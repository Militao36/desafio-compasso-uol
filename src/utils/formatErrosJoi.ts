import { ValidationError } from 'joi'

const formatErrosJoi = (erros: ValidationError) => {
  const messages = erros?.details.map(v => {
    return {
      [v.path as unknown as string]: v.message
    }
  })

  return messages ?? null
}

export { formatErrosJoi }
