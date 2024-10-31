function verificarTipoNumero () {
    //pega os campos
    var inNumeroInformado = document.getElementById("inNumeroInformado");
    var inOutResultado = document.getElementById("outResultado");

    //pega os valores
    var numeroInformado = Number(inNumeroInformado.value); 
    
    //verifica se é positivo, nulo ou negativo
    var tipoNumero = numeroInformado < 0 ?  "Negativo" : numeroInformado > 0 ? "Positivo" : "Zero / Nulo";
    console.log(tipoNumero);

    //mostra a saída
    inOutResultado.textContent = `O tipo de número é ${tipoNumero}`;
}

var btnCalcularTipo = document.getElementById("btnCalcularTipo");
btnCalcularTipo.addEventListener("click", verificarTipoNumero);