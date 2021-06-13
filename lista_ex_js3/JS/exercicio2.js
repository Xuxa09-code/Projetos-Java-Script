number = () => {
    var div = document.querySelectorAll('div')[1];
    var number = document.getElementById('number').value;
    div.innerHTML = "";
    if(number.length > 0){
        div.style.cssText = `
            color:  rgb(154, 221, 242);
        `
        var centimetros = number*100;
        var texto = document.createElement('p');
        texto.textContent = `${number} Metros = ${centimetros} Centimetros`;
        div.insertAdjacentElement('beforeend', texto);
    }else{
        div.style.cssText = `
            color: red;
        `
        div.innerHTML = "<p>Não aceitamos campos vazios!!!</p>"
    }
}