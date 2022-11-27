

var letras = document.getElementsByClassName("character");
var container = document.getElementById("container")
var pos_inicial = 0;
var character_one = document.createElement("div");
var inicial_left = getRandomInt(container.offsetWidth - character_one.offsetWidth);

character_one.innerHTML = geraStringAleatoria(1)
character_one.classList.add("character")

container.appendChild(character_one)

character_one.style.left = `${inicial_left}px`
character_one.style.top = `${pos_inicial}px`

setInterval(function () {
    if (parseInt(letras[0].style.top.replace("px","")) < container.offsetHeight) {
        pos_inicial += 10
        letras[0].style.top = `${pos_inicial}px`
    }
}, 500);

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