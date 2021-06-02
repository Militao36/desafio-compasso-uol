import { v4 } from 'uuid'
import Joi from 'joi'
import { formatErrosJoi } from '../utils/formatErrosJoi'
import { ValidationFailedExeption } from '../Exeptions/ValidationFailedExeption'

class CustomerEntity {
  private readonly uuid: string;

  private name: string;
  private gender: string;
  private birthDate: string;
  private cityId: string;

  constructor (props: Omit<CustomerEntity, 'uuid' | 'isValid' | 'customer'>, uuid?: string) {
    Object.assign(this, props)

    if (!uuid) {
      this.uuid = v4()
    }
    this.isValid()
  }

  private isValid () {
    const schema = Joi.object({
      uuid: Joi.string().uuid({ version: 'uuidv4' }).required(),
      name: Joi.string().max(100).required(),
      gender: Joi.string().valid('M', 'F').required(),
      birthDate: Joi.date().required(),
      cityId: Joi.string().uuid({ version: 'uuidv4' }).required()
    })

    const { error } = schema.validate(this.customer, {
      abortEarly: false,
      messages: {
        'string.max': 'O campo está ultrapassando o tamanho permitido',
        'string.empty': 'Este campo não pode fica vazio.',
        'date.base': 'Data passada está em formato inválido',
        'any.only': 'Este campo aceita apenas M (masculino ) ou F (feminino).',
        'any.required': 'Este campo é obrigatório.'
      }
    })

    const erros = formatErrosJoi(error)

    if (erros) {
      throw new ValidationFailedExeption('VALIDATE_FAILED', erros)
    }
  }

  get customer () {
    return {
      uuid: this.uuid,
      name: this.name,
      gender: this.gender,
      birthDate: this.birthDate,
      cityId: this.cityId
    }
  }
}

export { CustomerEntity }
