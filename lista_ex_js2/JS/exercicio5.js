function senhaFuncao (){
    var senha = '';
    var Confirme = '';
    var login = '';
    texto = document.getElementById('senha').value
    Confirme = document.getElementById('senha_cfm').value
    login = document.getElementById('Login').value
    var dim_s = texto.length;
    var dim_c = Confirme.length;
    var dim_l = login.length;
    //document.querySelector('p').innerHTML = dim_l;
    if ((dim_c == dim_s) && (dim_l > 0) && (dim_s > 5) && (dim_c < 11)) {
        document.querySelector('p').innerHTML = 'Cadastro concluido com sucesso';
    }else{
        document.querySelector('p').innerHTML = 'Senha com menos de 6 caracteres ou com mais de 11 não serão aceitas<br> Ou campo confirmar senha diferente de senha<br>Verefique!!!';
    }
    // document.write(texto)
    //String.length
}
