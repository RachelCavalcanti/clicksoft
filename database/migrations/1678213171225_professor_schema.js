'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProfessorSchema extends Schema {
  up () {
    this.create('professors', (table) => {
      table.increments()
      table.string('name', 64).notNullable()
      table.string('e-mail', 104).notNullable()
      table.decimal('matricula', 64).notNullable()
      table.decimal('data nascimento', 64).notNullable()

      table.timestamps()
    })
  }

  down () {
    this.drop('professors')
  }
}

module.exports =  ProfessorSchema
