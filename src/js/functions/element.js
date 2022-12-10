let inicial_top;

function createElement() {
    let randomCharacter = geraStringAleatoria(1)
    
    let element = document.createElement("div")
    element.innerHTML = randomCharacter
    element.classList.add("character")
    element.setAttribute('data-character', randomCharacter)
    return element
    
}

function addElementInPage(element){
    container.appendChild(element)
    var inicial_left = getRandomInt(container.offsetWidth - element.offsetWidth);
    inicial_top = 0;
    
    element.style.left = `${inicial_left}px`
    element.style.top = `${inicial_top}px`
}

function geraStringAleatoria(tamanho) {
    var stringAleatoria = '';
    var caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    for (var i = 0; i < tamanho; i++) {
        stringAleatoria += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
    return stringAleatoria;
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

export {createElement, addElementInPage};