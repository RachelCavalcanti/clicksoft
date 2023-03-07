'use strict'

const Cadastro = use('App/Models/Cadastro');

class CadastroController {

  async store({ request }) {

    const dataToCreate = request.only(['name', 'e-mail', 'matricula', 'data nascimento']);

    return await Cadastro.create(dataToCreate);

  }

  async list() {
    return await Cadastro.all();
  }

  async show({ params }) {
    return await Cadastro.find(params.id);
  }

  async update({ params, request }) {

    const cadastro = await Cadastro.findOrFail(params.id);

    const dataToUpdate = request.only(['name', 'e-mail', 'matricula', 'data nascimento']);

    cadastro.merge(dataToUpdate);

    await cadastro.save();

    return cadastro;

  }

  async delete({ params }) {

    const cadastro = await Cadastro.findOrFail(params.id);

    await cadastro.delete();

    return {
      message: 'Cadastro deletado!'
    }

  }
}

module.exports = CadastroController

