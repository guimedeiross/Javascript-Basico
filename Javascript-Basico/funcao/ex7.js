const bhaskara = (ax2,bx,c) => {
    const valores = []
    const delta = bx**2 - 4*ax2*c
    Math.sign(bx) === -1 ? bx = bx : bx = -bx
    const x1 = (bx + Math.sqrt(delta))/2*ax2
    const x2 = (bx - Math.sqrt(delta))/2*ax2
    valores.push(x1,x2)
    return valores
}
for (let i in bhaskara(1,8,-9)) {
    console.log(`x${Number(i)+1} = ${bhaskara(1,8,-9)[i]}`)
}