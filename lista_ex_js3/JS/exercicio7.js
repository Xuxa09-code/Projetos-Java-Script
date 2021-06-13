// Farenheit  =  Celsius  × 1,8 + 32
number = () => {
    var div = document.querySelectorAll('div')[1];
    var Celsius = document.getElementById('Celsius').value;
    div.innerHTML = "";
    if(Celsius.length > 0){
        div.style.cssText = `
            color: rgb(154, 221, 242);
        `
        var Farenheit = Celsius * 1.8 + 32;
        var texto = document.createElement('p');
        texto.textContent = `${Celsius}° Celsius = ${Farenheit.toFixed(4)}° Farenheit`;
        div.insertAdjacentElement('beforeend', texto);
    }else{
        div.style.cssText = `
            color: red;
        `
        div.innerHTML = "<p>Não aceitamos campos vazios!!!</p>"
    }
}