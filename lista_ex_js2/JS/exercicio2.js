var a = document.querySelector("body");
var cliB = window.document.getElementsByTagName('a')[0];
cliB.addEventListener('mouseover', clicouBlue);
var cliR = window.document.getElementsByTagName('a')[1];
cliR.addEventListener('mouseover', clicouRed);
var cliG = window.document.getElementsByTagName('a')[2];
cliG.addEventListener('mouseover', clicouGreen);
var cliY = window.document.getElementsByTagName('a')[3];
cliY.addEventListener('mouseover', clicouYellow);

function clicouYellow() {
    a.style.backgroundColor = "#efc800";
}
function clicouGreen() {
    a.style.backgroundColor = "#007247";
}
function clicouRed() {
    a.style.backgroundColor = '#c40000';
}
function clicouBlue() {
    a.style.backgroundColor = '#000047';
}