const bot=document.createElement("div")

bot.style.position="fixed"
bot.style.bottom="20px"
bot.style.right="20px"
bot.style.background="#ff0055"
bot.style.color="white"
bot.style.padding="15px"
bot.style.cursor="pointer"

bot.innerText="Chat"

document.body.appendChild(bot)

bot.onclick=()=>{

alert("Hello! I am Pyxel Syntax assistant.")

}
function chat(){

let input = document.getElementById("userInput").value

let reply = "I'm the Pyxel Syntax AI 🤖"

if(input.includes("hire"))
reply = "You can hire me from the contact section."

if(input.includes("services"))
reply = "I provide web development and video editing."

document.getElementById("botReply").innerText = reply

}