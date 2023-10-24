
const arr1= [4,2,1,3]
let sum1=0
for (let i=0; i < arr1.length; i++ ) {
  
    sum1+=arr1[i]
}
console.log(sum1);
//**************************** */
const notlar=[20,55,100,89,32]
let sum2=0
for (let i=0; i < notlar.length; i++ ) {
  
    sum2+=notlar[i]
    console.log(sum2);
}
console.log(sum2);
///*********************** */
const ellidenKucuk=[]
const ellidenBuyuk=[]
// for (let i=0; i < notlar.length; i++){
//     notlar[i]<50?ellidenKucuk.push(notlar[i]):ellidenBuyuk.push(notlar[i])
// }
// console.log(ellidenKucuk);
// console.log(ellidenBuyuk);
//************************************** */
let arr=[4,2,6,7]
arr.forEach((a)=>console.log(a*2));

//!============ FOR IN=========
for (const i in notlar) {
    if (notlar[i]<50){
        ellidenKucuk.push(notlar[i])
    }else{
        ellidenBuyuk.push(notlar[i])
    }
        
    }
console.log(ellidenBuyuk);
console.log(ellidenKucuk);
console.log(notlar);

//!00000000000000000000000000000000000000

//!!************ FOR OF  **************
//?-------------- ÖRNEK -------------------
//?  Dizideki herbir fiyati konsola bastiriniz.

const prices = [250, 150, 300, 500]

for (let price of prices) {
    console.log(price);
}
//****************************
const notlar1=[20,55,100,89,32]
for (not of notlar1) {
     (not<50? ellidenKucuk.push(not):ellidenBuyuk.push(not)) 
    
}
console.log(ellidenKucuk);
console.log(ellidenBuyuk);
//***************************** */

//? ÖRNEK STUDENTS DİZİSİNDE ÖĞRENCİ İSİMLERİ SAKLANMAKTADIR. öĞRENCİLERİ ARAYACAK VE ARANILAN ÖĞRENCİDEN KAÇ TANE OLDUĞUNU YAZACAK ÖĞRENCİ BULUNAMADI İSE ÖĞRENCİ BULUNAMADI YAZSIN


const students=["ahmet", "mehmet", "ismet", "saffet", "ahmet", "saffet"]
ogrenciBul=(ad)=>{
let sayac=0
for (let ogrenci of students) {
   ogrenci===ad && sayac++ 
}
return  sayac===0? `${ad} bulunamamıştır`: `${ad}, ${sayac} adet bulunmuştur`

}
console.log(ogrenciBul("ahmet"));
console.log(ogrenciBul("saffet"));
console.log(ogrenciBul("mehmet"));
console.log(ogrenciBul("canan"));


//!===============FOR EACH=============
const prices1 = [250, 150, 300, 500,600]
for (let price of prices1) {
    console.log(price);
    
}


prices1.forEach((price)=>console.log(price*1.1))


//* 2 PARAMETRELİ HALİ
prices.forEach((price,index)=>console.log("DEGER", price, "SIRA",index))

//* 3 PARAMETRELİ
prices1.forEach((p,i,arr)=>{
    if (arr[i]<270) {
       arr[i]=p*1.1
    }
})
console.log(prices1);

//?  fiyatlar toplamı
let sum=0
prices1.forEach((price)=> (sum +=price));
console.log("SUM", sum);

//********************** MAP  *****************  */

const sayı=[4,2,4,8]
const triples= sayı.map((p)=>p*p*p)
console.log(triples);



//? Bir dizideki tüm isimleri BÜYÜK harfe dönüştüren uygulamayı yazınız.

let names = ["Mustafa", "Murat", "Ahmet", "Mustafa", "Ayşe", "canan"]


let upperCaseNames=names.map((n)=>n.toUpperCase())
console.log(upperCaseNames);
console.log(names);

let upperName=[]
names.forEach((n)=>upperName.push(n.toUpperCase()))
console.log(upperName);

//************************************** */
const euro=29.8
const dolar=27.97
const tlPrices=[100,150,100,50,80]


const dolarPrices=tlPrices.map((tl)=>Number((tl/dolar).toFixed(2)))
console.log(dolarPrices);

const euroPrices=tlPrices.map((tl)=>Number((tl/euro).toFixed(2)))
console.log(euroPrices);

const zamlıDeger=tlPrices.map((p)=>
{
    if (p>100) {
        return (p*1.15).toFixed(2)
        
    }else{
        return (p*1.1).toFixed(2)
    }
})
console.log(zamlıDeger);






//* =======================================
//*             FILTER METHOD
//* =======================================


const salaries = [5500, 8000, 6500, 9000, 10000, 15000, 25000]
const newSalaries=salaries.filter((salary)=>salary >= 8000 && salary < 10000)
console.log(newSalaries);

const dokuzBindenAz= salaries.filter((m)=>m<9000).map((m)=>m*1.5)
console.log(dokuzBindenAz);

