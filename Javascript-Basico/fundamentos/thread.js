const Filial = {
    codigoFil: 1,
    nomeFil: 'filial'
}

const Venda = {
    numVenda: 1,
    qtdeVenda: 1,
    vlrVenda: 200.50
}

const Produto = {
    codigoProd: 1,
    nomeProd: 'produto',
    qtdeEstoque: 100
}

teste = () => {
    let codfilial = []
    let nomefilial = []
    for(let i=0; i<=20;i++) {
        codfilial[i] = Filial.codigoFil
        codfilial[i] = i
        nomefilial[i] = Filial.nomeFil
        nomefilial[i] = `filial${i}`
    }
    filial = codfilial.concat(nomefilial)
    return filial
}

console.log(teste())