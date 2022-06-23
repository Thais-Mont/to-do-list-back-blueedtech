const tarefas = [
  {
    id: 1,
    tarefa: 'Ir ao médico',
    descricao: 'Levar exames solicitados',
    data: '23/06/2022',
    turno: 'manhã',
  },

  {
    id: 2,
    tarefa: 'Estudar Frontend',
    descricao: 'Iniciar estudos em HTML e CSS',
    data: '23/06/2022',
    turno: 'tarde',
  },

  {
    id: 3,
    tarefa: 'Curso BlueEdtech',
    descricao: 'Aula 04: Node e Express',
    data: '23/06/2022',
    turno: 'noite',
  },
];

const findAllTarefasService = () => {
  return tarefas;
};

const findByIdTarefaService = (parametroId) => {
  const tarefa = tarefas.find((tarefa) => tarefa.id === parametroId);
  return tarefa;
};

const createTarefaService = (novaTarefa) => {
  const newId = tarefas.length + 1;
  novaTarefa.id = newId;
  tarefas.push(novaTarefa);
  return novaTarefa;
};


const updateTarefaService = (id, tarefaEdit) => {
  tarefaEdit['id'] = id;
  const tarefaIndex = tarefas.findIndex((tarefa) => tarefa.id == id);
  tarefas[tarefaIndex] = tarefaEdit;
  return tarefaEdit;
};


const deleteTarefaService = (id) => {
  const tarefaIndex = tarefas.findIndex((tarefa) => tarefa.id == id);
  if(tarefaIndex > 0) {
  return tarefas.splice(tarefaIndex, 1);
  }
};

const deletePaleta = (id) => {
  paletas.forEach((paleta, index) => {
    if (paleta.id === id) {
      paletas.splice(index, 1);
    }
  });
};


module.exports = {
  findAllTarefasService,
  findByIdTarefaService,
  createTarefaService,
  updateTarefaService,
  deleteTarefaService
};
