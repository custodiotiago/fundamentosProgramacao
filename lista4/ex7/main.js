var resposta;
var tentativas = 2;

console.log(tentativas);

function verificarMaior() {
    var inPrimeiroNumero = document.getElementById("inPrimeiroNumero");
    var inSegundoNumero = document.getElementById("inSegundoNumero");

    var outResultado = document.getElementById("outResultado");

    var primeiroNumero = Number(inPrimeiroNumero.value);
    var segundoNumero = Number(inSegundoNumero.value);

    if (tentativas >= 0) {

        if (primeiroNumero > segundoNumero) {
            resposta = "O primeiro número é maior que o segundo!";
        }
        else if (segundoNumero > primeiroNumero) {
            resposta = "O segundo número é maior que o primeiro!";
        }
        else {
            resposta = `Os números são iguais! Insira novamente os valores! Você ainda tem ${tentativas}`;
            tentativas = tentativas - 1;
            console.log(tentativas);
        } 
    } 
    else {
        alert("Você esgotou as duas tentativas!");
        return
    }

    outResultado.textContent = resposta;
}    

var btnVerificarMaior = document.getElementById("btnVerificarMaior");
btnVerificarMaior.addEventListener("click", verificarMaior);