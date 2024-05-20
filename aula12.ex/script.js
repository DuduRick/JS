function acessar(){

var date = new Date()
var hours = date.getHours()
var message = window.document.querySelector('div#hours')
var image = window.document.querySelector('img#image')

if ( hours >= 0 && hours < 12 ){
    message.innerHTML = `Agora são ${hours} horas`

}else if( hours >= 12 && hours < 18){
    message.innerHTML = `Agora são ${hours} horas`
    image.src = 'imagens/tarde.png'
    document.body.style.background = '#dd8d47'

}else{
    message.innerHTML = `Agora são ${hours} horas`
    image.src = 'imagens/noite.png'
    document.body.style.background = '#02315d'
}

}