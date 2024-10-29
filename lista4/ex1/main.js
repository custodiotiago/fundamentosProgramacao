function calcularRestoDivisao(n1, n2) {
    let restoDivisao = n1 % n2;
    return restoDivisao;
}

function verificarTipoNumero (restoDivisao) {
    let resp;
    if (restoDivisao === 0) {
        resp = "O número é par!"
    }
    else {
        resp = "O número é ímpar!"
    }
    return resp;
}