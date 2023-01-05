const container = document.getElementById("container");
const hit_area = document.getElementById("hit-area");
const score_container = document.getElementById("score-container");
const lifeInGame = document.getElementById("life-in-game");
const content = document.getElementById("content");
const letras = document.getElementsByClassName("character")
const start = document.getElementById("startGame");
const loser = document.getElementById("loser");
const heightContainer = container.offsetHeight;

const res = await fetch("../../settings.json");
const data = await res.json()

export {container, hit_area, score_container, lifeInGame, content, heightContainer, letras, data, start, loser};

