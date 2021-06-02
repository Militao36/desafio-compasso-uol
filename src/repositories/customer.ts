import { database } from '../config/config'

class CustomerRepository implements ICustomerRepository {
  async save (customer: Customer): Promise<void> {
    await database.table('customers')
      .insert(customer)
  }

  async findByName (name: string): Promise<Customer[]> {
    return await database.table('customers')
      .select<Customer[]>(['uuid', 'name', 'gender', 'birthDate', 'cityId'])
      .where('name', '=', name)
  }

  async findById (uuid: string): Promise<Customer> {
    return await database.table('customers')
      .select<Customer>(['uuid', 'name', 'gender', 'birthDate', 'cityId'])
      .where('uuid', '=', uuid)
      .first()
  }

  async delete (uuid: string): Promise<void> {
    await database.table('customers')
      .delete()
      .where('uuid', '=', uuid)
  }

  async updateName (uuid: string, name: string): Promise<void> {
    await database.table('customers')
      .update({ name })
      .where('uuid', '=', uuid)
  }
}

export { CustomerRepository }
