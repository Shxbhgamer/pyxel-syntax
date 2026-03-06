const cursor=document.createElement("div")

cursor.style.width="15px"
cursor.style.height="15px"
cursor.style.background="red"
cursor.style.position="fixed"
cursor.style.borderRadius="50%"

document.body.appendChild(cursor)

document.addEventListener("mousemove",(e)=>{

cursor.style.left=e.clientX+"px"
cursor.style.top=e.clientY+"px"

})