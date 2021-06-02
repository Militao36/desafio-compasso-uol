import { v4 } from 'uuid'
import { CityRepository } from '../../../src/repositories/city'
import { CityService } from '../../../src/services/city'

describe('City Service ', () => {
  let cityService: CityService
  const uuid = v4()
  let city: any

  beforeAll(() => {
    cityService = new CityService(new CityRepository())
    city = {
      uuid,
      name: 'Viçosa',
      state: 'MG'
    }
  })

  test('save city', async () => {
    expect(await cityService.save(city)).toBe(undefined)
  })

  test('find city by name', async () => {
    expect(await cityService.findByName(city.name)).toMatchObject(city)
  })

  test('find city by state', async () => {
    const citys = await cityService.findByState(city.state)
    expect(Array.isArray(citys)).toBe(true)
  })

  test('failed save city, already exists', async () => {
    expect.assertions(1)
    try {
      await cityService.save(city)
    } catch (e) {
      expect(e.message).toBe('CITY_ALREADY_EXISTS')
    }
  })

  test('city search by name, not found ', async () => {
    expect.assertions(1)
    try {
      await cityService.findByName('CITY')
    } catch (e) {
      expect(e.message).toBe('CITY_NOT_FOUND')
    }
  })

  test('city search by state, not found ', async () => {
    expect.assertions(1)
    try {
      await cityService.findByState('STATE')
    } catch (e) {
      expect(e.message).toBe('CITY_NOT_FOUND')
    }
  })
})
