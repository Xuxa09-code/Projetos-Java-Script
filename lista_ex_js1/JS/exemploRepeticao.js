function vetor() {
    var vetor = [];
    for (var i = 0; i < 10; i++) {
        vetor[i] = i;
        var ele = document.createElement("P");
        document.querySelector('body').appendChild(ele)
        document.querySelectorAll('p')[i].innerHTML = vetor[i]
    }
    document.querySelector('p').innerHTML = ''
    for (var i = 0; i < 10; i++) {
        vetor[i] = i;
        var ele = document.createTextNode(vetor[i]);
        document.querySelector('p').appendChild(ele);
    }
}
