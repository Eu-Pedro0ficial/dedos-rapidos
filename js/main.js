"use strict"

const letras = document.getElementsByClassName("character")
const container = document.getElementById("container")
const character_one = document.createElement("div")
const hit_area = document.getElementById("hit-area")
const score_container = document.getElementById("score-container")
const lifeInGame = document.getElementById("life-in-game")
const content = document.getElementById("content")

var inicial_left = getRandomInt(container.offsetWidth - character_one.offsetWidth);
var pos_inicial = 0;

character_one.innerHTML = geraStringAleatoria(1)
character_one.classList.add("character")

container.appendChild(character_one)

character_one.style.left = `${inicial_left}px`
character_one.style.top = `${pos_inicial}px`


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function geraStringAleatoria(tamanho) {
    var stringAleatoria = '';
    var caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    for (var i = 0; i < tamanho; i++) {
        stringAleatoria += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
    return stringAleatoria;
}

function addElement() {

    return setInterval(() =>{
    
        var element = document.createElement("div")
        element.innerHTML = geraStringAleatoria(1)
        element.classList.add("character")
        container.appendChild(element)
        
        var inicial_left = getRandomInt(container.offsetWidth - element.offsetWidth);
        
        element.style.left = `${inicial_left}px`
    }, 10000)
    
}
let indexRangeAddElement = addElement()

function addAnimation(item){
    var pos_inicial = 0;
    item.style.top = `${pos_inicial}px`
    
    return setInterval(() => {
        
        if (parseInt(item.style.top.replace("px","")) < container.offsetHeight) {
            pos_inicial += 10
            item.style.top = `${pos_inicial}px`
        }
        
    }, 200)
    
}
let indexRangeAddAnimation = addAnimation(letras[0])

function addAnimationAllElements(){
    return setInterval(()=>{
        addAnimation(letras[letras.length - 1])
    }, 10100)
}
let indexRangeAddAnimationAllElements = addAnimationAllElements()
function characterExist(){
    return document.body.contains(container.firstElementChild);
}

function deleteCharacter(){
    container.firstElementChild.parentNode.removeChild(container.firstElementChild)
}

function oneLessLife(){
    --lifeInGame.textContent
}
function addStyleFromLoser(){
    content.innerHTML = `
        <h1>Você perdeu!!</h1>
    `
    clearInterval(indexRangeValidationInGame)
}
function validationInGame(){
    return setInterval(()=>{
        if(characterExist() && container.firstElementChild.style.top.replace("px", "") >= container.offsetHeight){
            deleteCharacter()
            oneLessLife()
            if(lifeInGame.textContent == 0){
                lifeInGame.textContent = 0
                clearInterval(indexRangeAddElement)
                clearInterval(indexRangeAddAnimation)
                clearInterval(indexRangeAddAnimationAllElements)
                addStyleFromLoser()
            }
        }
    }, 200)
}
let indexRangeValidationInGame =  validationInGame()
function score(){
    ++score_container.textContent
}
document.addEventListener('keydown', (event) => {
    if(parseInt(container.firstElementChild.style.top.replace("px","")) < container.offsetHeight && parseInt(container.firstElementChild.style.top.replace("px",""))  > container.offsetHeight - 100){
        if(container.firstElementChild.textContent.toLowerCase() == event.key){
            deleteCharacter()
            score()
        }
    }

})
