function calcularSoma() {
    var numeroA = parseFloat(document.getElementById('numeroA').valeu);
    var numeroB = parseFloat(document.getElementById('numeroB').valeu);
    if (!isNaN(numeroA) && !isNaN(numeroB)) {
        var resultado = numeroA + numeroB;
        document.getElementById('resultado').innerHTML = "A soma de " + numeroA + " e " +numeroB + " e " + resultado;
    } else {
        document.getElementById('resultado').innerHTML = "por favor, digite numero valido.";
    }
}