import { Knex } from 'knex'

export async function up (knex: Knex): Promise<void> {
  const exists = await knex.schema.hasTable('customers')
  if (!exists) {
    return knex.schema.createTable('customers', (table) => {
      table.specificType('uuid', 'CHAR(36) CHARACTER SET ascii')
      .primary()
      table.string('name', 100).notNullable()
      table.enum('gender', ['M', 'F']).notNullable()
      table.date('birthDate').notNullable()
      table
        .specificType('cityId', 'CHAR(36) CHARACTER SET ascii')
        .references('uuid')
        .inTable('citys')
        .notNullable()
    })
  }
}

export async function down (knex: Knex): Promise<void> {
  return knex.schema.dropTable('customers')
}
