'use strict'

const Aluno = use('App/Models/Aluno');

class AlunoController {

  async store({ request }) {

    const dataToCreate = request.only(['name', 'e-mail', 'matricula', 'data nascimento']);

    return await Aluno.create(dataToCreate);

  }
  
  async update({ params, request }) {

    const aluno = await Aluno.findOrFail(params.id);

    const dataToUpdate = request.only(['name', 'e-mail', 'matricula', 'data nascimento']);

    aluno.merge(dataToUpdate);

    await aluno.save();

    return aluno;

}

  async show({ params }) {
    return await Aluno.find(params.id);
  }

  async delete({ params }) {

    const aluno = await Aluno.findOrFail(params.id);

    await aluno.delete();

    return {
      message: 'Dados deletados!'
    }

  }
}

module.exports = AlunoController

