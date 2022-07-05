const mongoose = require('mongoose');

const ListaSchema = new mongoose.Schema({
    tarefa:{
        type: String,
        require: true,
    },
    hora:{
        type: Number,
        require: true,
    },
    local:{
        type: String,
        require: true,
    },
});

const Lista = mongoose.model('listas', ListaSchema);

module.exports = Lista;
