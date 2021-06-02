import { v4 } from 'uuid'
import Joi, { ValidationError } from 'joi'
import { formatErrosJoi } from '../utils/formatErrosJoi'
import { ValidationFailedExeption } from '../Exeptions/ValidationFailedExeption'

class CityEntity {
  private readonly uuid: string;

  private name: string;
  private state: string;

  constructor (props: Omit<CityEntity, 'uuid' | 'isValid' | 'city'>, uuid?: string) {
    Object.assign(this, props)

    if (!uuid) {
      this.uuid = v4()
    }

    this.isValid()
  }

  private isValid () {
    const schema = Joi.object({
      uuid: Joi.string().uuid({ version: 'uuidv4' }),
      name: Joi.string().required().max(50),
      state: Joi.string().required().max(2)
    })

    const { error } = schema.validate(this.city, {
      abortEarly: false,
      messages: {
        'string.max': 'O campo está ultrapassando o tamanho permitido',
        'string.empty': 'Este campo não pode fica vazio.'
      }
    })

    const erros = formatErrosJoi(error)

    if (erros) {
      throw new ValidationFailedExeption('VALIDATE_FAILED', erros)
    }
  }

  get city () {
    return {
      uuid: this.uuid,
      name: this.name,
      state: this.state
    }
  }
}

export { CityEntity }
