export function cargarLista(listaRepro) {
  const lista = JSON.parse(localStorage.getItem("playList")) || [];

  if (lista.length > 0) {
    for (let i = 0; i < lista.length - 1; i++) {
      listaRepro.innerHTML += `<li>${i + 1} ${lista[i].archivo}</li>`;
    }
  }
}
