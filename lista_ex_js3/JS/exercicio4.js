// Area = pi * raio²
number = () => {
    var div = document.querySelectorAll('div')[1];
    var number = document.getElementById('number').value;
    div.innerHTML = "";
    if(number.length > 0){
        div.style.cssText = `
            color: rgb(154, 221, 242);
        `
        var area = 3.16 * number**2;
        var texto = document.createElement('p');
        texto.textContent = `${number} de raio = ${area.toFixed(4)} de Área`;
        div.insertAdjacentElement('beforeend', texto);
    }else{
        div.style.cssText = `
            color: red;
        `
        div.innerHTML = "<p>Não aceitamos campos vazios!!!</p>"
    }
}