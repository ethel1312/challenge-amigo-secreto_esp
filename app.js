// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function agregarAmigo() {
    let nombre = document.getElementById('amigo').value;

    if(nombre == ""){
        alert("Por favor, inserte un nombre");
        return;
    } else {
        amigos.push(nombre);
        document.getElementById('amigo').value = "";
        actualizarAmigo();
    }
}

function actualizarAmigo(){
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement('li');
        li.textContent = amigos[i];
        listaAmigos.appendChild(li);       
    }
}

function sortearAmigo() {

    let indice = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indice];
    let resultado = document.getElementById('resultado');
    

    if(amigos.length == 0){
        alert("No hay amigos en la lista");
        return;
    } else {
        listaAmigos.innerHTML = "";
        resultado.innerHTML = `El amigo secreto sorteado es: ${amigoSorteado}`;
    }
}





