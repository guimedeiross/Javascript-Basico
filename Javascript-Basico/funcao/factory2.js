const criarProduto = (nome,preco) => {
    return {
        nome,
        preco,
        desconto: 0.1
    }
}


console.log(criarProduto('produto1',24.70))
console.log(criarProduto('produto2',26.00))