//Purpose of the this coding challenge is to write a code that given numbers convert to Roman Numerals. The Romans wrote numbers using letters - I, V, X, L, C, D, M. (notice these letters have lots of straight lines and are hence easy to hack into stone tablets).

//Example:

//1000=M 900=CM 90=XC

//2008 is written as MMVIII:

//2000=MM 8=VIII


console.log("ROMEN")
function makeRomen(num) {
    const values = [1000, 900, 500, 400, 100, 90 ,50, 40, 10 , 9 ,5,4,1]
    const numerals = ['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I']
    let result=""

for (let i = 0; i < values.length; i++) {
    while(num>=values[i]){
        result+=numerals[i];
        num-=values[i];

    }
    
}
return result;
}
console.log(makeRomen(2050));
console.log(makeRomen(2012));
console.log(makeRomen(1987));

