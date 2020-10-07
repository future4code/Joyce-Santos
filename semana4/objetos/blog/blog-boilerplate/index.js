let arrayDoBlog = []

function clicouNoBotao(){
    const tituloDoPost = document.getElementById("titulo-post")
    const autorDoPost = document.getElementById("autor-post")
    const conteudoDoPost = document.getElementById("conteudo-post")
    const imagemDoPost = document.getElementById("imagem-post")
    let ondeInserir = document.getElementById("container-de-posts")

    ondeInserir.innerHTML += `<h1> ${tituloDoPost.value}</h1>`
    ondeInserir.innerHTML += `<h3> ${autorDoPost.value} </h3>`
    ondeInserir.innerHTML += `<p> ${conteudoDoPost.value} </p>`

    if(imagemDoPost.value){
        ondeInserir.innerHTML += `<img src=${imagemDoPost.value}>`

    }
    

    const post = {
        titulo: tituloDoPost.value,
        autor: autorDoPost.value,
        conteudo: conteudoDoPost.value,
        imagem: imagemDoPost.value
    }

    arrayDoBlog.push(post)

    tituloDoPost.value = ""
    autorDoPost.value = ""
    conteudoDoPost.value = ""
    imagemDoPost.value = ""

    console.log(arrayDoBlog)
        


}