//*********************REDUCE************ */

let myArr=[4,5,3,2,1]
console.log(myArr.reduce((acc,val)=>acc+val,0));
console.log(myArr.reduce((acc,val)=>acc*val,1));
console.log(myArr.reduce((acc,val)=>acc/val,1));
console.log(myArr.reduce((acc,val)=>acc-val,0));



// const salari= [10000, 15000, 9000, 20000]
// const sumOfSalari=salari.reduce((sum,sal)=>sum+sal,0)
// console.log("TOTAL:", sumOfSalari);



// const salari= [10000, 15000, 9000, 20000]
// let result
// const sumOfSalari=salari.reduce((sum,sal,i)=>{
//     result= `${i} ${sum +sal}`
//     console.log(result);
//     return  sum+sal
   
// })
// console.log("TOTAL:", sumOfSalari);





// const salari= [10000, 15000, 9000, 20000]
// let result
// const mulOfSalari=salari.reduce((mul,sal,1)=>{
//     result= `${i} ${mul *sal}`
//     console.log(result);
//     return  mul *sal
   
// })
// console.log("TOTAL:", mulOfSalari);




const numbers= [3,2,5,4]
const multiply= numbers.reduce((a,b)=> a*b,1)
console.log(multiply);



//! maaşı 9000 ile 15000 arasında olanlara zam yapıp zam yapılanlara ne kadar ödeme yapılacağını bul


const salari= [10000, 15000, 9000, 20000]
//! filter, map, reduce   (pipeline)

const zamlıMaasToplamı= salari
.filter((s)=> s >=9000 && s < 15000)
.map((s) =>s*1.5)
.reduce((acc, s) => acc+s, 0)

console.log(zamlıMaasToplamı);



//* =======================================
//*               OTHERS
//* =======================================

//* every()
//*-----------------------------------------------------------
//? Tum diziyi itere eder ve aldigi callback fonksiyonuna gore
//? test gerceklestirir.Tum elemanlar icin test basarili ise
//? true aksi takdirde false deger dondurur.

const ages = [18, 22, 78, 34, 78, 79, 15]
const check = ages.every((age) => age >= 18)
check ? console.log("All ages are over 18") : console.log("Sum are under 18")

//* some()
//*-----------------------------------------------------------
//? Aldigi callback fonksiyonuna gore test gerceklestirir.
//? En az bir eleman icin bile test basarili ise true aksi
//? takdirde false deger dondurur.

const over80 = ages.some((a) => a >= 80)
console.log(over80) //? false

//* find(), findLast()
//*-----------------------------------------------------------
//? Aldigi callback fonksiyonuna gore test gerceklestirir.
//? Kosulu saglayan ilk dizi elemaninin dondurur.
//? Eger hic bir eleman kosulu saglamazsa undefined dondurur.

//?Ornek: Yasi 30 dan buyuk olan ilk ve son elemani yazdirin
const ageBigThan30First = ages.find((age) => age >= 30)
const ageBigThan30Last = ages.findLast((age) => age >= 30)
console.log(ageBigThan30First, ageBigThan30Last)

console.log(ages.find((age) => age >= 80)) //? undefined

//* findIndex()
//*-----------------------------------------------------------
//? Aldigi callback fonksiyonuna gore test gerceklestirir.
//? Kosulu saglayan ilk dizi elemaninin indeksini dondurur.
//? Eger hic bir eleman kosulu saglamazsa -1 dondurur.

//?Ornek: Yasi 30 dan buyuk olan ilk elemanin indexini yazdirin

const foundIndex = ages.findIndex((age) => age > 18)
console.log(foundIndex) //? 1


[1, 2, 3].push(4); // [1, 2, 3, 4]
[1, 2, 3].pop(); // [1, 2]
[1, 2, 3].shift(); // [2, 3]
[1, 2, 3].unshift(0); // [0, 1, 2, 3]
['a', 'b'].concat('c'); // ['a', 'b', 'c']
['a', 'b', 'c'].join('-'); // a-b-c
['a', 'b', 'c'].slice(1); // ['b', 'c']
['a', 'b', 'c'].indexOf('b'); // 1
['a', 'b', 'c'].includes('c'); // true
[3, 5, 6, 8].find((n) => n % 2 === 0); // 6
[2, 4, 3, 5].findIndex((n) => n % 2 !== 0); // 2
[3, 4, 8, 6].map((n) => n * 2); // [6, 8, 16, 12]
[1, 4, 7, 8].filter((n) => n % 2 === 0); // [4, 8]
[2, 4, 3, 7].reduce((acc, cur) => acc + cur); // 16
[2, 3, 4, 5].every((x) => x < 6); // true
[3, 5, 6, 8].some((n) => n > 6); // true
[1, 2, 3, 4].reverse(); // [4, 3, 2, 1]
[3, 5, 7, 8].at(-2); // 7