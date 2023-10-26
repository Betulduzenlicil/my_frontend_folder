
// console.log("**NEW OPERATORS**");

//* ======================================================
//*  DESTRUCTURING (OBJECT)
//* ======================================================

const insan={
    kımlıkNo: "123456",
    ad:"ahmet",
    soyad: "can",
    meslek:"mimar",
    maas:30000,
}
console.log(insan.maas);
console.log(insan["ad"]);

const mimaradı= insan.ad
console.log(mimaradı);

//! destructuring

let {ad, soyad, kımlıkNo, maas}=insan
kımlıkNo="ABCDE" // burada değişti kımlık no
console.log(kımlıkNo, maas, ad, soyad);
console.log(insan); // kımlıkNo burada değişmez

const insanlar = {
    kisi1: {
      kimlikNo: "1234567890",
      adi: "Ahmet",
      soyadi: "Can",
      meslek: "Mimar",
      maas: 30000,
    },
    kisi2: {
      kimlikNo: "44234567890",
      adi: "Canan",
      soyadi: "Can",
      meslek: "Sosyal Gelişim Uzmanı",
      maas: 25000,
    },
  }
  console.log("MAAS:", insanlar.kisi1.maas);
  const {kisi1, kisi2}=insanlar   //? level1
  console.log(kisi1);

  const {kimlikNo}=kisi1
  console.log(kimlikNo); //1234567890

const { kimlikNo: kisi1Kimlik, adi: kisi1Adi, soyadi: kisi1Soyadi } = kisi1 //?Level2
const { kimlikNo: kisi2Kimlik, adi: kisi2Adi, soyadi: kisi2Soyadi } = kisi2
console.log(kisi2Kimlik) //44234567890

//!2. yontem
const {
  kisi1: { soyadi, adi },
} = insanlar //? nested destr.

console.log(soyadi)

//* Example
const team = [
    {
      name: "Josh",
      surname: "Barry",
      job: "developer",
      age: 30,
    },
    {
      name: "John",
      surname: "Barry",
      job: "tester",
      age: 45,
    },
    {
      name: "Hazel",
      surname: "Nut",
      job: "team lead",
      age: 40,
    },
  ]
//* klasik yöntem
team.forEach((t)=>{
    console.log("NAME:",t.name, "SURNAME:",t.surname, "AGE:",t.age, "JOB:",t.job);
})

console.log("**** DEST ****")
//*/ Destr
team.forEach((person) => {
    const {name, surname, age, job}=person
  console.log("NAME:", name)
  console.log("SURNAME:", surname)
  console.log("JOB:", job)
  console.log("AGE:", age)
})

//!----  FUNCTIONLARDA DEATRUC. KULLANIMI ----
// function kisiOkuDeclaration () {
  
// }

const kisiOku = function () {
    return {
        no: "23456789", 
        isim:"Betul", 
        soyisim:"CIL", 
        iş: "teacher",
        dilSayısı:2,
    }
}
console.log("KISI:",kisiOku());

let {no, isim, soyisim, iş, dilSayısı}= kisiOku()

dilSayısı++
console.log(no, isim, soyisim, dilSayısı);


const data={
    id: "1",
    brand: "APPLE",
    product:"Iphone15",
    stock:100
}

const productPrint=(data)=>{
    
console.log(`${data.brand}- ${data.product}: ${data.stock}`);
}
productPrint(data)

//******************************* */
const productPrintDest=()=>{
    const {id,brand, product, stock}=data
    console.log(`${brand}-${product}: ${stock}`);
}
productPrintDest(data)

//**************************************** */
const productPrintDest2=( {id,brand, product, stock})=>{
  
    console.log(`${brand}-${product}: ${stock}`);
}
productPrintDest2(data)


//* =============================================
//*  DESTRUCTURING (ARRAY)
//* =============================================


const people=["Ali", "Veli", "Cihan", "Canan"]

console.log(people[1]); //veli

const [p1,p2,,p4]=people

console.log(p4);


const araclar=["ATV", "kAmYONET", "TIR", "ARABA", "taksi"]

const [a1,a5, ...gerikanlar]=araclar
console.log(gerikanlar);




const veri={
    id: "1",
    brand: "APPLE",
    product:"Iphone15",
    stock:100
}


const {id, brand, ...productStock}=veri
console.log(productStock); // id ve brand devre dısı bırakılıp yeni bir object oluşturuldu



const sum=(a,b)=>a+b
console.log("SUM:", sum(2,5,6,7,8));



const sumAll=(...numbers)=>{
    console.log(numbers)
    return numbers.reduce((acc, val)=> acc +val)
}
console.log("SUM:", sum(2,5,6,7,8));
console.log("SUM-ALL:", sumAll(2,5,6,7,8));
console.log("SUM-ALL:", sumAll(3,4,5));