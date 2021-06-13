var cont = 0;
function intercala() {
    if (cont>0) {
        document.getElementById('resultado').setAttribute('disabled','disabled')
        var string1 = document.getElementById('palavra1').value
        var string2 = document.getElementById('palavra2').value
        var resultado
        var controlador
        var res,j;
        var total = string1.length + string2.length;
        // string1.length+string2.length
        res = string1.substring(0,1).concat(string2.substring(0,1));
        for (let i = 1; i < total; i++) {
            //const element = string1[i];
            j=i+1;
            controlador = string1.substring(i,j)
            // document.write(controlador)
            j=i+1;
            resultado = string2.substring(j-1,j)
            // document.write(resultado)
            res = res.concat(controlador,resultado);
        }
        // document.write(res, res.length)
        document.getElementById('resultado').value = res;        
    }
}
function intercala_cont() {
    cont++;
    intercala();
}