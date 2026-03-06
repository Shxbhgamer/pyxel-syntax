const text = `
> Hello, I'm Shubh
> Web Developer
> Video Editor
> Building modern web experiences...
`

let i = 0

function type(){

if(i < text.length){

document.getElementById("terminal-text").innerHTML += text.charAt(i)

i++

setTimeout(type,40)

}

}

type()