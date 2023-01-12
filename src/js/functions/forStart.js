import {checkLimitInGreenArea} from './validate.js';

function startGame(){
    helpers.appearElement([hit_area, score_container, lifeInGame, container]);
    setintervalIndex.push(helpers.listeningHTML());
    setintervalIndex.push(checkLimitInGreenArea());
    helpers.disappearElement([titleStart, start]);

};

function restartToGame(){
    score_container.dataset.score = 0
    score_container.textContent = score_container.dataset.score;
    lifeInGame.dataset.life = 3
    lifeInGame.textContent = lifeInGame.dataset.life;
    helpers.disappearElement([titleLoser, loser, point])
    startGame();
};

export {startGame, restartToGame};