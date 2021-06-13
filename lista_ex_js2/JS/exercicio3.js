function escolha() {
    var a = document.querySelector("body");
    var select = document.getElementById('cores');
    var value = select.options[select.selectedIndex].value;
    console.log(value); // pt
    switch(value){
        case 'b':
            a.style.backgroundColor = 'violet'
        break;
        case 'r': 
            a.style.backgroundColor = 'rgb(80, 209, 226)'
        break;
        case 'g': 
        a.style.backgroundColor = 'purple'
        break;
        case 'y': 
        a.style.backgroundColor = 'blue'
        break;
    }
}