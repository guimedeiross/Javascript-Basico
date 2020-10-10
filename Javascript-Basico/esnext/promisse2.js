

/*setTimeout(() => {
    console.log('Execuntando callback...')

    setTimeout(() => {
        console.log('Execuntando callback...')

        setTimeout(() => {
            console.log('Execuntando callback...')
        }, 2000)

    }, 2000)

}, 2000) // callback hell ou codigo haduken
*/
const esperarPor = (tempo = 2000) => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log('Executando promisse...')
            resolve()
        }, tempo)
    })
}

esperarPor(3000)
.then(() => esperarPor())
.then(esperarPor)