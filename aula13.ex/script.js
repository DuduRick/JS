function verific(){

    var date = new Date()
    var year = date.getFullYear()
    var msg = window.document.querySelector('p#message')
    var img = window.document.querySelector('img#image')
    var acesso = window.document.querySelector('input#year')
    var sex = window.document.getElementsByName('sex')
    var n = Number(acesso.value)
    var idade = year - n
    var genero = ''

    if ( sex[0].checked ){
        genero = 'Homem'
    }else if ( sex[1].checked){
        genero = 'Mulher'
    }

    if ( idade >= 1 && idade <= 12 && genero == 'Homem'){
    msg.innerHTML = `Detectamos <strong>${genero}</strong> com ${idade} anos`
    img.src = 'imagens/menino.png'

    }else if( idade >= 1 && idade <= 12 && genero == 'Mulher'){
        msg.innerHTML = `Detectamos <strong>${genero}</strong> com ${idade} anos`
        img.src = 'imagens/menina.png'

    }else if( idade >= 13 && idade <= 29 && genero == 'Homem'){
        msg.innerHTML = `Detectamos <strong>${genero}</strong> com ${idade} anos`
        img.src = 'imagens/homem.png'

    }else if( idade >= 13 && idade <= 29 && genero == 'Mulher'){
        msg.innerHTML = `Detectamos <strong>${genero}</strong> com ${idade} anos`
        img.src = 'imagens/mulher.png'

    }else if ( idade >= 30 && idade <= 59 && genero == 'Homem' ){
        msg.innerHTML = `Detectamos <strong>${genero}</strong> com ${idade} anos`
        img.src = 'imagens/adulto.png'

    }else if( idade >= 30 && idade <= 59 && genero == 'Mulher' ){
        msg.innerHTML = `Detectamos <strong>${genero}</strong> com ${idade} anos`
        img.src = 'imagens/adulta.png'

    }else if ( idade >= 60 && idade <= 124 && genero == 'Homem' ){
        msg.innerHTML = `Detectamos <strong>${genero}</strong> com ${idade} anos`
        img.src = 'imagens/idoso.png'

    }else if( idade >= 60 && idade <= 124 && genero == 'Mulher'){
        msg.innerHTML = `Detectamos <strong>${genero}</strong> com ${idade} anos` 
        img.src = 'imagens/idosa.png'
    }
    else{
        alert('[ERRO...] digite um ano válido')
    }
    
}