'use strict'

class ProfessorController {

  async store({ request }) {

  const dataToCreate = request.only(['name', 'e-mail', 'matricula', 'data nascimento']);

  return await Professor.create(dataToCreate);

}

async store({ request }) {

  const dataToCreate = request.only(['numero sala', 'capacidade de alunos', 'disponibilidade', 'professor', 'aluno']);

  return await Sala.create(dataToCreate);

}

async list() {
  return await Professor.all();
}

async list() {
  return await Sala.all();
}

async show({ params }) {
  return await Sala.find(params.id);
}

async show({ params }) {
  return await Professor.find(params.id);
}

async update({ params, request }) {

  const Professor = await Course.findOrFail(params.id);

  const dataToUpdate = request.only(['name', 'e-mail', 'matricula', 'data nascimento']);

  course.merge(dataToUpdate);

  await professor.save();

  return professor;

}

async update({ params, request }) {

  const Sala = await Course.findOrFail(params.id);

  const dataToCreate = request.only(['numero sala', 'capacidade de alunos', 'disponibilidade', 'professor', 'aluno'])

  course.merge(dataToUpdate);

  await sala.save();

  return sala;

}

async delete({ params }) {

  const professor = await Professor.findOrFail(params.id);

  await professor.delete();
  await sala.delete();

  return {
    message: 'deletado!'
  }

}
}


module.exports = ProfessorController
