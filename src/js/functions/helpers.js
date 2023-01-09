import {letras, timeToListening, timeToAnimation, container, content, lifeInGame, score_container, hit_area, titleLoser, titleStart, loser, start, point} from './variaveis.js';
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
    setintervalIndex.push(listeningHTML());
    setintervalIndex.push(checkLimitInGreenArea());
    disappearElement([titleStart, start]);

}

function restartToGame(){
    while(container.firstElementChild){

        container.firstElementChild.parentNode.removeChild(container.firstElementChild)
    }
    let score = score_container.dataset.score = 0
    score_container.textContent = score;
    let life = lifeInGame.dataset.life = 3;
    lifeInGame.textContent = life;
    disappearElement([titleLoser, loser, point])
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

function checkScoreFromNextLevel(){
    let score = score_container.dataset.score;
    if(score <= 10){
        timeToListening.push(900);
        timeToAnimation.push(190);
    }else if(score <= 20){
        timeToListening.push(800);
        timeToAnimation.push(180);
    }else{
        timeToListening.push(700);
        timeToAnimation.push(170);
    }
}

function listeningHTML(){
    return setInterval(() => {
        let lenghtElement = letras.length

        addElementInPage(createElement());
        if(lenghtElement <= letras.length){
            animation(letras[letras.length - 1]);
        }
    }, timeToListening[timeToListening.length -1])
}



export {deleteCharacter, checkScoreFromNextLevel, addStyleFromLoser, clearIntervalAll, listeningHTML, startGame, restartToGame, setintervalIndex, appearElement, disappearElement};