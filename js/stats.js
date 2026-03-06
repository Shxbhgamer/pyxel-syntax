function counter(id,target){

let count=0

let interval=setInterval(()=>{

count++

document.getElementById(id).textContent=count

if(count>=target){
clearInterval(interval)
}

},20)

}

counter("projects",120)
counter("clients",40)
counter("views",2000)