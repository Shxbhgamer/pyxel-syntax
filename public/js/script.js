function sendMessage(){

let input=document.getElementById("chatInput")

alert("You said: "+input.value)

input.value=""

}

// IMAGE POPUP
const images = document.querySelectorAll(".preview")

if(images.length > 0){

const imagePopup = document.getElementById("imagePopup")
const popupImage = document.getElementById("popupImage")
const closeImage = document.getElementById("closeImage")

images.forEach(img => {

img.onclick = () => {

imagePopup.style.display = "flex"
popupImage.src = img.src

}

})

if(closeImage){

closeImage.onclick = () => {

imagePopup.style.display = "none"

}

}

}



// VIDEO POPUP
const videos = document.querySelectorAll(".preview-video")

if(videos.length > 0){

const videoPopup = document.getElementById("videoPopup")
const popupVideo = document.getElementById("popupVideo")
const closeVideo = document.getElementById("closeVideo")

videos.forEach(video => {

video.onclick = () => {

videoPopup.style.display = "flex"
popupVideo.src = video.querySelector("source").src
popupVideo.play()

}

})

if(closeVideo){

closeVideo.onclick = () => {

videoPopup.style.display = "none"
popupVideo.pause()

}

}

}

function filterSelection(category){

const cards = document.querySelectorAll(".card")

cards.forEach(card => {

if(category === "all" || card.classList.contains(category)){

card.style.display = "block"

}else{

card.style.display = "none"

}

})

}

filterSelection("all")

const toggle = document.getElementById("openMenu")
const nav = document.getElementById("mobileMenu")

if(toggle){

toggle.addEventListener("click", () => {

nav.classList.toggle("active")

})

}
