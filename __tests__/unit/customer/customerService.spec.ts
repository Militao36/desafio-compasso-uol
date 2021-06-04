import { v4 } from 'uuid'
import { CustomerRepository } from '../../../src/repositories/customer'
import { CustomerService } from '../../../src/services/customer'
import { CityService } from '../../../src/services/city'
import { CityRepository } from '../../../src/repositories/city'

describe('City Service ', () => {
  let customerService: CustomerService
  let cityService: CityService

  const uuid = v4()
  let customer: any

  beforeAll(async () => {
    const cityRepository = new CityRepository()
    customerService = new CustomerService(new CustomerRepository(), cityRepository)
    cityService = new CityService(cityRepository)

    await cityService.save({ uuid: v4(), name: 'Ervalia', state: 'MG' })
    const city = await cityService.findByName('Ervalia')

    customer = {
      uuid: uuid,
      name: 'Mathes',
      gender: 'M',
      birthDate: '1999-07-21',
      cityId: city.uuid
    }
  })

  // #region Test success
  test('save customer', async () => {
    expect(await customerService.save(customer)).toBe(undefined)
  })

  test('find customer by name', async () => {
    const customers = await customerService.findByName(customer.name)
    expect(Array.isArray(customers)).toBe(true)
  })

  test('find customer by id', async () => {
    const data = await customerService.findById(customer.uuid)
    expect(data.uuid).toBe(customer.uuid)
  })

  test('update name customer by id', async () => {
    expect(await customerService.updateName(customer.uuid, customer.name)).toBe(undefined)
  })

  test('delete customer by id', async () => {
    expect(await customerService.delete(customer.uuid)).toBe(undefined)
  })

  // #endregion

  // #region Test not success
  test('failed save customer, city not found', async () => {
    expect.assertions(1)
    try {
      await customerService.save({
        ...customer,
        cityId: ''
      })
    } catch (e) {
      expect(e.message).toBe('CITY_NOT_FOUND')
    }
  })

  test('customer search by name, not found', async () => {
    expect.assertions(1)
    try {
      await customerService.findByName('')
    } catch (e) {
      expect(e.message).toBe('CUSTOMER_NOT_FOUND')
    }
  })

  test('customer search by id, not found', async () => {
    expect.assertions(1)
    try {
      await customerService.findById('')
    } catch (e) {
      expect(e.message).toBe('CUSTOMER_NOT_FOUND')
    }
  })

  test('update name customer by id, not found', async () => {
    expect.assertions(1)
    try {
      await customerService.updateName('', customer.name)
    } catch (e) {
      expect(e.message).toBe('CUSTOMER_NOT_FOUND')
    }
  })

  test('delete customer by id, not found', async () => {
    expect.assertions(1)
    try {
      await customerService.delete('')
    } catch (e) {
      expect(e.message).toBe('CUSTOMER_NOT_FOUND')
    }
  })
  // #endregion
})
