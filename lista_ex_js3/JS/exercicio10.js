number = () => {
    var div = document.querySelectorAll('div')[1];
    var table = document.querySelectorAll('td')[3];
    var number = document.getElementById('number').value;
    div.innerHTML = "";
    if((number >= 0) && (number.length > 0)){
        var centimetros = number * 2.54;
        // var texto = document.createElement('p');
        // <td>${number}</td>
        table.innerHTML = `${centimetros}`;
        // div.insertAdjacentElement('beforeend', texto);
    }else{
        div.innerHTML = "Não Aceitamos numeros negativos ou campo vazio!!!";
    }
}