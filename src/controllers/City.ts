import { NextFunction, Request, Response } from 'express'
import { CityEntity } from '../entities/City'
import { cityService } from '../services'

class CityController {
  async save (request: Request, response: Response, next: NextFunction) {
    try {
      const { city } = new CityEntity(request.body)
      await cityService.save(city)
      return response.status(201).json({
        uuid: city.uuid
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

      const city = await cityService.findByName(name)
      return response.status(200).json(city)
    } catch (err) {
      return next(err)
    }
  }

  async findByState (request: Request, response: Response, next: NextFunction) {
    try {
      const { state } = request.params
      if (!state) {
        return response.status(404).send()
      }

      const city = await cityService.findByState(state)
      return response.status(200).json(city)
    } catch (err) {
      return next(err)
    }
  }
}

export { CityController }
