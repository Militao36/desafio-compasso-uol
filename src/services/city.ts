import { ConflictExeption } from '../Exeptions/ConflictExeption'
import { NotFoundExeption } from '../Exeptions/NotFoundExeption'

class CityService implements ICityService {
  constructor (
    private cityRepository: ICityRepository
  ) { }

  async save (city: City): Promise<void> {
    const cityAlreadyExists = await this.cityRepository.cityAlreadyExists(city.name, city.state)
    if (cityAlreadyExists) {
      throw new ConflictExeption('CITY_ALREADY_EXISTS')
    }

    await this.cityRepository.save(city)
  }

  async findByName (name: string): Promise<City> {
    const city = await this.cityRepository.findByName(name)

    if (!city) {
      throw new NotFoundExeption('CITY_NOT_FOUND')
    }
    return city
  }

  async findByState (state: string): Promise<City[]> {
    const city = await this.cityRepository.findByState(state)

    if (city.length === 0) {
      throw new NotFoundExeption('CITY_NOT_FOUND')
    }

    return city
  }
}

export { CityService }
