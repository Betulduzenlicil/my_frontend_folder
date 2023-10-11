console.log("*********FUNCTIONS_2*************");

function ageWrite(name, birthDay){
    const age= 2023-birthDay;
    console.log(`Benim adım ${name} yaşım ${age}`);
    return age
}
ageWrite("Betül", 1984)
ageWrite("Betül", 1984)
ageWrite("Betül", 1984)



//*****************EXPRESSION*******************/

// console.log(topla(2,3));//?Cannot access 'topla' before initialization
//?çünkü  hoisting değil
let sayıTopla= function (a,b) {
    return a+b;
}
console.log(sayıTopla(3,5));

//?*************************************
// const topla= function(a,b){
//     return a+b
// }
// console.log("Toplam:",topla(5,4));


//?************************************
let oddOrEven=function(sayı){
    const result = sayı%2===0 ? "EVEN": "ODD"
       return `${sayı} ${result}`; 
 
    }

console.log(oddOrEven(5));

//?***********************************
const findBiggest= function(n1,n2,n3){
return Math.max(n1,n2,n3)
    
}
console.log(findBiggest(3,4,5));
console.log(findBiggest(9,7,5));

//?****************************************

const kareAl=num=>num*num
kareAl()
console.log(`${4} un karesi ${kareAl(4)}`);

//?**********************************

const yaz=()=> console.log("Hello js");
yaz()


const hesapla = (x,y)=> {
    const toplam= x+y;
    const carpım= x*y;
    const sonuc= carpım/toplam;
    return sonuc
}
console.log("SONUC:",hesapla(8,9));

//?**************************
const ageHesapla=(dog)=>{
    return new Date().getFullYear()-dog
}
console.log("YAS:", ageHesapla(1985));


//?********************
// let hacim=(a,h)=>{
//     return Math.PI*a*a*h;
// }
// console.log(`yarıcapı ${a} yuksekliği ${h} olan silindirin hacmi ${hacim(3,4)}`);

const hacimHesapla=(r,h)=>Math.PI*r*r*h;
console.log(hacimHesapla(3,4));
console.log(`Tabanı ve yüksekliği verilen silindirin hacmi ${hacimHesapla(3,4)}`)

//?***************************************************************************
// const topla= (a,b)=> a+b
// const cıkar= (a,b)=> a-b
// const carp= (a,b)=> a*b
// const böl= (a,b)=> a/b
// const hesapMakinesi=()=>{
// let result=0
// switch (operator) {
//          case "+":
//              result= topla(num1,num2)
//              break
//         case "-":
//             result= cıkar(num1,num2)
//             break 
//         case "*":
//             result= carp(num1,num2)
//             break
//         case "/":
//             result= böl(num1,num2)
//             break

//         default:
//             alert("Yanlış operator girdiniz")
//             break;
// }
// return result
// }
// const  num1= +prompt("1. sayı: ")
// const  num2= +prompt("2. sayı: ")
// const  operator= prompt("işlemi giriniz: +,-,*,/: ")
// console.log(`${num1} ${operator} ${num2}=${hesapMakinesi()}`);

// ? ======================================
// ?              SCOPE
// ? ======================================

console.log("******* SCOPE ********")

//? Global degiskenler
// let num1 = 11
let num2 = 22

const funk1 = () => {
  let num1 = 44 //? Function-scoped degiskendir
  num1++
  return num1
}
//? foknsiyondan gelen deger num1 adindaki global degiskene atarildi.
let num1 = funk1()
console.log(num1) //? global num1

//! Uncaught SyntaxError: Identifier 'num1' has already been declared
// const num1 = 55

{
  let x = 5
  x++
  let y = x + 15
  num1++
  console.log(y) //? blocked-scope degisken
}
// console.log(y) //! Global scope: Uncaught ReferenceError: y is not defined at
console.log(num1)

//? VAR

num3 = 99
var num3 //? hoisted (en yukarıya tasinmis gibi olur)
console.log(num3)

var result = "Hallo"

if (num3 === 100) {
  let result = "Hi" //? local(blocked scope) result
  console.log(result) //? Hi
} else {
  var result = "Salut" //? Global result
  console.log(result) //? Salut
}

console.log(result) //? global result



const faktoriyel=(n)=>{
    let result=1
    for (let i= n;  i>=1; i--) {
        result=result*i
        
    }
    return result
}
console.log(faktoriyel(5));


//? Rekursif
//? 5! = 5 . 4! => n! = n.(n-1)!

const faktoRekursif = (n) => {
    if (n <= 1) {
      return 1
    } else {
      return n * faktoRekursif(n - 1)
    }
  }
  
  console.log(faktoRekursif(5))
