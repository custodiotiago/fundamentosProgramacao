function quantidadeSalas() {
    var inTotalCandidatos = document.getElementById("inTotalCandidatos")
    var InPessoasPorSala = document.getElementById("InPessoasPorSala");

    var outQuantidadeSalas = document.getElementById("outQuantidadeSalas");

    console.log(inTotalCandidatos);
    console.log(InPessoasPorSala);

    //get value
    var totalCandidatos = Number(inTotalCandidatos.value); 
    var pessoasPorSala = Number(InPessoasPorSala.value); 
    
    //processa
    var quantidadeSalas = totalCandidatos / pessoasPorSala;
    console.log(quantidadeSalas);
    quantidadeSalas = Math.ceil(quantidadeSalas);
    console.log(quantidadeSalas);

    //exibe
    outQuantidadeSalas.textContent = quantidadeSalas;
}

var btnCalcularSalas = document.getElementById("btnCalcularSalas");
btnCalcularSalas.addEventListener("click", quantidadeSalas);