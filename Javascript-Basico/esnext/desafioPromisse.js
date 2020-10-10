const fs = require('fs')
const path = require('path')

const lerArquivo = caminho => {
    return new Promise((resolve,reject) => {
        fs.readFile(caminho, (_,dados) => resolve(dados.toString()))
        //console.log('Depois de ler')
    })
}

const caminho = `${__dirname}/dados.txt` //ou
//const caminho = __dirname + '/dados.txt' //ou
//const caminho = path.join( __dirname, 'dados.txt')
lerArquivo(caminho)
    .then(conteudo => conteudo.split('\r\n'))
    .then(linhas => linhas.join(','))
    .then(conteudo => `O valor final é: ${conteudo}`)
    .then(console.log)