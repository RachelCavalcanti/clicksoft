'use strict'

const Sala = use('App/Models/Sala');

class SalaController {

  async store({ request }) {

    const dataToCreate = request.only(['numero sala', 'capacidade de aluno', 'disponibilidade']);

    return await Sala.create(dataToCreate);

}
//alocar aluno? apresentará conflito quando retornar a informação?
async store({ request }) {

  const dataToCreate = request.only(['nome aluno','nome professor','numero sala']);

  return await Aluno.create(dataToCreate);

}

async update({ params, request }) {

  const sala = await Sala.findOrFail(params.id);

  const dataToUpdate = request.only(['numero sala', 'capacidade de aluno', 'disponibilidade']);

  sala.merge(dataToUpdate);

  await sala.save();

  return sala;

}

async show({ params }) {
  return await Sala.find(params.id); // verificar
}

async list() {
  return await Aluno.all();
}

async delete({ params }) {

  const sala = await Sala.findOrFail(params.id);
  const aluno = await aluno.findOrFail(params.id);

  await sala.delete();
  await aluno.delete();

  return {
    message: 'Dados deletados!'
   }
  }
}

module.exports = SalaController


