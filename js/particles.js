const canvas=document.createElement("canvas")

document.body.appendChild(canvas)

canvas.style.position="fixed"
canvas.style.top=0
canvas.style.left=0
canvas.style.zIndex=-1

const ctx=canvas.getContext("2d")

canvas.width=window.innerWidth
canvas.height=window.innerHeight

let particles=[]

for(let i=0;i<80;i++){

particles.push({

x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
r:Math.random()*3,
dx:Math.random()-0.5,
dy:Math.random()-0.5

})

}

function animate(){

ctx.clearRect(0,0,canvas.width,canvas.height)

particles.forEach(p=>{

ctx.beginPath()

ctx.arc(p.x,p.y,p.r,0,Math.PI*2)

ctx.fillStyle="white"

ctx.fill()

p.x+=p.dx
p.y+=p.dy

})

requestAnimationFrame(animate)

}

animate()