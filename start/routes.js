'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.group(() => {

Route.get('/', () => {
  return { greeting: ' Deus e fiel o tempo todo in JSON' }
})

Route.post('/clicksoft', 'CadastroController.store');

Route.put('/clicksoft/:id', 'CadastroController.update');

Route.delete('/clicksoft/:id', 'CadastroController.delete');

Route.get('/clicksoft', 'CadastroController.list');

Route.get('/clicksoft/:id', 'CadastroController.show');

//routes aluno

Route.post('/aluno', 'AlunoController.store');

Route.put('/aluno/:id', 'AlunoController.update');

Route.delete('/aluno/:id', 'AlunoController.delete');

Route.get('/aluno/:id', 'AlunoController.show');


//routes professor

Route.post('/professor', 'ProfessorController.store');

Route.put('/professor/:id', 'ProfessorController.update');

Route.delete('/professor/:id', 'ProfessorController.delete');

Route.get('/professor/:id', 'ProfessorController.show');

// routes sala

Route.post('/sala', 'SalaController.store');

Route.put('/sala/:id', 'SalaController.update');

Route.delete('/sala/:id', 'SalaController.delete');

Route.get('/sala', 'SalaController.list');

Route.get('/sala/:id', 'SalaController.show');

})

