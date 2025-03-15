let amigos = [];

function adicionarAmigo(){
    let amigo = document.querySelector('input').value;
    if(!amigo){
        alert("Por favor digite o nome do(a) amigo(a)!");
    }else if(amigos.includes(amigo)){
        alert('Amigo(a) já inserido na lista');
    }else{
        amigos.push(amigo);
    }
    console.log(amigos);
    limparCampo();
    exibirLista();
}

function exibirLista(){
    let listaAmigos=document.getElementById("listaAmigos");
    listaAmigos.innerHTML="";
    
    for(let i=0;i<amigos.length;i++){
        let item=document.createElement("li");
        item.textContent=amigos[i];
        listaAmigos.appendChild(item);
    }
}

exibirLista();

function sortearAmigo(){
    if(amigos.length <= 2){
        alert('Adicione mais pessoas');
    }else{
        let amigoSorteado = amigos[Math.floor(Math.random()*amigos.length)];
        let resultado = document.getElementById("resultado");
        resultado.textContent =`${amigoSorteado} foi sorteado como seu/sua amigo(a) secreto(a)`;
    }
}

function limparCampo(){
    amigo = document.querySelector('input');
    amigo.value = "";
}