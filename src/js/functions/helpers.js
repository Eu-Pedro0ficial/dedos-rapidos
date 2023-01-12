import {checkIfCharacterExist} from './validate.js';
import {createElement, addElementInPage} from './element.js'
import animation from './animation.js';

window.helpers = {
    deleteCharacter: function(){
        container.firstElementChild.parentNode.removeChild(container.firstElementChild)
    },
    clearIntervalAll: function(array){
        for (let i = 0; i < array.length; i++) {
            clearInterval(array[i])
            
        }
    },
    appearElement: function(array){
        array.forEach(element => {
            element.style.opacity = "1";
        });
    
    },
    disappearElement: function (array){
        array.forEach(element => {
            element.style.opacity = "0";
        });
    },
    clearAllCharacters: function(){
        while(checkIfCharacterExist()){
            this.deleteCharacter();
        }
    },
    listeningHTML: function(){
        return setInterval(() => {
            let lenghtElement = letras.length
    
            addElementInPage(createElement());
            if(lenghtElement <= letras.length){
                animation(letras[letras.length - 1]);
            }
        }, settings.timeToListening[settings.timeToListening.length -1])
    }

}