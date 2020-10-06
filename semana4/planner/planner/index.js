function tarefaDoDia(){
    const minhaTarefa = document.getElementById("tarefa")
    const diaSelecionado = document.getElementById("dias-semana").value
    const minhaLista = document.getElementById(diaSelecionado)

        if(minhaTarefa.value === ""){
            alert("Opa! Insira alguma coisa!!!")
        }

    minhaLista.innerHTML += `<li>${minhaTarefa.value}</li>`
    minhaTarefa.value = ""

    console.log(diaSelecionado)

}
