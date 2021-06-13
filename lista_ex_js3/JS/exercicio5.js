number = () => {
    var div = document.querySelectorAll('div')[1];
    var farenheit = document.getElementById('farenheit').value;
    div.innerHTML = "";
    if(farenheit.length > 0){
        div.style.cssText = `
            color: rgb(154, 221, 242);
        `
        var celsius = 5 * (farenheit - 32) / 9;
        var texto = document.createElement('p');
        texto.textContent = `${farenheit}° Farenheit = ${celsius.toFixed(4)}° Celsius`;
        div.insertAdjacentElement('beforeend', texto);
    }else{
        div.style.cssText = `
            color: red;
        `
        div.innerHTML = "<p>Não aceitamos campos vazios!!!</p>"
    }
}