//funcao sem retorno
function imprimirSoma(a, b = 0) {
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2)

//funcao com retorno

function soma(a, b = 0) {
    return a + b
}

console.log(soma(2, 4))
console.log(soma(2))