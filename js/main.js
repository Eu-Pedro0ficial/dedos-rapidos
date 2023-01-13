"use strict"
import {checkKeyboardEvent} from './functions/validate.js';
import {startGame, restartToGame} from './functions/forStart.js'


document.addEventListener('keydown', (event) => {
    
    checkKeyboardEvent(event)
    
})
start.addEventListener('click', startGame);
loser.addEventListener('click', restartToGame);