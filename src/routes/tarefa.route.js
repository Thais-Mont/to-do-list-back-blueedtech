const router = require('express').Router();
const controllerTarefas = require('../controllers/tarefa.controller');

router.get('/todas-tarefas', controllerTarefas.findAllTarefasController);
router.get('/tarefa/:id', controllerTarefas.findByIdTarefaController);
router.post('/create', controllerTarefas.createTarefaController);
router.put('/update/:id', controllerTarefas.updateTarefaController);
router.delete('/delete/:id', controllerTarefas.deleteTarefaController);


module.exports = router;
