var n = [ 3, 4, 2, 1, 9]

/*for ( var pos = 0; pos < n.length; pos += 1){
    console.log(`A posição ${pos} tem o valor ${n[pos]}`)
}*/

for ( var pos in n){
    console.log(`A posição ${pos} tem o valor ${n[pos]}`)
}
