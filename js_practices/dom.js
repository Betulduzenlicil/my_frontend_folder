document.title="🎶dom practise🎶"

myH2=document.querySelector(".header")
myH2.onmouseover = function(){
    myH2.style.backgroundColor="pink"
}
myH2.onmouseout = function(){
    myH2.style.backgroundColor="yellow"
}


myH2.addEventListener('mouseover', () => {
    myH2.style.padding="2rem"
});

myH2.addEventListener('mouseout', () => {
    myH2.style.margin="2rem"
});



myButon=document.querySelector("#btn")

myBody=document.querySelector("#body")

myButon.addEventListener("click", () => {
    myBody.style.backgroundColor="green";
    myButon.value= 'BAS';
    
})