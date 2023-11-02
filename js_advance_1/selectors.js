document.title="🏠FS 15 DOM🏠"



//*===========================================
//*            GETELEMENTBYID()
//*===========================================
const header= document.getElementById("header")
console.log(header);
// header.style.backgroundColor="red"
// header.style.color="blue"
// header.style.padding="2rem"
// header.style.textShadow= "3px 1px 3px white"
// header.style.fontFamily="Tahoma"
header.style="background-color:green; font-weight:bold; font-style:italic"


const h2= document.getElementById("add-new-item")
console.log(h2);

console.log(h2.textContent); //ADD NEW ITEM
console.log(h2.innerText); //ADD NEW ITEM
console.log(h2.innerHTML); //ADD NEW ITEM
h2.textContent="ADD"
// h2.innerText="ADD ITEM"
h2.innerHTML= "<p  style= 'color:red'>add new ıtem</p>"  //tagların içindeki add new item yazısını yazdırıyor
// h2.innerText= "<p>add new ıtem</p>" // taglarla birlikte yazdırıyor

document.getElementById("btn").value="Submit"
const input=document.getElementById("input")
input.value="Javascript"
//*===========================================
//*          GETELEMENTSBYTAGNAME()
//*===========================================

const lists=document.getElementsByTagName("li")

console.log("sıze:", lists.length);
// for döngüleri ile itere edilebilir
for(let li of lists){
    console.log(li.textContent);
}
// html collection array e adönüştürülerek for each map kullanılor
 const listArray=[...lists];// spread ile arraye cevirme
 
 listArray.forEach((li)=>(li.style.color="green"))

Array.from(lists).map((li)=>(li.style.backgroundColor="yellow"))

const sections= document.getElementsByTagName("section")
console.log(sections);//HTMLCollection(2) [section.add-item, section.item-list]

sections[0].style.backgroundColor="blue"







//*===========================================
//*          GETELEMENTSBYCLASSNAME()
//*===========================================

const myLists = document.getElementsByClassName("list")
console.log(myLists) //?HTMLCollection(5)[li.list, li.list, li.list, li.list, li.list]

console.log(myLists[3].innerText)

const section = document.getElementsByClassName("item-list") //? tek elemanli bir dizi
console.log(section[0])

//* ========================================
//*              QUERYSELECTOR()
//* ========================================
//?id almak
console.log(document.querySelector("#header"));
console.log(document.querySelector(".item-list"));
console.log(document.querySelector("h3"));


console.log(document.querySelector("section.add-item #btn"));

//* ========================================
//*              QUERYSELECTORALL()
//* ========================================

const itemLısts=document.querySelectorAll("section.item-list li");//NodeList(5) [li.list, li.list, li.list, li.list, li.list]
console.log(itemLısts);
itemLısts.forEach((li)=>console.log(li.textContent))

for(let li of itemLısts.values()){
    console.log(li);
}

