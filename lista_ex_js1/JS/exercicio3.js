function tabuada() {
    var valor = document.getElementsByName('valorT')[0],
        sele = document.getElementById('resTabuada'),
        res;
        valor = valor.value
    if(valor.length == 0){
        alert('Presta atenção, ta sem valor!!!')
    }else{
        sele.innerHTML = ''
        for (var i = 1; i <= 10; i++) {
            res = valor * i;
            var ele = document.createElement('option')
            var resul = document.createTextNode(`${valor}x${i} = ${res}`)
            ele.appendChild(resul)
            sele.appendChild(ele)
            ele.value = `${i}`
        }
    }
}
