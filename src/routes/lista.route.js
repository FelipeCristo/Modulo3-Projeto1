const route = require('express').Router();
const controllerListas = require('../controllers/lista.controller');
const {validID, validObjectBody} = require('../middlewares/lista.middlewares');


route.get('/listas-de-tarefas', controllerListas.findAllListasController);
route.get('/lista/:id', validID, controllerListas.findByIdListaController);
route.post('/create',validObjectBody, controllerListas.createListaController);
route.put('/update/:id', validID, validObjectBody,  controllerListas.updateListaController);
route.delete('/delete/:id', validID,  controllerListas.deleteListaController);

module.exports = route;
