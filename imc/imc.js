
const calcularButton = document.getElementById('calcular');
let resultado = document.getElementById("resultado");

calcularButton.addEventListener("click", () => {
    const peso = document.getElementById('peso').value;
    const altura = document.getElementById('altura').value;
    resultado = peso/(altura*altura)
    resultado = resultado.toFixed(2);
    document.getElementById("resultado").innerHTML = "Seu resultado é: "+resultado;

    if(resultado < 18.5) {
        document.getElementById("categoria").innerHTML = "Abaixo do peso"
    }
    else if(resultado >= 18.5 && resultado < 24.9){
        document.getElementById("categoria").innerHTML= "Peso normal"
    }
    if(resultado >24.9) {
        document.getElementById("categoria").innerHTML = "Peso normal"
    }
    if(resultado > 29.9) {
        document.getElementById("categoria").innerHTML = "Sobrepeso"
    }
    if(resultado > 34.9) {
        document.getElementById("categoria").innerHTML = "Obesidade Grau 1"
    }
    if(resultado > 39.9) {
        document.getElementById("categoria").innerHTML = "Obesidade Grau 2"
    }
    if(resultado > 40) {
        document.getElementById("categoria").innerHTML = "Obesidade Grau 3"
    }

});


