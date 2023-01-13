function checkIfCharacterExist(){
    return document.body.contains(container.firstElementChild);
}

function checkLimitInGreenArea(){
    // trocar o item.style.top.replace("px", '')
    return setInterval(()=>{
        if(checkIfCharacterExist()){
            let styleTopFirstElement = container.firstElementChild.style.top.replace("px", '')
            if(styleTopFirstElement >= heightContainer){
                lifeInGame.textContent = --lifeInGame.dataset.life;
                helpers.deleteCharacter();
                checkScoreAndApplyLoserScreen();
            }   
        }
    }, 200)
}

function checkScoreFromNextLevel(){
    let score = score_container.dataset.score;
    if(score <= 10){
        settings.timeToListening.push(900);
        settings.timeToAnimation.push(190);
    }else if(score <= 20){
        settings.timeToListening.push(800);
        settings.timeToAnimation.push(180);
    }else{
        settings.timeToListening.push(700);
        settings.timeToAnimation.push(170);
    }
}

function checkScoreAndApplyLoserScreen(){
    if(lifeInGame.dataset.life <= 0){
        helpers.clearAllCharacters();
        helpers.clearIntervalAll(setintervalIndex);
        point.textContent = `Essa foi sua pontuação: ${score_container.dataset.score}`;
        helpers.disappearElement([hit_area, score_container, lifeInGame, container]);
        helpers.appearElement([titleLoser, loser, point]);
    }
}

function checkKeyboardEvent(event){
    const styleTopFirstElement = parseInt(container.firstElementChild.style.top.replace("px",""))

    if(styleTopFirstElement < heightContainer && styleTopFirstElement > heightContainer - 100){
        if(container.firstElementChild.textContent.toLowerCase() == event.key){
            score_container.textContent = score_container.dataset.score++;
            checkScoreFromNextLevel();
            helpers.deleteCharacter()
            
        }
    }
}

export {checkIfCharacterExist,checkLimitInGreenArea, checkKeyboardEvent};