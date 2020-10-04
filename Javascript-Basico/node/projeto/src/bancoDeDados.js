module.exports = { SalvarProduto, getproduto, getProdutos, deleteProduto}

const sequence = {
    _id: 1,
    get id() { return this._id++ }
}

const produtos = {}

function SalvarProduto(produto) {
    if (!produto.id) {
        produto.id = sequence.id
    }
    produtos[produto.id] = produto
    return produto
}

function getproduto(id) {
    return produtos[id] || {}
}

function deleteProduto(id) {
    const produto = produtos[id]
    delete produtos[id]
    return produto
}

function getProdutos() {
    return Object.values(produtos)
}