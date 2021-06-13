    var inf = new Array(10);
    inf[1] = document.getElementById('cpf')
    inf[2] = document.getElementById('cnpj')
    inf[3] = document.getElementById('nascimento')
    // inf[4] = document.getElementById('inf4').value
    function pes(){
        inf[1].removeAttribute('disabled');//deixa campo CPF acessivel
        inf[3].removeAttribute('disabled');//deixa campo data de nascimento acessivel
        inf[2].setAttribute('disabled','disabled');//deixa campo cnpj inacessivel
        inf[2].value = null
    }
    function pes2(){
        inf[2].removeAttribute('disabled');//deixa campo cnpj acessivel
        inf[1].setAttribute('disabled','disabled');//deixa campo CPF inacessivel
        inf[3].setAttribute('disabled','disabled');//deixa campo data de nascimento inacessivel
        inf[1].value = null
        inf[3].value = null
    }