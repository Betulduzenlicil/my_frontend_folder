console.log("*********FUNCTIONS*********");



function sayılarıTopla() {
let a=5
let b= 10
let sonuc= a+b
console.log(sonuc);
}
sayılarıTopla()
sayılarıTopla()

for (let i = 0; i<3; i++) {
    sayılarıTopla();
    
}

//? parametreli fonksiyon
// function carp(x,y){
//     console.log(x*y);
// }
// carp(8,9)
// carp(9,9)
// carp(sayılarıTopla(),9)


// let num1=+prompt("num1")
// let num2=+prompt("num2")
// carp(num1,num2)
// carp(num2,num1)


//ornek:
function yazdır(name) {
    console.log("Merhaba", name);
}
yazdır("Ahmet")
yazdır("Betül")


function bol(a,b) {
    const result= a/b
    return result
}
let sonuc= bol(10,2)
console.log("SONUC:", sonuc);


//*örnek

function toplama (n1,n2,n3) {
    return n1+n2+n3
}
console.log(toplama(3,5,7));

//örnek

let num1=+prompt("enter a num1")


function oddOrEven (a) {
    
    if (num1%2==0) {
        result= "even";
    }else
    result= "odd";
    return result
}
oddOrEven(num1)
console.log(`${num1}:  ${result}`);

