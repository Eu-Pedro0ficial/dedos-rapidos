"use strict"
import {checkKeyboardEvent} from './functions/validate.js';
import {startGame, restartToGame} from './functions/helpers.js';
import {start, loser} from './functions/variaveis.js';


document.addEventListener('keydown', (event) => {
    
    checkKeyboardEvent(event)
    
})
start.addEventListener('click', startGame);
loser.addEventListener('click', restartToGame);