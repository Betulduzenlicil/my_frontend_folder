console.log("merhaba arrays");
const arr= [4,2,1,3]
let sum= 0
for(let i=0; i<arr.length;i++){
sum+= arr[i]
}
console.log(sum);

//***************************** */
const notlar= [20,55,100,89,32]
let toplam=0
for (let i = 0; i< notlar.length; i++) {
    toplam+=notlar[i]
    
}
console.log("TOPLAM:", toplam);

//********************** */
//!notların 50den küçük olanlarını ve büyük olanlarını iki ayrı dizide saklayın

let small =[]
let big=[]
for (let i=0; i < notlar.length; i ++) {
  notlar[i]<50
  ?small.push(notlar[i])
  :big.push(notlar[i])
    
}
console.log("50 den küçükler", small);
console.log("50 den büyükler", big);
console.log(notlar);


//*************FOR IN ****************** */
const sayılar=[-5,15,22,-4,45,78,-25]
let sonuc=0
let negative=[]
let positive=[]
for (let i in sayılar) {
    if (sayılar[i]<0) {
        negative.push(sayılar[i])
    }
    else{
        positive.push(sayılar[i])
    }
}
console.log(negative);
console.log(positive);


//*************  FOR OF ******************** */

//*-------------------------------------------------------
//* SORU: students dizisinde ogrenci isimleri saklanmaktadir.
//* ogrencileri aramamizi saglayacak ve aranilan ogrenciden
//* ne kadar sayida bulunuldugunu ana programa dondurecek bir
//* fonksiyonu yaziniz. Eger aranilan isimde bir ogrenci yok ise
//* fonksiyon "ogrenci bulunamadi" dondurulmelidir.
//*--------------------------------------------------------
let kucuk=[]
let buyuk=[]
for (let not  of notlar) {
    not<50
  ?kucuk.push(not)
  :buyuk.push(not)
}
console.log(kucuk);
console.log(buyuk);

//! **********************************
const ogrenciler = ["ahmet", "mehmet", "ismet", "saffet", "ahmet", "saffet"]
const ogrenciBul=(ad)=>{
    let sayac=0
    for (let ogrenci  of ogrenciler) {
       ogrenci ===ad && sayac++ //? short circuit
    }
    const sonuc=sayac===0? `${ad} bulunamamıştır` :`${ad}, ${sayac} adet bulunmuştur`
    return sonuc
}
ogrenciBul("ahmet")
console.log(ogrenciBul("ahmet"));
console.log(ogrenciBul("mehmet"));
console.log(ogrenciBul("betul"));





