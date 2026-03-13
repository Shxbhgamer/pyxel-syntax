const canvas = document.createElement("canvas")
document.body.appendChild(canvas)

const ctx = canvas.getContext("2d")

canvas.style.position = "fixed"
canvas.style.top = "0"
canvas.style.left = "0"
canvas.style.width = "100%"
canvas.style.height = "100%"
canvas.style.zIndex = "0"
canvas.style.pointerEvents = "none"

canvas.width = window.innerWidth
canvas.height = window.innerHeight

let mouse = {x: canvas.width/2, y: canvas.height/2}

document.addEventListener("mousemove",(e)=>{
mouse.x = e.clientX
mouse.y = e.clientY
})

class Node{

constructor(){

this.x = Math.random()*canvas.width
this.y = Math.random()*canvas.height

// slower movement
this.vx = (Math.random()-0.5)*0.5
this.vy = (Math.random()-0.5)*0.5

}

move(){

this.x += this.vx
this.y += this.vy

if(this.x<0||this.x>canvas.width) this.vx*=-1
if(this.y<0||this.y>canvas.height) this.vy*=-1

}

}

const nodes=[]

// smaller number of particles
for(let i=0;i<45;i++){
nodes.push(new Node())
}

function animate(){

ctx.clearRect(0,0,canvas.width,canvas.height)

nodes.forEach(node=>{

node.move()

nodes.forEach(other=>{

const dx=node.x-other.x
const dy=node.y-other.y
const dist=Math.sqrt(dx*dx+dy*dy)

// shorter connection distance
if(dist<80){

ctx.beginPath()
ctx.moveTo(node.x,node.y)
ctx.lineTo(other.x,other.y)
ctx.strokeStyle="rgba(0,255,255,0.4)"
ctx.lineWidth=1
ctx.stroke()

}

})

const dx=node.x-mouse.x
const dy=node.y-mouse.y
const dist=Math.sqrt(dx*dx+dy*dy)

if(dist<100){

ctx.beginPath()
ctx.moveTo(node.x,node.y)
ctx.lineTo(mouse.x,mouse.y)
ctx.strokeStyle="rgba(0,255,255,0.8)"
ctx.stroke()

}

})

requestAnimationFrame(animate)

}

animate()

window.addEventListener("resize",()=>{

canvas.width=window.innerWidth
canvas.height=window.innerHeight

})

if(window.innerWidth < 768){

particleCount = 40;

}else{

particleCount = 120;

}