// typing effect

const text="Video Editor • Web Developer • Creator"

let i=0

function typing(){

if(i<text.length){

document.getElementById("typing").innerHTML+=text.charAt(i)

i++

setTimeout(typing,60)

}

}

typing()


// dark mode

document.getElementById("darkToggle").onclick=()=>{

document.body.classList.toggle("dark")

}