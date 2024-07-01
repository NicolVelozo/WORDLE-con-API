const API = "https://random-word-api.herokuapp.com/word?number=10&length=5&lang=es"
let diccionario = ["APPLE", "ANGEL", "MOUSE", "PLATE","PLACE"]
let random= Math.random()*diccionario.length //numero aleatorio entre 0 y 5
random= Math.floor (random)
let palabrasecreta = diccionario [random]

fetch(API)
.then((response)=>{
    response.json()
    .then((data)=>{
        palabrasecreta = data [0].toUpperCase() 
console.log(palabrasecreta)
})}).catch(()=> {
 console.log ("ERROR")
})

let oportunidades = 6

let button = document.getElementById  ("guess-button")
let input = document.getElementById("guess-input")
let grid = document.getElementById("grid")

button.addEventListener("click", enter)

function enter(){

    let intento = input.value.toUpperCase() 
    if (intento == palabrasecreta) {
        gameOver("Ganaste!")
    }
    let row = document.createElement("div")
    row.className = "row"
    console.log(row)
    for (let i in palabrasecreta){
        let letra = document.createElement ("span")
        letra.className = "letter"
        letra.innerHTML = intento [i]
        if (palabrasecreta [i] == intento [i]) {
    letra.style.backgroundColor= "green"
    } else if (palabrasecreta.includes(intento[i])){
       letra.style.backgroundColor= "yellow"
    } else {
        letra.style.backgroundColor= "gray"
    }
    row.appendChild(letra)
}   
grid.appendChild(row)
oportunidades--
if (oportunidades == 0) {
   gameOver("Perdiste")
}
}

function gameOver(mensaje){
    button.disabled = true
    input.disabled = true
    let contenedor = document.getElementById("guesses")
    contenedor.innerHTML = "<h1>" + mensaje + "</h1>"
    console.log (contenedor)
}