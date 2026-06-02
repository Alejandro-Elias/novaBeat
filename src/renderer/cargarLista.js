export function cargarLista(listaRepro, list) {
  const lista =
    list.length > 0 ? list : JSON.parse(localStorage.getItem("playList")) || [];
    
  listaRepro.innerHTML = " ";

  if (lista.length > 0) {
    for (let i = 0; i < lista.length - 1; i++) {
      listaRepro.innerHTML += `<li class="track" >${i + 1} ${lista[i].archivo}</li>`;
    }
  }
}
