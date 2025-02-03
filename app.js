// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function updateFriends() {
    let listaHtml = document.getElementById("listaAmigos");
    listaHtml.innerHTML =""
    for (let i = 0; i < amigos.length; i++) {
      listaHtml.innerHTML += `<li>${amigos[i]}</li>`;
    }
   
  }

function agregarAmigo() {
  let inputNombres = document.getElementById("amigo");
  if (inputNombres.value === "") {
    alert("Debe escribir algun nombre, no puede agregar un nombre vacio");
    return;
  }
  amigos.push(inputNombres.value);
  inputNombres.value = "";
  updateFriends();
}



function sortearAmigo() {
  if (amigos.length < 1) {
    alert("no puede realizar el sorteo si tiene solo un amigo o ninguno");
    return;
  }

  let sorteo = Math.floor(Math.random() * amigos.length);
  const ganador = amigos[sorteo];

  const resultado = document.getElementById("resultado");
  resultado.innerHTML = `<li> tu amigo secreto es: ${ganador}</li>`;
}
