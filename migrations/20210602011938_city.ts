import { Knex } from 'knex'

export async function up (knex: Knex): Promise<void> {
  const exists = await knex.schema.hasTable('citys')
  if (!exists) {
    return knex.schema.createTable('citys', (table) => {
      table.specificType('uuid', 'CHAR(36) CHARACTER SET ascii').primary()
      table.string('name', 50)
      table.specificType('state', 'CHAR(2)')
    })
  }
}

export async function down (knex: Knex): Promise<void> {
  return knex.schema.dropTable('citys')
}
