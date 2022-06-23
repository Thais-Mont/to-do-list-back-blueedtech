const tarefasService = require('../services/tarefa.service');

const findAllTarefasController = (req, res) => {
  const tarefas =  tarefasService.findAllTarefasService();
  res.send(tarefas);
};

const findByIdTarefaController = (req, res) => {
  const idTarefa = Number(req.params.id);
  const tarefaEscolhida =  tarefasService.findByIdTarefaService(idTarefa);
  if(tarefaEscolhida === undefined) {
    res.status(204).send({message: 'Nenhuma tarefa encontrada'});
  }
  res.send(tarefaEscolhida);
};

const createTarefaController = (req, res) => {
  const tarefa = req.body;
  const novaTarefa = tarefasService.createTarefaService(tarefa);
  res.send(novaTarefa);
}

const updateTarefaController = (req, res) => {
  const idParam = Number(req.params.id);
  const tarefaEdit = req.body;
  const updatedTarefa = tarefasService.updateTarefaService(idParam, tarefaEdit);
  res.send(updatedTarefa);
}

const deleteTarefaController = (req, res) => {
  const idParam = req.params.id;
  tarefasService.deleteTarefaService(idParam);
  res.send({ message: 'Tarefa deletada com sucesso!' });
}

module.exports = {
  findAllTarefasController,
  findByIdTarefaController,
  createTarefaController,
  updateTarefaController,
  deleteTarefaController
}



