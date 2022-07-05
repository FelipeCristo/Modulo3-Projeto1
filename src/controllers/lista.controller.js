const listasService = require('../services/lista.service');
const mongoose = require('mongoose');

const findAllListasController = async (req, res) => {
  const listas = await listasService.findAllListasService();
  if (listas.length == 0) {
    return res
      .status(404)
      .send({ message: 'Não existe Tarefas cadastrada na Lista' });
  }
  res.send(listas);
};

const findByIdListaController = async (req, res) => {
  const idParam = req.params.id;

  const escolhaLista = await listasService.findByIdListaService(idParam);

  if (!escolhaLista) {
    return res
      .status(404)
      .send({ message: 'Tarefa não Encontrada na Lista! Tente outro ID' });
  }

  res.send(escolhaLista);
};
const createListaController = async (req, res) => {
  const lista = req.body;

  const novaLista = await listasService.createListaService(lista);
  res.status(201).send(novaLista);
};

const updateListaController = async (req, res) => {
  const idParam = req.params.id;

  const listaEdit = req.body;

  const updateLista = await listasService.updateListaService(
    idParam,
    listaEdit,
  );
  res.send(updateLista);
};

const deleteListaController = async (req, res) => {
  const idParam = req.params.id;

  await listasService.deleteListaService(idParam);

  res.send({ message: 'Tarefa deletada com sucesso da lista!' });
};

module.exports = {
  findAllListasController,
  findByIdListaController,
  createListaController,
  updateListaController,
  deleteListaController,
};
