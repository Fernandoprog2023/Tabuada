function calcular( ) {
    if (document.getElementById("tabuando").value == ""  && document.getElementById("qtdvezes").value == "") {
       alert("Preencha o numero da Tabuda e Quantidade de vezes para Calcular a Tabuada!");
    } 
    else if (document.getElementById("tabuando").value == "" ) {
        alert("Prencha o numero da Tabuada");
    }
    else if (document.getElementById("qtdvezes").value == "") {
        alert("Preencha o número de quantidade de vezes para o cálculo");
    }  
    else {
        let numTab = parseInt(document.getElementById("tabuando").value);
        let numQtd = parseInt(document.getElementById("qtdvezes").value);
        let elemento = document.getElementById("saida");
        let resultado;
        elemento.innerHTML=" ";
        for (let i=0; i <= numQtd; i++) {
            resultado = numTab*i;
            let paragrafo = document.createElement('p');
            paragrafo.textContent=(numTab + " X " + i + " = " + resultado);
            elemento.appendChild(paragrafo);
        }
    }
}