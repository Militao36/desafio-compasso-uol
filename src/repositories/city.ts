import { database } from '../config/config'

class CityRepository implements ICityRepository {
  async save (city: City): Promise<void> {
    await database.table('citys')
      .insert(city)
  }

  async findByName (name: string): Promise<City> {
    return await database.table('citys')
      .select<City>(['uuid', 'name', 'state'])
      .where('name', '=', name)
      .first()
  }

  async findByState (state: string): Promise<City[]> {
    return await database.table('citys')
      .select<City[]>(['uuid', 'name', 'state'])
      .where('state', '=', state)
  }

  async cityAlreadyExists (name: string, state: string): Promise<boolean> {
    const data = await database.table('citys')
      .select<City>(['name', 'state'])
      .where('name', '=', name)
      .andWhere('state', '=', state)
      .first()

    return !!data
  }

  async cityExists (uuid: string): Promise<boolean> {
    const data = await database.table('citys')
      .select(['uuid'])
      .where('uuid', '=', uuid)
      .first()

    return !!data
  }
}

export { CityRepository }
