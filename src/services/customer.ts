import { NotFoundExeption } from '../Exeptions/NotFoundExeption'

class CustomerService implements ICustomerService {
  constructor (
    private customerRepository: ICustomerRepository,
    private cityRepository: ICityRepository
  ) { }

  async save (customer: Customer): Promise<void> {
    const city = await this.cityRepository.cityExists(customer.cityId)
    if (!city) {
      throw new NotFoundExeption('CITY_NOT_FOUND')
    }

    await this.customerRepository.save(customer)
  }

  async findByName (name: string): Promise<Customer[]> {
    const customer = await this.customerRepository.findByName(name)
    if (customer.length === 0) {
      throw new NotFoundExeption('CUSTOMER_NOT_FOUND')
    }

    return customer
  }

  async findById (uuid: string): Promise<Customer> {
    const customer = await this.customerRepository.findById(uuid)
    if (!customer) {
      throw new NotFoundExeption('CUSTOMER_NOT_FOUND')
    }

    return customer
  }

  async delete (uuid: string): Promise<void> {
    const customer = await this.customerRepository.findById(uuid)
    if (!customer) {
      throw new NotFoundExeption('CUSTOMER_NOT_FOUND')
    }
    await this.customerRepository.delete(uuid)
  }

  async updateName (uuid: string, nome: string): Promise<void> {
    const customer = await this.customerRepository.findById(uuid)
    if (!customer) {
      throw new NotFoundExeption('CUSTOMER_NOT_FOUND')
    }
    await this.customerRepository.updateName(uuid, nome)
  }
}

export { CustomerService }
