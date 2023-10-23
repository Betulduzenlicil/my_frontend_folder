console.log("*********FOR EACH**********");

arr=[4,2,6,7]
arr.forEach((a)=>console.log(a*2));


//?-------------- ÖRNEK -------------------
//?  Dizideki herbir fiyati konsola bastiriniz.

//! FOR OF
const prices = [250, 150, 300, 500]

for (let price of prices) {
    console.log(price);
}

//! FOR EACH
prices.forEach((price)=>console.log(price*1.1))

//* 2 PARAMETRELİ HALİ
prices.forEach((price,index)=>console.log("DEGER", price, "SIRA",index))

//* 3 PARAMETRELİ
prices.forEach((p,i,arr)=>{
    if (arr[i]<270) {
       arr[i]=p*1.1
    }
})
console.log(prices);
//?  fiyatlar toplamı
let sum=0
prices.forEach((price)=> (sum +=price));
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


const euro=29.8
const dolar=27.97
const tlPrices=[100,150,100,50,80]


const dolarPrices=tlPrices.map((tl)=>Number((tl/dolar).toFixed(2)))
console.log(dolarPrices);

const euroPrices=tlPrices.map((tl)=>Number((tl/euro).toFixed(2)))
console.log(euroPrices);


//* =======================================
//*             FILTER METHOD
//* =======================================


const salaries = [5500, 8000, 6500, 9000, 10000, 15000, 25000]
const newSalaries=salaries.filter((salary)=>salary >= 8000 && salary < 10000)
console.log(newSalaries);



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
// const mulOfSalari=salari.reduce((mul,sal,i)=>{
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