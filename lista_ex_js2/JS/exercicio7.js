function inverte() {
    var nome = new Array(10);
    var i,j;
    for(i=0;i<10;i++){
        nome[i] = new Array(100)
    }
    nome[0] = document.getElementById('nome0').value
    nome[1] = document.getElementById('nome1').value
    nome[2] = document.getElementById('nome2').value
    nome[3] = document.getElementById('nome3').value
    nome[4] = document.getElementById('nome4').value
    document.getElementById('nome4').value = nome[0];
    document.getElementById('nome3').value = nome[1];
    document.getElementById('nome2').value = nome[2];
    document.getElementById('nome1').value = nome[3];
    document.getElementById('nome0').value = nome[4];

}