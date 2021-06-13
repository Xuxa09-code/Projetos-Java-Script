var date = new Date();
var hora = date.getHours();
// document.querySelector('').innerHTML = hora
if ((hora <= 12)&&(hora >= 5)) {
    document.querySelector('body').style.backgroundColor = '#fad0dd'
    document.querySelector('img').src = 'IMG/manhazinha.jpg'
    document.querySelector('h3').innerHTML = 'Bom Dia!'
}else{
    if ((hora <= 18)&&(hora > 12)) {
        document.querySelector('body').style.backgroundColor = '#ffbc40'
        document.querySelector('img').src = 'IMG/tardezinha.jpg'
        document.querySelector('h3').innerHTML = 'Boa Tarde!'
    }else {
        document.querySelector('body').style.backgroundColor = 'black'
        document.querySelector('img').src = 'IMG/noitezinha.jpg'
        document.querySelector('h3').innerHTML = 'Boa Noite!'
    }
}
