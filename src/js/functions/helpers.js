import {letras, data, container} from './variaveis.js';
import {createElement, addElementInPage} from './element.js'
import animation from './animation.js';


function deleteCharacter(){
    container.firstElementChild.parentNode.removeChild(container.firstElementChild)
}

function addStyleFromLoser(){
    content.innerHTML = `
    <h1>Você perdeu!!</h1>
    `
}

function clearIntervalAll(array){
    for (let i = 0; i < array.length; i++) {
        clearInterval(array[i])
        
    }
}

function listeningHTML(){
    return setInterval(() => {
        let lenghtElement = letras.length

        addElementInPage(createElement());
        if(lenghtElement <= letras.length){
            animation(letras[letras.length - 1]);
        }
    }, data.secondTime)
}
export {deleteCharacter, addStyleFromLoser, clearIntervalAll, listeningHTML};