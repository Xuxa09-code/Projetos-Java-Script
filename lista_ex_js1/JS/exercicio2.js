function verificacao() {
    var idade = document.getElementById('idade').value,
        sexo = document.getElementsByName('Sexo'),
        data = new Date(),
        ano = data.getFullYear(),
        genero = '',
        imagemM = '',
        imagemF = '';
    if((ano <= idade)||(idade == 0)){
        alert(`Como Tu Tá aqui`)
    }else{
        if(sexo[0].checked){
            genero = 'M'
        }else if(sexo[1].checked){
            genero = 'F'
        }
        idade = ano - idade;
        if (idade<=2) {
            imagemM = 'IMG/bebeM.jpg'
            imagemF = 'IMG/bebeF.jpeg'
        }
        if (idade>2 && idade <10) {
            imagemM = 'IMG/criancaM.jpeg'
            imagemF = 'IMG/CriançasF.jpg'
        }
        if ((idade>=10) && (idade < 16)) {
            imagemM = 'IMG/adolescenteM.gif'
            imagemF = 'IMG/adolescenteF.jpg'
        }
        if (idade>=16 && idade < 25 ) {
            imagemM = 'IMG/20anosM.jpg'
            imagemF = 'IMG/20anosF.jpg'
        }
        if (idade>=25 && idade < 60 ) {
            imagemM = 'IMG/50anosM.jpeg'
            imagemF = 'IMG/50anosF.jpg'
        }
        if (idade>=60) {
            imagemM = 'IMG/veioM.png'
            imagemF = 'IMG/veiaF.jpeg'
        }
        if(genero == 'M')
            document.querySelector('img').src = imagemM;
        else {
            document.querySelector('img').src = imagemF;
        }
        var lugar = document.createElement("P"),
            texto = document.createTextNode(`Sua idade é ${idade} anos`);
        lugar.appendChild(texto);
        document.querySelector('div').appendChild(lugar);
        // document.querySelector('h3').innerHTML =

    }
}
