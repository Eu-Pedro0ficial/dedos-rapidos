import {container, heightContainer, data} from './variaveis.js';
import {deleteCharacter} from './helpers.js';

function characterExist(){
    return document.body.contains(container.firstElementChild);
}

function checkLimitInGreenArea(){
    // trocar o item.style.top.replace("px", '')
    return setInterval(()=>{
        if(characterExist()){
            let styleTopFirstElement = container.firstElementChild.style.top.replace("px", '')// ta dando problema
            if(styleTopFirstElement >= container.offsetHeight){
                deleteCharacter()
            }   
        }
    }, data.threeTime)
}

function checkKeyboardEvent(event){
    const styleTopFirstElement = parseInt(container.firstElementChild.style.top.replace("px",""))// ta dando problema

    if(styleTopFirstElement < heightContainer && styleTopFirstElement > heightContainer - 100){
        if(container.firstElementChild.textContent.toLowerCase() == event.key){
            deleteCharacter()
            
        }
    }
}

export {characterExist, checkLimitInGreenArea, checkKeyboardEvent};