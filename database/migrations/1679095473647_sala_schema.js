'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SalaSchema extends Schema {
  up () {
    this.create('salas', (table) => {
      table.increments()
      table.decimal('numero sala', 10).notNullable()
      table.decimal('capacidade de aluno', 60).notNullable()
      table.decimal('disponibilidade', 64).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('salas')
  }
}

module.exports = SalaSchema
