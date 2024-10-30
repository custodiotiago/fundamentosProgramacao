function calcularRestoDivisao(n1, n2) {
    let restoDivisao = n1 % n2;
    console.log(restoDivisao);
    return restoDivisao;
}

function verificarTipoNumero (restoDivisao) {
    let resp;
    if (restoDivisao = 0) {
        resp = "O número é par!"
        console.log("Caiu no par!")
    }
    else {
        resp = "O número é ímpar!"
        console.log("Caiu no impar!")
    }
    return resp;
}