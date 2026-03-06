const form = document.getElementById("contactForm");
const popup = document.getElementById("popup");

form.addEventListener("submit", function(e){

e.preventDefault();

popup.style.display = "block";

setTimeout(()=>{
popup.style.display = "none";
},3000);

form.reset();

});
if("serviceWorker" in navigator){

navigator.serviceWorker.register("service-worker.js")

}