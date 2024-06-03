function add(){
    let n = document.querySelector('input#inumber')
    let number = Number(n.value)
    let select = document.querySelector('select#iselect')

    if ( number < 1 || number > 100 ){
        window.alert('Valor inválido ou já encontrado na lista')
    }
    else{

    let itens = document.createElement('option')
    itens.text = `Valor ${number} adicionado`
    select.appendChild(itens)
    }

    let list = []

}
function finish(){
    
}