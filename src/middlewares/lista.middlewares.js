const mongoose = require('mongoose');

const validID = async (req, res, next) => {
  const idParam = await req.params.id;
  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    return res.status(400).send({ message: 'Digite um ID válido para busca!' });
  }

  next();
};

const validObjectBody = (req, res, next) => {
  const lista = req.body;
  if (!lista || !lista.tarefa || !lista.hora || !lista.local) {
    return res.status(400).send({
      mesage: 'Esta Faltando dados! Por favor Preecha TUDO corretamente',
    });
  }
  next();
};

module.exports = {
  validID,
  validObjectBody,
};
