number = () => {
    var div = document.querySelectorAll('div')[1];
    var number = document.getElementById('number').value;
    if(number.length > 0){
        div.innerHTML = ""
        div.style.cssText = `
            color: rgb(154, 221, 242);
        `
        var texto = document.createElement('p');
        texto.textContent = `O número informado foi ${number}`;
        div.insertAdjacentElement('beforeend', texto)
    }else{
        div.style.cssText = `
            color: red;
        `
        div.innerHTML = "<p>Não aceitamos campos vazios!!!</p>"
    }
}