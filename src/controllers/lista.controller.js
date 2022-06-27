const listasService = require('../services/lista.service');

const findAllListasController = (req, res) => {
  const listas = listasService.findAllListasService();
  res.send(listas);
};

const findByIdListaController = (req, res) => {
  const parametroId = Number(req.params.id);
  const escolhaLista = listasService.findByIdListaService(parametroId);
  res.send(escolhaLista);
};

const createListaController = (req, res) => {
  const lista = req.body;
  const newLista = listasService.createListaService(lista);
  res.send(newLista);
};

const updateListaController = (req, res) => {
  const idParm = Number(req.params.id);
  const listaEdit = req.body;
  const updateLista = listasService.updateListaService(
    idParm,
    listaEdit,
  );
  res.send(updateLista);
};

const deleteListaController = (req, res) => {
    const idParam = req.params.id;
    listasService.deleteListaService(idParam);
    res.send({ message: 'Lista deletada com sucesso!' });
  };

module.exports = {
  findAllListasController,
  findByIdListaController,	
  createListaController,
  updateListaController,
  deleteListaController,
};

