import { setStorage } from "../localStorage.js"
import { loadList, playList } from "./buttons/play/loadList.js"


export const eliminarTrack = (id) => {
    
    const listaNueva = playList.filter( item => {
        return item.id != id
    } )    

    setStorage('playList', listaNueva)
    loadList()
}