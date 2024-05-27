function oddEven(number){
    if ( number % 2 == 0){
        return 'PAR!'
    }
    else{
        return 'IMPAR!'
    }
}
var res = oddEven(9)
console.log(res)