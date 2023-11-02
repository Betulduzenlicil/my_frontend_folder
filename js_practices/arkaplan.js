






myBody=document.querySelector("#body")
myH1= document.querySelector("#h1")


myButton= document.querySelector("#btn")


myButton.addEventListener('click', () => {
    const renkler=["red", "green", "yellow", "blue", "pink"]
    const rastgeleRenk=Math.floor(Math.random()*renkler.length)
    myBody.style.backgroundColor=renkler[rastgeleRenk];
    myH1.textContent = renkler[rastgeleRenk];
    

});
