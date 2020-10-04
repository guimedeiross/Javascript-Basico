const jurosSimples = (capIni,txjur,tmpapp) => {
    return capIni*(txjur/100)*tmpapp
}

const jurosComposto = (capIni,txjur,tmpapp) => {
    
    return `R$ ${(capIni * ( (1+(txjur/100)) ** tmpapp)).toFixed(2).toString().replace(".",",")}`
}

const jurosRecebidoComposto = (capIni,txjur,tmpapp) => `R$ ${(capIni * ( (1+(txjur/100)) ** tmpapp) - capIni).toFixed(2).toString().replace(".",",")}`

console.log(jurosSimples(1200,2,15))
console.log(jurosComposto(5000,1,6))
console.log(jurosRecebidoComposto(5000,1,6))