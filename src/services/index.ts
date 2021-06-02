import { cityRepository, customerRepository } from '../repositories'

import { CityService } from './city'
import { CustomerService } from './customer'

const cityService = new CityService(cityRepository)
const customerService = new CustomerService(customerRepository, cityRepository)

export { cityService, customerService }
