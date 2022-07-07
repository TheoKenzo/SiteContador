const NumberHTML = document.getElementById("number")

let NumberCount = 0

function increment(){
    NumberCount--
    NumberHTML.innerHTML = NumberCount
}

function decrement(){
    NumberCount++
    NumberHTML.innerHTML = NumberCount
}
