const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const genero = genero => genero.genero === 'F'
const pais = pais => pais.pais === 'China'
const MenorSalario = (func,funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual
}

axios.get(url).then(response => {
    const funcionarios = response.data
    const func = funcionarios.filter(pais).filter(genero).reduce(MenorSalario)
    console.log(func)    
})