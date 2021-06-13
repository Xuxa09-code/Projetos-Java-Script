var cliB = window.document.querySelector("#color_blue");
cliB.addEventListener('click', clicouBlue);
var cliR = window.document.querySelector("#color_red");
cliR.addEventListener('click', clicouRed);
var cliG = window.document.querySelector("#color_green");
cliG.addEventListener('click', clicouGreen);
var cliY = window.document.querySelector("#color_yellow");
cliY.addEventListener('click', clicouYellow);
function clicouBlue() {
    var b = window.document.querySelector("body");
    b.style.backgroundColor = '#000047';
}
function clicouRed() {
    var b = window.document.querySelector("body");
    b.style.backgroundColor = '#c40000';
}
function clicouGreen() {
    var b = window.document.querySelector("body");
    b.style.backgroundColor = '#007247';
}
function clicouYellow() {
    var b = window.document.querySelector("body");
    b.style.backgroundColor = '#efc800';
}