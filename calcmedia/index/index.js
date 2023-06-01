function criaInputs() {

    var numInputs = parseInt(document.getElementById("numeroInputs").value);

    var htmlFinal = "";

    for(var i = 0; i < numInputs; i++) {

        htmlFinal += " <br> <input>     <br>";

    }

    document.getElementById("divInputs").innerHTML = htmlFinal;  

}


function calcularMedia() {

    for(var i = 0; i < numInputs; i++) {

        htmlFinal += "<input class='inputMedia'> <br><br>";
    
    }
    

    var inputs = document.getElementsByClassName("inputMedia");

    var numeroInputs = inputs.length;


    var soma = 0;


    for(var i = 0; i < numeroInputs; i++) {

        soma += parseInt(inputs[i].value);

    }


    document.getElementById("mediaFinal").innerHTML = soma / numeroInputs;


}