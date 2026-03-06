const elements=document.querySelectorAll(".fade-in")

window.addEventListener("scroll",()=>{

elements.forEach(el=>{

const pos=el.getBoundingClientRect().top

if(pos < window.innerHeight-100){

el.classList.add("show")

}

})

})