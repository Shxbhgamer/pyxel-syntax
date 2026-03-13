let lastScroll = 0

const navbar = document.querySelector(".navbar")

window.addEventListener("scroll", () => {

let currentScroll = window.pageYOffset

if(currentScroll > lastScroll){

// scrolling down
navbar.style.top = "-100px"

}else{

// scrolling up
navbar.style.top = "0"

}

lastScroll = currentScroll

})