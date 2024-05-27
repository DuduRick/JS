var n = [ 5, 4, 6, 7]
n [4] = 8
n.push(1)
n.sort()

console.log(`${n}`)

console.log(`O vetor tem ${n.length} posições`)

var pos = n.indexOf(9)
if ( pos == -1){
    console.log('O valor não foi encontrado!')
}
else{
    console.log(`O valor está na posição ${pos}`)
}