import { NextFunction, Request, Response } from 'express'
import { CustomerEntity } from '../entities/Customer'
import { customerService } from '../services'

class CustomerController {
  async save (request: Request, response: Response, next: NextFunction) {
    try {
      const { customer } = new CustomerEntity(request.body)

      await customerService.save(customer)
      return response.status(201).json({
        uuid: customer.uuid
      })
    } catch (err) {
      return next(err)
    }
  }

  async findByName (request: Request, response: Response, next: NextFunction) {
    try {
      const { name } = request.params

      if (!name) {
        return response.status(404).send()
      }

      const customer = await customerService.findByName(name)
      return response.status(200).json(customer)
    } catch (err) {
      return next(err)
    }
  }

  async findById (request: Request, response: Response, next: NextFunction) {
    try {
      const { uuid } = request.params
      if (!uuid) {
        return response.status(404).send()
      }

      const customer = await customerService.findById(uuid)
      return response.status(200).json(customer)
    } catch (err) {
      return next(err)
    }
  }

  async delete (request: Request, response: Response, next: NextFunction) {
    try {
      const { uuid } = request.params
      if (!uuid) {
        return response.status(404).send()
      }
      await customerService.delete(uuid)
      return response.status(204).send()
    } catch (err) {
      return next(err)
    }
  }

  async updateName (request: Request, response: Response, next: NextFunction) {
    try {
      const { uuid } = request.params
      const { name } = request.body

      if (!uuid || !name) {
        return response.status(404).send()
      }

      await customerService.updateName(uuid, name)
      return response.status(204).send()
    } catch (err) {
      return next(err)
    }
  }
}
export { CustomerController }
