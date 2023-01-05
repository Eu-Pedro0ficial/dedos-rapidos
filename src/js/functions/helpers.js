import {letras, data, container, content, lifeInGame} from './variaveis.js';
import { checkLimitInGreenArea } from './validate.js';
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

let setintervalIndex = [];

function startGame(){
    setintervalIndex.push(listeningScore());
    setintervalIndex.push(listeningHTML());
    setintervalIndex.push(checkLimitInGreenArea());

}

function restartToGame(){
    while(container.firstElementChild){

        container.firstElementChild.parentNode.removeChild(container.firstElementChild)
    }
    lifeInGame.dataset.life = 3;
    lifeInGame.textContent = lifeInGame.dataset.life = 3;
    startGame();
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
function listeningScore(){
    return setInterval(()=>{
        if(lifeInGame.dataset.life <= 0){
            clearIntervalAll(setintervalIndex);
        }
    }, 400)
}

export {deleteCharacter, addStyleFromLoser, clearIntervalAll, listeningHTML, listeningScore, startGame, restartToGame};