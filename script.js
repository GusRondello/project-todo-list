window.onload = function (){
    const button = document.getElementById('criar-tarefa');
    const input = document.getElementById('texto-tarefa');
    const listaTarefas = document.getElementById('lista-tarefas');

    function criaTarefa () {
        const tarefaCriada = document.createElement('li')
        listaTarefas.appendChild(tarefaCriada);
        tarefaCriada.innerHTML += input.value;
        input.value = null;
        console.log(tarefaCriada)
    }


    button.addEventListener('click', criaTarefa)
}