"use strict"

this.name = "Lallier"
this.idade = 25

function nameIdade(this) {
    console.log(this.idade);
}
nameIdade.call(this.name)
