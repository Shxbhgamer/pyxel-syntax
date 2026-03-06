const reviews=[

{
name:"Client 1",
text:"Amazing editing work."
},

{
name:"Client 2",
text:"Great website developer."
},

{
name:"Client 3",
text:"Professional and fast."
}

]

const container=document.getElementById("reviewContainer")

reviews.forEach(r=>{

const div=document.createElement("div")

div.innerHTML=`<h4>${r.name}</h4><p>${r.text}</p>`

container.appendChild(div)

})