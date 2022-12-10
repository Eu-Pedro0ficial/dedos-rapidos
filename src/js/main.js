"use strict"
import {checkLimitInGreenArea, checkKeyboardEvent} from './functions/validate.js';
import {clearIntervalAll, listeningHTML} from './functions/helpers.js';

let setintervalIndex = [];

setintervalIndex.push(listeningHTML())
setintervalIndex.push(checkLimitInGreenArea())

document.addEventListener('keydown', (event) => {
    
    checkKeyboardEvent(event)
    
})
// 3 setinterval

// clearIntervalAll(setintervalIndex);