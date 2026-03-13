document.addEventListener("DOMContentLoaded", () => {

let projects = 0
let clients = 0
let views = 0

const projectEl = document.getElementById("projects")
const clientEl = document.getElementById("clients")
const viewEl = document.getElementById("views")

// final numbers
const projectTarget = 90
const clientTarget = 81
const viewTarget = 50000

const counter = setInterval(() => {

if(projects < projectTarget){
projects++
projectEl.textContent = projects
}

if(clients < clientTarget){
clients++
clientEl.textContent = clients
}

if(views < viewTarget){
views += 10
viewEl.textContent = views.toLocaleString()
}

// stop when all reached
if(
projects >= projectTarget &&
clients >= clientTarget &&
views >= viewTarget
){
clearInterval(counter)
}

}, 20)

})