var cont = 0;

function soma_produto() {
    cont++;
    var n1 = parseInt(document.getElementById('n1').value),
        n2 = parseInt(document.getElementById('n2').value),
        n3 = parseInt(document.getElementById('n3').value);
    if (cont >= 3) {
        // document.write(n1,n2,n3)
        document.querySelectorAll('td#res')[0].innerHTML = n3 + n2 + n1
        document.querySelectorAll('td#res')[1].innerHTML = n3 * n2 * n1
        document.querySelectorAll('td#res')[2].innerHTML = (n3 + n2 + n1)/3
        document.querySelectorAll('td#res')[3].innerHTML = Math.max(n3,n2,n1)
        document.querySelectorAll('td#res')[4].innerHTML = Math.min(n3,n2,n1)
    }
}