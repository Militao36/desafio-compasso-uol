export { }

declare global {
  // #region Types citys
  type City = {
    uuid?: string
    name: string
    state: string
  }

  interface ICityRepository {
    save(city: City): Promise<void>
    findByName(name: string): Promise<City>
    findByState(state: string): Promise<City[]>
    cityExists(uuid: string): Promise<boolean>
    cityAlreadyExists(name: string, state: string): Promise<boolean>
  }

  interface ICityService {
    save(city: City): Promise<void>
    findByName(name: string): Promise<City>
    findByState(state: string): Promise<City[]>
  }

  // #endregion

  // #region Types Customers
  type Customer = {
    uuid?: string
    name: string
    gender: string
    birthDate: string
    cityId: string
  }

  interface ICustomerRepository {
    save(customer: Customer): Promise<void>
    findByName(name: string): Promise<Customer[]>
    findById(uuid: string): Promise<Customer>
    delete(uuid: string): Promise<void>
    updateName(uuid: string, nome: string): Promise<void>
  }

  interface ICustomerService extends ICustomerRepository { }

  // #endregion
}
