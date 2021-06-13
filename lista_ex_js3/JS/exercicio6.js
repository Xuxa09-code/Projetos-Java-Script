number = () => {
    var div = document.querySelectorAll('div')[1];
    var table = document.querySelectorAll('tr')[1];
    var number = document.querySelectorAll('input');
    div.innerHTML = "";
    if((number[0].value.length > 0) && (number[1].value.length > 0) && (number[2].value.length > 0) && (number[3].value.length > 0)){
        var media = 0;
        for (let i = 0; i < 4; i++) {
            media += Number(number[i].value);
            console.log(media)
        }
        media = media/4;
        // var texto = document.createElement('p');
        // for (let i = 0; i < 4; i++) {
        //     table.innerHTML += `<td>${number[i].value}</td>`;
        // }
        var mediT = document.querySelectorAll('td');
        mediT[9].innerHTML = ""
        mediT[9].innerHTML = `<td>${media}</td>`;
        // div.insertAdjacentElement('beforeend', texto);
    }else{
        div.style.color = 'red'
        div.innerHTML = "Não Aceitamos campo vazio!!!";
    }
}