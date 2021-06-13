    let cont = 0, vetor = [];
function vereficacao(n) {
    if (vetor.indexOf(n) == -1) {
        return true;
    }else {
        return false;
    }
}
function registros() {
    var n = Number(document.getElementsByName('valorT')[0].value);
    if (n.length == 0 || n<0 || n>100 || !vereficacao(n)) {
        alert('Deu errado aí mane, oia direito')
    }else {
        vetor[cont] = n;
        var sele = document.getElementById('resTabuada'),
            local = document.createElement('option'),
            texto = document.createTextNode(`O valor ${cont+1} é ${vetor[cont]}`);
        local.appendChild(texto);
        sele.appendChild(local);
        sele.value = cont;
        cont++;
    }
}
function soma() {
    let soma = 0;
    for (var i = 0; i < vetor.length; i++) {
        soma = soma + vetor[i];
    }
    return soma;
}
function produto() {
    let produto = 1;
    for (var i = 0; i < vetor.length; i++) {
        produto = produto * vetor[i];
    }
    return produto;
}
function maximo() {
    max = 0;
    for (var i = 0; i < vetor.length; i++) {
        if(vetor[i]>max){
            max = vetor[i];
        }
    }
    return max;
}
function calcular() {
    let s, p, m, t, max;
    s = soma();
    t = cont;
    m = s/cont;
    p = produto();
    max = maximo();
    var lugar = document.querySelector('p'),
        resultado = [];
    lugar.innerHTML = '';
    lugar.innerHTML += `<p>O total de elementos é ${t}<p>`
    lugar.innerHTML += `<p>A soma dos elementos é ${s}<p>`
    lugar.innerHTML += `<p>O produto dos elementos é ${p}<p>`
    lugar.innerHTML += `<p>A media dos elementos é ${m.toFixed(2)}<p>`
    lugar.innerHTML += `<p>O maior dos elementos é ${max}<p>`

    var a = lugar.value.replace(/\n/g,'<br>');
    document.querySelector('p').innerHTML = a;
}
