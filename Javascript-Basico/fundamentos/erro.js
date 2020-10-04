function tratarErroeLancar(erro) {
    //throw new Error('...')
    //throw 10
    //throw true
    //throw 'mensagem'
    throw {
        nome: erro.name,
        msg: erro.mesage,
        date: new Date
    }
}
function imprimirNomeGritando(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {
        tratarErroeLancar(e) 
    } finally {
        console.log('final')
    }
}

const obj = { nome: 'Roberto' }

imprimirNomeGritando(obj)