const qualTriangulo = (x,y,z) => {

    if (x === y && x===z) {
        return console.log('Triângulo Equilátero')
    } else if (x === y || x === z || y === z) {
        return console.log('Triângulo Isóceles')
    } else {
        console.log('Triângulo Escaleno')
    }
}

qualTriangulo(5,5,7)