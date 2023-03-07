'use strict'

class SalaController {

  async store({ request }) {

    const dataToCreate = request.only(['numero sala', 'capacidade de alunos', 'disponibilidade', 'professor', 'aluno']);

    return await Aluno.create(dataToCreate);


}
}

module.exports = SalaController
