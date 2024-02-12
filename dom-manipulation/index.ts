console.log('Hello World!!!!')
const greeting = document.getElementById('user-name')!
greeting.textContent="Anil";

const tag = document.createElement("p")
tag.innerText = "Changed via Type script"
document.body.appendChild(tag)

greeting.style.color="green"
document.getElementById('content')!.style.color = "red";

//const colArray:Array<any>=['red','green','blue'];

if(ele) ele.style.color = "red";

function handleClick():void {
    const ele=document.getElementById("content");
    if(ele.style.color == "red"){
        ele.style.color = "green";
        ele?.textContent = "The content is in Green";
    
    }
    else
    {
        ele.style.color = "red";
        ele?.textContent = "The content is in red";
    }
       
    
}
