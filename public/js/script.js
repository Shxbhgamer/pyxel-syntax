function sendMessage(){

let input=document.getElementById("chatInput")

alert("You said: "+input.value)

input.value=""

}

// IMAGE POPUP

const images = document.querySelectorAll(".preview")
const imagePopup = document.getElementById("imagePopup")
const popupImage = document.getElementById("popupImage")

images.forEach(img => {

img.onclick = () => {

imagePopup.style.display = "flex"
popupImage.src = img.src

}

})

document.getElementById("closeImage").onclick = () => {

imagePopup.style.display = "none"

}



// VIDEO POPUP

const videos = document.querySelectorAll(".preview-video")
const videoPopup = document.getElementById("videoPopup")
const popupVideo = document.getElementById("popupVideo")

videos.forEach(video => {

video.onclick = () => {

videoPopup.style.display = "flex"
popupVideo.src = video.querySelector("source").src
popupVideo.play()

}

})

document.getElementById("closeVideo").onclick = () => {

videoPopup.style.display = "none"
popupVideo.pause()

}

function filterSelection(category) {

const cards = document.querySelectorAll(".card")

cards.forEach(card => {

if (category === "all") {

card.style.display = "block"

}

else if (card.classList.contains(category)) {

card.style.display = "block"

}

else {

card.style.display = "none"

}

})

}

filterSelection("all")

const toggle = document.getElementById("menuToggle")
const nav = document.getElementById("navLinks")

toggle.addEventListener("click", () => {

nav.classList.toggle("active")

})
