function calcularMedia(nota1, nota2) {
    return (nota1 + nota2) / 2;
}

function definirSituacao(media) {
    let resp;
    if (media >= 7) {
        resp = "Aprovado"
    }
    else if (media >= 4 && media < 7) {
        resp = "Em exame"
    }
    else {
        resp = "Reprovado"
    }
    return resp;
}