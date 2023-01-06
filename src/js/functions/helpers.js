import {letras, data, container, content, lifeInGame, score_container, hit_area, titleLoser, titleStart, loser, start} from './variaveis.js';
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
    appearElement([hit_area, score_container, lifeInGame, container]);
    setintervalIndex.push(listeningScore());
    setintervalIndex.push(listeningHTML());
    setintervalIndex.push(checkLimitInGreenArea());
    disappearElement([titleStart, start]);

}

function restartToGame(){
    while(container.firstElementChild){

        container.firstElementChild.parentNode.removeChild(container.firstElementChild)
    }
    lifeInGame.dataset.life = 3;
    lifeInGame.textContent = lifeInGame.dataset.life = 3;
    disappearElement([titleLoser, loser])
    startGame();
}

function appearElement(array){
    array.forEach(element => {
        element.style.opacity = "1";
    });

}
function disappearElement(array){
    array.forEach(element => {
        element.style.opacity = "0";
    });
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
            appearElement([titleLoser, loser])
        }
    }, 400)
}


/*
    display: none; //some com tudo, até o espaço
    opacity: 0; // trasparencia
*/

export {deleteCharacter, addStyleFromLoser, clearIntervalAll, listeningHTML, listeningScore, startGame, restartToGame};