import { CityEntity } from '../../../src/entities/City'

describe('City Entity ', () => {
  test('city ​​entity test', () => {
    const city = { name: 'Viçosa', state: 'MG' }
    const cityEntity = new CityEntity(city)
    expect(cityEntity.city).toMatchObject(city)
  })

  test('city ​​entity test in error', () => {
    try {
      const cityEntity = new CityEntity({ name: '', state: 'MGs' })
    } catch (e) {
      expect(e.message).toBe('VALIDATE_FAILED')
    }
  })
})
