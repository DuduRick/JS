function contar(){

    var start = document.querySelector('input#numberstart')
    var end = document.querySelector('input#numberend')
    var step = document.querySelector('input#numberstep')
    var msg = document.querySelector('p#msg')

    var Nstart = Number(start.value)
    var Nend = Number(end.value)
    var Nstep = Number(step.value)

    if ( start.value.length == 0 || end.value.length == 0 || step.value.length == 0){
        alert('[ERRO]...Dados inválidos ')}

    else if ( Nstart >= Nend){
        alert('[ERRO]...Números inválidos')
    }
    else{
        msg.innerHTML = 'Contando: '
        while ( Nstart <= Nend){
            msg.innerHTML += `${Nstart}  `
            Nstart += Nstep
        }
    }

}