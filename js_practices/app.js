//*Cmments 
//? welcome to 30 days of javascript

let betul= "merhaba",
duzenli= 3,
clas;
console.log(betul, duzenli, clas)
console.log(typeof (betul, duzenli, clas, betul)) 

let my_age=33
let your_age=40
console.log(`Benim yaşım ${my_age} senin yaşın ${your_age}`);
 for (let i = 1; i <= 10; i++) {
    //   console.log(i) //? 12345678910
    // }
    
    //? Girilmeyn dongu (Dongu sarti bastan yanlis)
    // for (let i = 1; i == 10; i++) {
    //   console.log(i)
    // }
    //?123456789
    // for (let i = 1; i != 10; i++) {
    //   console.log(i)
    // }
    
    //? 0 5
    // for (let i = 0; i != 10; i += 5) {
    //   console.log(i)
    // }
    
    //? Sonsuz dongu
    // for (let i = 0; i != 10; i*=2) {
    //     console.log(i)
    // }
    
    //? 10 9876543210
    for (let i = 10; i >= 0; i--) {
      console.log(i)
    }
    
    //? 0-100 Arasinda n adet rasgele tamsayi sayi ureten kodu for dongusu ile yaziniz..
    
    const n = +prompt("Kac adet rasgele sayi uretmek istersiniz?")
    
    for (let i = 1; i <= n; i++) {
      const randomSayi = Math.round(Math.random() * 100)
      console.log(`${i}. rasgele sayi : ${randomSayi}`)
    }
    
    // 2 aralikta verilen dogal sayilarin toplamini bulan kodu for dongusu ile yaziniz.
    
    // const n1 = 5
    // const n2 = 15
    
    // let toplam = 0
    // for (let j = n1; j <= n2; j++) {
    //   toplam += j
    // }
    // console.log(toplam)
    
    let n1 = 15
    let n2 = 25
    let toplam = 0
    
    if (n1 >= n2) {
      console.log("Lütfen 1. sayiyi daha büyük giriniz")
    } else {
      for (n1; n1 <= n2; n1++) {
        toplam += n1
      }
    
      console.log(toplam)
    }
    
//ÖRNEK
console.log("guess number");

let sayı= Math.round(Math.random()*100)

let hak=5
let tahmin= +prompt("enter a number")





//?----------------------------------------soru 1 :-----------------------------------------------

// Write a JavaScript program to shuffle an array.


let color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
function shuffle(arra1) {
    var ctr = arra1.length, temp, index;

// While there are elements in the array
    while (ctr > 0) {
// Pick a random index
        index = Math.floor(Math.random() * ctr);
// Decrease ctr by 1
        ctr--;
// And swap the last element with it
        temp = arra1[ctr];
        arra1[ctr] = arra1[index];
        arra1[index] = temp;
    }
    return arra1;
}
var myArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(shuffle(myArray));
console.log(shuffle(myArray));
console.log(shuffle(myArray));

console.log(shuffle(myArray));




//?-------------------------------------soru 2 :------------------------------------

// There are two arrays with individual values. Write a JavaScript program to compute the sum of each individual index value in the given array.
// Sample array :
// array1 = [1,0,2,3,4];
// array2 = [3,5,6,7,8,13];
// Expected Output :
// [4, 5, 8, 10, 12, 13]


function Arrays_sum(array1, array2) 
{
  var result = [];
  var ctr = 0;
  var x=0;

  if (array1.length === 0) 
   return "array1 is empty";
  if (array2.length === 0) 
   return "array2 is empty";   

 while (ctr < array1.length && ctr < array2.length) 
  {
    result.push(array1[ctr] + array2[ctr]);
    ctr++;
  }

 if (ctr === array1.length) 
 {
    for (x = ctr; x < array2.length; x++)   {
      result.push(array2[x]);
    }
  } 
  else
  {
  for (x = ctr; x < array1.length; x++) 
    {
      result.push(array1[x]);
    }
  }
  return result;
}

console.log(Arrays_sum([1,0,2,3,4], [3,5,6,7,8,13]));

/* ------------------------------- diger cozum ------------------------------ */

function Arrays_sum(array1, array2) {
  const maxLength = Math.max(array1.length, array2.length);
  
  const result = Array.from({ length: maxLength }, (_, i) => 
    (array1[i] || 0) + (array2[i] || 0)
  );

  return result;
}

console.log(Arrays_sum([1, 0, 2, 3, 4], [3, 5, 6, 7, 8, 13]));



//? ----------------------------------soru:3---------------------------------------
//*Write a JavaScript program that accepts a number as input and inserts dashes (-) between each even number. For example if you accept 025468 the output should be 0-254-6-8.
//*normalde sorunun cozumu :
const num=window.prompt();
const str = num.toString();
const result = [str[0]];
  
for(let x=1; x<str.length; x++)
  {
    if((str[x-1]%2 === 0)&&(str[x]%2 === 0))
     {
      result.push('-', str[x]);
     }
    else
     {
      result.push(str[x]);
     }
  }
console.log(result.join(''));
//********************************************************************************************************************
//*regexp ile bu kadar kolay : 

const num1 = window.prompt();
const str1 = num1.toString();

const result1 = str1.replace(/([02468])(?=[02468])/g, '$1-');

console.log(result1);