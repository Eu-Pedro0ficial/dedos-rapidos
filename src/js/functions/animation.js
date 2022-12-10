import {heightContainer, data} from './variaveis.js';

export default function animation(item){
    let inicial_top = 0

    return setInterval(() => { // ta dando problema!!
        if (parseInt(item.style.top.replace("px","")) < heightContainer) {
            inicial_top += 10
            item.style.top = `${inicial_top}px`
        }
        
    }, data.threeTime)
    
}