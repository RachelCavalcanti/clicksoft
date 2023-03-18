'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SalaSchema extends Schema {
  up () {
    this.create('salas', (table) => {
      table.increments()

      .integer('user_id')
      .unsigned()
      .references('id')
      .inTable('users')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
      table.decimal('numero sala', 10).notNullable()
      table.decimal('capacidade de aluno', 60).notNullable()
      table.decimal('disponibilidade', 64).notNullable()
      table.string('aluno', 90).notNullable()
      table.string('professor',90).notNullable()
      table.decimal( 'numero sala', 10).notNullable() // redundante?

      table.timestamps()
    })
  }

  down () {
    this.drop('salas')
  }
}

module.exports = SalaSchema
