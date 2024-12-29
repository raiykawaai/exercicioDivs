const divP = document.getElementById("divP")
const divS = document.getElementById("divS")
const divT = document.getElementById("divT")
const divQ = document.getElementById("divQ")


function mudaCorDasDivs(){

let styledivP = window.getComputedStyle(divP)
let styledivS = window.getComputedStyle(divS)
let styledivT = window.getComputedStyle(divT)
let styledivQ = window.getComputedStyle(divQ)

divP.style.backgroundColor = mudaDeCorDeFundo(styledivP.backgroundColor)
divS.style.backgroundColor = mudaDeCorDeFundo(styledivS.backgroundColor)
divT.style.backgroundColor = mudaDeCorDeFundo(styledivT.backgroundColor)
divQ.style.backgroundColor = mudaDeCorDeFundo(styledivQ.backgroundColor)


}

function mudaDeCorDeFundo(div) {
console.log(div)
switch(div){
    case "rgb(255, 128, 0)":
        return "rgb(0, 204, 0)"
    case "rgb(0, 204, 0)":
        return "rgb(0, 0, 51)"
    case  "rgb(0, 0, 51)":
        return "rgb(102, 0, 204)"
    case "rgb(102, 0, 204)":
        return "rgb(255, 128, 0)"
}



}

