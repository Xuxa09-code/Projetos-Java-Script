const number = () => {
    var div = document.querySelectorAll('div')[1];
    var inicio = document.getElementById('inicio').value,
        fim = document.getElementById('fim').value;
    if((inicio.length == 0) || (fim.length == 0)){
        div.style.color = 'red'
        div.innerHTML = `<p>Não há valor nos campos</p>`;
    }else{
        if((inicio>=0) && (fim>=0) && !(fim == inicio)){
            div.innerHTML = '';
            div.style.cssText = `
                color: rgb(154, 221, 242);
                font-size: 20px;
            `;
            // div.style.color = blue
            div.innerHTML += `<p>`
            for (let i = inicio; i <= fim; i++) {
                div.innerHTML += `${i} `;
            }
            div.innerHTML += `</p>`
        }else{
            div.style.cssText = `
                color: red;
            `;
            div.innerHTML = `<p>ATENCAO: Não Aceitamos valores iguais ou valores negativos!!!</p>`;
        }
    }
}