window.onload = function () {
  const button = document.getElementById('criar-tarefa');
  const input = document.getElementById('texto-tarefa');
  const listaTarefas = document.getElementById('lista-tarefas');

  function createTask() {
    const tarefaCriada = document.createElement('li');
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

  button.addEventListener('click', createTask);
  listaTarefas.addEventListener('click', selectedTask);
};
