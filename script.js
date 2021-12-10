window.onload = function () {
  const criaTarefa = document.getElementById('criar-tarefa');
  const input = document.getElementById('texto-tarefa');
  const listaTarefas = document.getElementById('lista-tarefas');
  const apagaTudo = document.getElementById('apaga-tudo');
  const removeCompleto = document.getElementById('remover-finalizados');

  function createTask() {
    let tarefaCriada = document.createElement('li');
    tarefaCriada.classList.add('tarefas');
    listaTarefas.appendChild(tarefaCriada);
    tarefaCriada.innerHTML += input.value;
    input.value = null;
    console.log(tarefaCriada);
  }

  function selectedTask(event) {
    const tarefa = document.querySelectorAll('.tarefas');
    for (let i = 0; i < tarefa.length; i += 1) {
      const posicaoTarefa = tarefa[i];
      posicaoTarefa.classList.remove('cinza-claro');
    }
    event.target.classList.add('cinza-claro');
  }

  function taskDone(event) {
    if (event.target.classList.contains('completed')) {
      event.target.classList.remove('completed');
    } else {
      event.target.classList.add('completed');
    }
  }

  function deleteAll() {
    const taskList = document.querySelectorAll('li');
    for (let i = 0; i < taskList.length; i += 1) {
      const tasks = taskList[i];
      tasks.remove();
    }
  }

  function deleteCompleted() {
    const completedTasks = document.querySelectorAll('.completed');
    for (let i = 0; i < completedTasks.length; i += 1) {
      const completedRemove = completedTasks[i];
      completedRemove.remove();
    }
  }

  criaTarefa.addEventListener('click', createTask);
  listaTarefas.addEventListener('click', selectedTask);
  listaTarefas.addEventListener('dblclick', taskDone);
  apagaTudo.addEventListener('click', deleteAll);
  removeCompleto.addEventListener('click', deleteCompleted);
};
