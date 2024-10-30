var qtdeTentativas = 0; // Inicializa qtdeTentativas

function calcularDiferenca() {
    var inPrimeiroInteiro = document.getElementById("inPrimeiroInteiro");
    var inSegundoInteiro = document.getElementById("inSegundoInteiro");

    var outDiferenca = document.getElementById("outDiferenca");

    var primeiroInteiro = Number(inPrimeiroInteiro.value);
    var segundoInteiro = Number(inSegundoInteiro.value);  

    // Valida se realmente são números inteiros
    if (!Number.isInteger(primeiroInteiro) || !Number.isInteger(segundoInteiro)) {
        alert("Números não são inteiros!");
        qtdeTentativas++;
        return;
    }

    // Valida se o segundo número é menor que o primeiro
    if (segundoInteiro >= primeiroInteiro) {
        alert("Segundo número deve ser menor que o primeiro!");
        qtdeTentativas++;
        return;
    }

    // Verifica a quantidade de tentativas
    if (qtdeTentativas > 2) {
        alert("Acabaram as tentativas!!!!");        
        return;
    }

    // Calcula a diferença
    var diferenca = primeiroInteiro - segundoInteiro;

    // Imprime o resultado
    outDiferenca.textContent = `A diferença é ${diferenca}`;
}

var btnCalcularDiferenca = document.getElementById("btnCalcularDiferenca");
btnCalcularDiferenca.addEventListener("click", calcularDiferenca);
