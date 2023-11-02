console.log("EVENTS");

const header= document.querySelector('header');
const addButon= document.getElementById('btn')
const input= document.getElementById("input")
const ul=document.querySelector("ul")

header.onmouseover= function(){
    header.style.backgroundColor= "red"
    header.style.color= "white"
}

header.onmouseout= function(){
    header.style.backgroundColor= "transparent"
    header.style.color= "black"
}




const yazdır=()=>{
    document.write("Hello from turkey")
}
// window.onload=yazdır()

window.addEventListener("load",()=>{
    input.focus()
})

addButon.addEventListener("click", ()=>{
    if(!input.value.trim()){
        alert("lütfen bir veri giriniz")
        
    }else{
        const li=document.createElement("li")
        const text= document.createTextNode(input.value)
        li.appendChild(text)
        ul.appendChild(li)
        input.value=""
        input.focus()

    }
   
})

input.addEventListener("keyup", (e)=>{
    // console.log(e);
    // console.log(e.target);
    // console.log(e.target.value);
    if(e.code==="Enter"){
        addButon.click()
    }
    if(e.code==="Backslash"){
         //todo: liste elementinin en son elementi silinecek
    }
       
})
