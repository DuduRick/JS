function contar(){

    var start = document.querySelector('input#numberstart')
    var end = document.querySelector('input#numberend')
    var step = document.querySelector('input#numberstep')
    var msg = document.querySelector('p#msg')

    var Nstart = Number(start.value)
    var Nend = Number(end.value)
    var Nstep = Number(step.value)

    msg.innerHTML = 'Contando:'

    for ( var c = Nstart; c = Nend; c = Nstep){
        msg.innerHTML += `${c}`
        if (Nend >= Nstart){
            alert('[ERRO]...Números inválidos')
        }
    }


}