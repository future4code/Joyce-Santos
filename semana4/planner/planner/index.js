function tarefaDoDia(){
    const minhaTarefa = document.getElementById("tarefa")
    const diaSelecionado = document.getElementById("dias-semana").value
    const minhaLista = document.getElementById(diaSelecionado)

        if(minhaTarefa.value === ""){
            alert("Opa! Insira alguma coisa!!!")
            return
        }

    
    minhaLista.innerHTML += `<li class="limpar" onclick="riscarTarefa(this)">${minhaTarefa.value}</li>`

    minhaTarefa.value = ""

    console.log(diaSelecionado)

}

function riscarTarefa(id) {
    id.style.textDecoration = "line-through";
}



function zerarTarefas() {
    let limpar = confirm("Deseja realmente limpar estas tarefas?")
        if(limpar === true){
           const limparTarefa = document.getElementsByClassName("limpar");
           console.log(limparTarefa);
           for (let i = 0; i < limparTarefa.length; i++) {
               limparTarefa[i].innerHTML = " "
           }
        }
}


