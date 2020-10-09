const tecnologias = new Map()
tecnologias.set('react', { framework: false })
tecnologias.set('angular', { framework: true })

console.log(tecnologias.get('react').framework)

const chavesVariada = new Map([
    [function () { }, 'Função'],
    [{}, 'Objeto'],
    [123, 'Número'],
])

chavesVariada.forEach((vl, ch) => {
    console.log(ch, vl)
})

console.log(chavesVariada.has(123))
chavesVariada.delete(123)
console.log(chavesVariada.has(123))
console.log(chavesVariada.size)

chavesVariada.set(123, 'a')
chavesVariada.set(123, 'b')
chavesVariada.set(456, 'b')
console.log(chavesVariada)