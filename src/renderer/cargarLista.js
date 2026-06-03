import { list } from "../renderer.js";
import { mostrarLista } from "./mostrarLista.js";

export let lista = []

export function cargarLista() {
  lista =
    list.length > 0 ? list : JSON.parse(localStorage.getItem("playList")) || [];

    mostrarLista()
}
