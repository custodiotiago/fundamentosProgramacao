function pesoIdeal() {
    var inAltura = document.getElementById("inAltura");
    var inSexo  = document.getElementById("inSexo");

    var outPesoIdeal = document.getElementById("outPesoIdeal");

    var altura = Number(inAltura.value); 
    var sexo = inSexo.value.toUpperCase();
    var pesoIdeal;
    
    if (sexo === "F") {
        pesoIdeal =  62.1 * altura -44.7
    }
    else if (sexo === "M"){
        pesoIdeal = 72.7 * altura -58;
    }
    else {
        pesoIdeal = 68.5 * altura -51
    }

    outPesoIdeal.textContent = `O seu peso ideal é... ${pesoIdeal.toFixed(2)}`
}

var btnPesoIdeal = document.getElementById("btnPesoIdeal");
btnPesoIdeal.addEventListener("click", pesoIdeal);

