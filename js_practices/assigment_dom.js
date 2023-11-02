
myHeader=document.querySelector(".header")
myTitle=document.getElementById("title")
myNavitem=document.querySelector(".nav-item")
myMain=document.querySelector("main")
myInput1=document.querySelector("#username")
myInput2=document.querySelector("#password")
myButon=document.querySelector(".btn")
myProjects=document.getElementById("projects")


myHeader.style= "background-color:red; color:white; padding:1.2rem;text-align:center";

myTitle.textContent = 'Javascript Dom Assigment 1';
myNavitem.style= "display: flex; justify-content: center; align-items: center; gap: 2rem ; margin-top:.5rem; list-style: none";

myMain.style="margin-top:4rem; text-align:center"
myInput1.value="Betul"
myInput2.value="12345"
myInput2.type="text"
myInput1.disabled="true"
myInput2.disabled="true"

myInput1.style= "padding:1rem; border-radius:5px; text-align:left; box-shadow:2px 2px 2px blue; margin: 5px"
myInput2.style= "padding:1rem; border-radius:5px; text-align:left; box-shadow:2px 2px 2px blue; margin: 5px"

myButon.style= "padding:1rem; border-radius:5px; margin: 5px; background-color:blue; color:white; border:none; cursor:pointer"

myButon.textContent="Giriş Yap"

myProjects.firstElementChild.textContent="Js Dom Projects"


const myProject = ["Hello World!","Guess Number","Checkout Page","Gelir-Gider Projesi","Api Projects" ];
const sectionLast = projects.lastElementChild;

for (let i = 0; i < myProject.length; i++) {
   const newList=document.createElement("li")
   newList.textContent=myProject[i]
   sectionLast.appendChild(newList)
    
}
sectionLast.style="margin:10px; padding:1rem; font-size:1.2rem"
