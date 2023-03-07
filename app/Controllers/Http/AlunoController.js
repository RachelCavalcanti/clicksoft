'use strict'

const Aluno = use('App/Models/Aluno');

class AlunoController {

  async store({ request }) {

    const dataToCreate = request.only(['name', 'e-mail', 'matricula', 'data nascimento']);

    return await Aluno.create(dataToCreate);

  }

  async show({ params }) {
    return await Aluno.find(params.id);
  }

  async update({ params, request }) {

    const aluno = await Course.findOrFail(params.id);

    const dataToUpdate = request.only(['name', 'e-mail', 'matricula', 'data nascimento']);

    course.merge(dataToUpdate);

    await aluno.save();

    return aluno;

  }

  async delete({ params }) {

    const aluno = await Aluno.findOrFail(params.id);

    await aluno.delete();

    return {
      message: 'Cadastro deletado!'
    }

  }
}

module.exports = AlunoController

