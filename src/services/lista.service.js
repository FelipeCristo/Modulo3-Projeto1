const listas = [
  {
    id: 1,
    tarefa: 'Fazer compras',
    hora: '14:30',
    local: 'Mercado Costa Azul',

    
  },
  {
    id: 2,
    tarefa: 'Ir ao Médico',
    hora: '8:40',
    local: 'Climaze',
  },
  {
    id: 3,
    tarefa: 'Cinema com Esposa',
    hora: '20:15',
    local: ' kinoplex',
  },
];

const findAllListasService = () => {
  return listas;
};

const findByIdListaService = (parametroId) => {
  return listas.find((lista) => lista.id === parametroId);
};


const createListaService = (newLista)=>{
    const newId = listas.length + 1;
    newLista.id = newId;
    listas.push(newLista);
    return newLista;
}
const updateListaService = (id, listaEdited)=>{
    listaEdited['id'] = id;
    const listaIndex = listas.findIndex((lista) => lista.id == id);
    listas[listaIndex] = listaEdited;
    return listaEdited;
}

const deleteListaService = (id)=>{
  const listaIndex = listas.findIndex((lista) => lista.id == id);
  return listas.splice(listaIndex, 1);
}


module.exports = {
findAllListasService,
findByIdListaService,
createListaService,
updateListaService,
deleteListaService,
};
