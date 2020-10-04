const valor = (a,b) => {
    return 'R$ ' + (a+b).toFixed(2).toString().replace(".",",")
}

console.log(valor(0.1,0.2))
