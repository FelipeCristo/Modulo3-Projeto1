const route = require('express').Router();
const controllerListas = require('../controllers/lista.controller');

route.get('/listas-de-tarefas', controllerListas.findAllListasController);
route.get('/lista/:id', controllerListas.findByIdListaController);
route.post('/create', controllerListas.createListaController);
route.put('/update/:id', controllerListas.updateListaController);
route.delete('/delete/:id', controllerListas.deleteListaController);

module.exports = route;

 