const number = () => {
    var div = document.querySelectorAll('div')[1];
    var gasolina = document.getElementById('Gasolina').value,
        alcool = document.getElementById('alcool').value;
    div.innerHTML = "";
    if((gasolina.length == 0) || (alcool.length == 0)){
        div.style.color = 'red'
        div.innerHTML = `<p>Não há valor nos campos</p>`;
    }else{
        div.style.color = 'rgb(154, 221, 242)'
        if(alcool <= 0.7*gasolina){
            var resultado = document.createElement('p');
            resultado.innerHTML = `O preco do Alcool compensa mais!!!`
            div.insertAdjacentElement('beforeend', resultado);
        }else{
            var resultado = document.createElement('p');
            resultado.innerHTML = `O preco da Gasolina compensa mais!!!`
            div.insertAdjacentElement('beforeend', resultado);
        }
    }
}