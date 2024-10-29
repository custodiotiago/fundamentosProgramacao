function calcularTroco() {
    //pega os campos
    var inValorCompra = document.getElementById("inValorCompra");
    var inValorRecebido = document.getElementById("inValorRecebido");

    //pega os valores dos campos
    var valorCompra = parseFloat(inValorCompra.value);
    var valorRecebido = parseFloat(inValorRecebido.value);

    //faz a conta em questão
    var outValorTroco = valorRecebido - valorCompra

    //mostra os dados no html
    var valorTroco = document.getElementById("outValorTroco");

    valorTroco.textContent = "O valor do troco é " + outValorTroco


}

var btnCalcularTroco = document.getElementById("btnCalcularTroco");
btnCalcularTroco.addEventListener("click", calcularTroco)