console.log("**traversıngdom**");


//  TRAVERSING DOM
const htmlli= document.querySelector("ul li:nth-child(1)")
console.log(htmlli);
console.log(htmlli.parentNode.parentElement);
console.log(htmlli.parentNode.parentElement.parentNode);
console.log(htmlli.parentNode.parentElement.parentNode.parentElement);

// closest( methodu root yonunde uygun olan parent ı secer)
console.log(htmlli.closest("section"));
console.log(htmlli.closest("main").querySelector("#add-new-item"));



console.log(htmlli.firstElementChild);//null LİNİN İÇİNDE CHİLD ARIYOR YOK
console.log(htmlli.firstChild);//"HTML" VAR OLAN İLK ÇOCUĞUN ADINI BULUYOR

console.log(htmlli.lastElementChild);//null
console.log(htmlli.lastChild);  //HTML

const itemLıst=document.querySelector(".item-list")

console.log(itemLıst.firstElementChild); //h3
console.log(itemLıst.lastElementChild); //ul
console.log(itemLıst.lastElementChild.firstElementChild); 
console.log(itemLıst.lastElementChild.lastElementChild);


console.log(htmlli.nextElementSibling.textContent); //css
