function botao () {

    var elementos = document.getElementsByClassName("elemento");

    for (var i = 0; i < elementos.length; i++) {
        elementos[i].style.backgroundColor = "red";
    }
}
