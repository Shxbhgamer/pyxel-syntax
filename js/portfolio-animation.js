gsap.from(".project",{

opacity:0,
y:100,
duration:1,
stagger:0.3

})

let container = document.getElementById("portfolio-container")

let project = `
<div class="project">
<img src="../uploads/project1.jpg">
</div>
`

container.innerHTML += project