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

Route.get('/clicksoft', 'CadastroController.list');

Route.get('/clicksoft/:id', 'CadastroController.show');

Route.put('/clicksoft/:id', 'CadastroController.update');

Route.post('/aluno', 'AlunoController.store');

Route.get('/aluno/:id', 'AlunoController.show');

Route.delete('/aluno/:id', 'AlunoController.delete');

Route.post('/professor', 'ProfessorController.store');

Route.get('/professor', 'ProfessorController.list');

Route.delete('/professor/:id', 'ProfessorController.delete');

Route.get('/professor/:id', 'ProfessorController.show');

Route.post('/professor', 'SalaController.store');

Route.get('/professor', 'SalaController.list');

Route.get('/professor/:id', 'SalaController.show');

Route.delete('/professor/:id', 'SalaController.delete');

Route.post('/sala', 'SalaController.store');


})

