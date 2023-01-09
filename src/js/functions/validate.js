import {container, heightContainer, data, lifeInGame, score_container, hit_area, titleLoser, loser, point} from './variaveis.js';
import {deleteCharacter, appearElement, disappearElement, setintervalIndex, clearIntervalAll, checkScoreFromNextLevel} from './helpers.js';

function characterExist(){
    return document.body.contains(container.firstElementChild);
}

function checkLimitInGreenArea(){
    // trocar o item.style.top.replace("px", '')
    return setInterval(()=>{
        if(characterExist()){
            let styleTopFirstElement = container.firstElementChild.style.top.replace("px", '')
            if(styleTopFirstElement >= heightContainer && listeningScore()){
                lifeInGame.textContent = --lifeInGame.dataset.life;
                deleteCharacter();
            }   
        }
    }, data.threeTime)
}
function listeningScore(){
    if(lifeInGame.dataset.life <= 0){
        clearIntervalAll(setintervalIndex);
        point.textContent = `Essa foi sua pontuação: ${score_container.dataset.score}`;
        disappearElement([hit_area, score_container, lifeInGame, container]);
        appearElement([titleLoser, loser, point]);
        return false;
    }
    return true;
}

function checkKeyboardEvent(event){
    const styleTopFirstElement = parseInt(container.firstElementChild.style.top.replace("px",""))

    if(styleTopFirstElement < heightContainer && styleTopFirstElement > heightContainer - 100){
        if(container.firstElementChild.textContent.toLowerCase() == event.key){
            score_container.textContent = score_container.dataset.score++;
            checkScoreFromNextLevel();
            deleteCharacter()
            
        }
    }
}

export {characterExist, checkLimitInGreenArea, checkKeyboardEvent};