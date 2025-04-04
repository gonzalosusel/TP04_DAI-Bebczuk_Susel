const PI = 3.1416;

const sumar = (n1, n2) => n1 + n2;
const restar = (n1, n2) => n1 - n2;

function multiplicar(n1, n2){
    return n1 * n2;
}

function dividir(n1, n2){
    return n2 == 0 ? "División por cero" : n1 / n2;
}

module.exports = {PI, sumar, restar, multiplicar, dividir};