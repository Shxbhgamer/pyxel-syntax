function login(){

let user = document.getElementById("user").value
let pass = document.getElementById("pass").value

// demo login (replace later with backend auth)
if(user === "admin" && pass === "admin123"){

window.location = "dashboard.html"

}else{

document.getElementById("error").innerText = "Wrong login"

}

}
function uploadImage(){

let file = document.getElementById("imageUpload").files[0]

alert("Image uploaded (connect backend to store it)")

}

function uploadVideo(){

let file = document.getElementById("videoUpload").files[0]

alert("Video uploaded")

}