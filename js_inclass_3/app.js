console.log("MERHABA JS");
const maas= 70000
const izinGunu=30
console.log(`MMas= ${maas} + sigorta, izin süresi: ${izinGunu}`);
console.log(`${maas-izinGunu*500}`);
const name= "Ahmet"
const dayOfBirth=1970
console.log(`${name} is ${2023-dayOfBirth} years old`);

const tarih= new Date().getFullYear()
console.log(tarih);
// let doğumTarihi= prompt("Enter your birthday")

// console.log(`Your age is ${tarih-doğumTarihi} years old`);


//? Ornek
//?-------------------------------------
//? Kullanicidan veri girisi istedik.
// ? prompt ile kullancidan alinan veri default olarak string'dir
//? Bu veriyi number'a Number() fonksyinu ile cevirebilriz.


// let r= +prompt("Enter a radius value")
// const pi = 3
// const area= (pi*r**2).toFixed(3)
// console.log(`Yarıcapı ${r} olan dairenin alanı : ${area } br dir`);

//?Bazi fonksiyonlar
// Math.floor();  //* her zaman en yakin alt tamsayiya yuvarlar
// Math.ceil();  //* her zaman en yakin ust tam tamsayiya yuvarlar
// Math.trunc(); //* sayinin tam kismini alir.
// Math.round(); //* en yakin tam sayiya yuvarlar.
// Math.random(); //* 0 ve 1 arasında rasgele sayi uretir.


const Sayım= +prompt("enter a number");
console.log(Sayım);
const birlerBas=Sayım%10
// console.log(birlerBas);
const onlarBas= (Sayım%100)/10
// console.log(onlarBas);
const yüzlerBas= Sayım/100
// console.log(yüzlerBas);
console.log(`yüzlerBas:${Math.trunc(yüzlerBas)}`);
console.log(`onlarBas:${Math.trunc(onlarBas)}`);
console.log(`birlerBas:${Math.trunc(birlerBas)}`);