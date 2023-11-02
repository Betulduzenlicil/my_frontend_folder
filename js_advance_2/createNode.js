console.log("**** CREATE NODE ****")

//* ------- YENI BIR ELEMENT OLUSTURMA ------

//? yeni element oluşturur
const myPar=document.createElement("p")
//? text yazılacaksa taxt düğümü oluştururlur
const text=document.createTextNode("Merhaba p elementi")
//? oluşturulan text düğümü yeni elemente bağlanır
myPar.appendChild(text)
console.log(myPar);

//? yeni oluşan elementi dom tree ye ekleme
const addItemSectıon=document.querySelector(".add-item")
addItemSectıon.appendChild(myPar)

//? seçilen yerin üstüne ekler
addItemSectıon.before(myPar)

const reactli= document.querySelector("ul li:nth-child(4)")
console.log(reactli.innerHTML);
reactli.after(myPar)


//* ıd class özellikleri atama
//? 1. yöntem
myPar.id="paragraf"
myPar.className="red"
myPar.className="center"

//? 2. yöntem

myPar.setAttribute("id", "deneme")
myPar.setAttribute("class", "bg-danger text-red border border-3 border-red")
myPar.setAttribute("class", "bg-warning border border-danger border-3")

//? 3. yöntem
myPar.classList.add("text-center")

console.log(myPar.classList.contains("bg-success"));
if (myPar.classList.contains("border-danger")) {
    myPar.classList.remove("border-danger")
    myPar.classList.add("border-primary")
  }
  

  //? toogle metodu belirtilen class yok ise ekler var ise bu clası siler

  //* yeni bir element oluşturma

  const ul = document.querySelector("ul")
  ul.innerHTML+=`
  <li id='deneme'>C++</li>
  <li class="fw-bold">Java</li>
  <li>Ruby</li>
  <li>Asembly</li>`

  const section3= document.createElement("section")
  document.querySelector("main").appendChild(section3)

section3.innerHTML=`
<div class="card" style="width: 10rem;">
  <img src="https://cdn.pixabay.com/photo/2020/06/13/17/51/milky-way-5295160_640.jpg" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
`