const NumberHTML = document.querySelector("#number")
const Less = document.getElementById("less")
const More = document.getElementById("more")

let NumberCount = 0

Less.addEventListener("click", lessFun)

function lessFun(){
    NumberCount--
    NumberHTML.innerHTML = NumberCount
}

More.addEventListener("click", moreFun)

function moreFun(){
    NumberCount++
    NumberHTML.innerHTML = NumberCount
}

NumberHTML.innerHTML = NumberCount
