

var letras = document.getElementsByClassName("character");
var container = document.getElementById("container")
var pos_inicial = 0;
letras[0].style.left = "20px"
letras[0].style.top = `${pos_inicial}px`

setInterval(function () {
    if (parseInt(letras[0].style.top.replace("px","")) < container.offsetHeight) {
        pos_inicial += 10
        letras[0].style.top = `${pos_inicial}px`
    }
}, 500);


