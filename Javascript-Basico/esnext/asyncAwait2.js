const esperarPor = (tempo = 2000) => {
    return new Promise((resolve,reject) => {
        setTimeout(() => resolve(), tempo)
    })
}

/*esperarPor()
    .then(() => console.log('Executando promisse 1'))
    .then(esperarPor)
    .then(() => console.log('Executando promisse 2'))
    .then(esperarPor)
    .then(() => console.log('Executando promisse 3'))*/


const retornarValor = () => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(10), 5000)
    })
}

const retornarValorRapido = async () => {
    return 20
}

const executar = async () => {

    let valor = await retornarValorRapido()

    await esperarPor(1500)
    console.log(`Async/Await ${valor}`)
    
    await esperarPor(1500)
    console.log(`Async/Await ${valor + 1}`)

    await esperarPor(1500)
    console.log(`Async/Await ${valor + 2}`)

    return valor + 3
}

const executarDeVerdade = async () => {
    const valor = await executar()
    console.log(valor)
}

executarDeVerdade()