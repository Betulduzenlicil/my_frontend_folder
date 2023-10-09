console.log("merhaba WHILE");

//? girilen sayının asla olup olmadığını belirleyen kodu yazınız
// sayı= +prompt("Enter a number")

// if (sayı>0 && sayı<2) {
    
// }









for (let i= 0; i <=10 ; i++) {
    
    if (i<=5) {
        continue  // döngüde pas geçmek istediğimiz değerler için kullanılır
        
    }
    if (i===8) {
        break   // döngüde bulduğumuz değerden sonra döngüden çıkmak için kullanılır
    }
    console.log(i)
}
let i=0
while (i<10) {
   console.log(`${i} Betül`)
   i++ 
}
console.log("döngü bitti");




//? kullanıcıdan not isteyin not 0 dan kucuk 100 den buyuk ise tekrar tekrar uyarın 


// let note =prompt("enter a number")

// while (note<0 || note>100) {
//     console.log("not geçersiz");
//     note =prompt("enter a new puan")

// }
// console.log(note);

let j=0
do{
    console.log(j);
    j++
}while(j<10)
console.log("döngü bitti");
