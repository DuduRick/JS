function fatorial ( number ){
    var fat = 1
    for ( var n = number; n > 1; n -= 1){
        fat *= n
    }
    return fat
    
}
console.log(fatorial(3))