function limpar() {
    document.getElementById("visor").value = "";
}


function addElement(valor) {
    document.getElementById("visor").value += valor;

}

function calcular() {
    var resultado = 0;
    resultado = document.getElementById("visor").value;
    document.getElementById("visor").value = "";
    document.getElementById("visor").value = eval(resultado);
}