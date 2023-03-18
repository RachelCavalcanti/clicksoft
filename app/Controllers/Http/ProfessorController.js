'use strict'

const Professor = use( 'App/Models/Professor');

class ProfessorController {

  async store({ request }) {

  const dataToCreate = request.only(['name', 'e-mail', 'matricula', 'data nascimento']);

  return await Professor.create(dataToCreate);

}

async show({ params }) {
  return await Professor.find(params.id);
}

async update({ params, request }) {

  const professor = await Professor.findOrFail(params.id);

  const dataToUpdate = request.only(['name', 'e-mail', 'matricula', 'data nascimento']);

  professor.merge(dataToUpdate);

  await professor.save();

  return professor;

}

async delete({ params }) {

  const professor = await Professor.findOrFail(params.id);

  await professor.delete();

  return {
    message: 'Dados deletados!'
  }
 }
}


module.exports = ProfessorController


