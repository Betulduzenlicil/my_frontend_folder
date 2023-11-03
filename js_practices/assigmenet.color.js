function rastgeleRenkUret(renk) {
    if (renk === 'rgb') {
      let r = Math.floor(Math.random() * 256);
      let g = Math.floor(Math.random() * 256);
      let b = Math.floor(Math.random() * 256);
      return "rgb(" + r + "," + g + "," + b + ")";
    } else if (renk === 'hsl') {
      let h = Math.floor(Math.random() * 360);
      let s = Math.floor(Math.random() * 101);
      let l = Math.floor(Math.random() * 101);
      return "hsl(" + h + "," + s + "%," + l + "%)";
    } else if (renk === 'hex') {
      let renkValue = '#';
      let karakterler = '0123456789ABCDEF';
      for (let i = 0; i < 6; i++) {
        renkValue += karakterler[Math.floor(Math.random() * 16)];
      }
      return renkValue;
    } else {
      return "Geçersiz renk türü";
    }
  }
  
  let RGBRenk = rastgeleRenkUret('rgb');
  let HSLRenk = rastgeleRenkUret('hsl');
  let HEXRenk = rastgeleRenkUret('hex');
  const main=document.querySelector(".bgDiv");
  const ınputBox=document.querySelector("#colorInput")
  const p=document.querySelector("#colorText")


document.querySelector(".btn-click").addEventListener("click",()=>{
    main.style.backgroundColor =ınputBox.value =p.innerHTML =rastgeleRenkUret('hex')

});

document.querySelector(".btn-over").addEventListener("mouseover",()=>{
    main.style.backgroundColor =ınputBox.value =p.innerHTML =rastgeleRenkUret('hex')
});




// function createRandom() {
//   let a = Math.floor(Math.random() * 255);
//   let b = Math.floor(Math.random() * 255);
//   let c = Math.floor(Math.random() * 255);
//   let newColor = `rgb(${a}, ${b}, ${c})`;
//   container.style.backgroundColor = newColor;
//   text.innerHTML = rgbToHex(a, b, c);
//   inputColor.value = rgbToHex(a, b, c);
// }

// function componentToHex(c) {
//   var hex = c.toString(16);
//   return hex.length == 1 ? "0" + hex : hex;
// }

// function rgbToHex(r, g, b) {
//   return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
// }



window.addEventListener("load", rastgeleRenkUret) 