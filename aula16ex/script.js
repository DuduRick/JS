function add(){
    var n = document.querySelector('input#inumber')
    var number = Number(n.value)
    var select = document.querySelector('select#iselect')

    if ( number < 1 || number > 100){
        window.alert('Valor inválido ou já encontrado na lista')
    }

}