const Lista = require('../models/Lista');

const findAllListasService = async () => {
  const listas = await Lista.find();
  return listas;
};

const findByIdListaService = async (parametroId) => {
  const lista = await Lista.findById(parametroId);
  return lista;
};

const createListaService = async (novaLista) => {
  const listaCriada = await Lista.create(novaLista);
  return listaCriada;
};

const updateListaService = async (id, listaEdited) => {
  const listaUpdate = await Lista.findByIdAndUpdate(id, listaEdited).setOptions(
    { returnOriginal: false },
  );

  return listaUpdate;
};

const deleteListaService = async (id) => {
  return await Lista.findByIdAndDelete(id);
};

module.exports = {
  findAllListasService,
  findByIdListaService,
  createListaService,
  updateListaService,
  deleteListaService,
};
