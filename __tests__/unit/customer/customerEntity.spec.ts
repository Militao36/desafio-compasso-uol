import { v4 } from 'uuid'
import { CustomerEntity } from '../../../src/entities/Customer'

describe('Customer Entity ', () => {
  test('Customer ​​entity test', async () => {
    const customer = {
      name: 'Mathues',
      gender: 'M',
      birthDate: '1999-07-21',
      cityId: v4()
    }
    const customerEntity = new CustomerEntity(customer)
    expect(customerEntity.customer).toMatchObject(customerEntity.customer)
  })

  test('Customer ​​entity test in error', () => {
    try {
      const customerEntity = new CustomerEntity({
        name: '',
        gender: '',
        birthDate: '',
        cityId: ''
      })
    } catch (e) {
      expect(e.message).toBe('VALIDATE_FAILED')
    }
  })
})
