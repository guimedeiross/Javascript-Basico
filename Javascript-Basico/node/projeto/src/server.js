const porta = 3003
const express = require('express')
const bancoDeDados = require('./bancoDeDados')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/produtos', (req, res, next) => {
    res.send(bancoDeDados.getProdutos())
})

app.get('/produtos/:id', (req,res, next) => {
    res.send(bancoDeDados.getproduto(req.params.id))
})

app.post('/produtos', (req,res,next) => {
    const produto = bancoDeDados.SalvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) // JSON
})

app.put('/produtos/:id', (req,res,next) => {
    const produto = bancoDeDados.SalvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) // JSON
})

app.delete('/produtos/:id', (req,res,next) => {
    const produto = bancoDeDados.deleteProduto(req.params.id)
    res.send(produto)  // JSON
})

app.listen(porta, () => {
    console.log(`Servidor executando na porta ${porta}`)
})