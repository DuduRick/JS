function calc(){

    var number = document.querySelector('input#inumber') // acesso do input de números
    var tab = document.querySelector('select#iselect') // acesso do select
    var Nnumber = Number(number.value) // transformando em número o valor do input

    if( number.value.length == 0){
        window.alert('[ERRO]...Digite um número') // se não for digitado nada no input, retorna um ERRO

    }else{ 
        tab.innerHTML = '' // select da tabela começa vazio
        var n = 1 
    while ( n <= 10){

    var item = document.createElement('option') // criei um option pro select
    item.text = `${Nnumber} x ${n} = ${Nnumber * n}` // coloquei texto no option
    tab.appendChild(item) // coloquei o option no select da tabela
    n += 1
    }
    }

}
