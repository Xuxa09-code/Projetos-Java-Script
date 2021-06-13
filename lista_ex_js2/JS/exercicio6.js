function word() {
    var normal
    normal = document.getElementById('palavra').value
    var invertida = normal.split('').reverse().join('');
     if(normal == invertida)
        document.querySelector('p').innerHTML = `A palavra ${invertida} é uma Palíndroma`;
        // document.write(`A palavra ${invertida} é uma Palíndroma`)
    else
        // document.write(`A palavra ${normal} NÃO é uma Palíndroma`)
        document.querySelector('p').innerHTML = `A palavra ${normal} NÃO é uma Palíndroma`;
}