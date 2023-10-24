console.log("OBJECTS");

// cars=["Audio", "BMW", "Anadol"]
// brand=["0.8", "3.20", "lux"]
// engine=[4000, 2000, 1.600]
// speed=[8,7,4]
// power=["hybrid", "electrity", "fuel+lpg"]

// const cars={
//     car: "Audi",
//     brand:"Q8",
//     engine:4000,
//     speed: 8

// }


const cars=["Audi","BMW","Anadol"]
const brand= ["Q8","3 20", "Lux"]
const engine=[4000,2000,1600]
const speed=[8,7,4]
const power=["hybrid","electricity","Fuel+LPG"]
 console.log(cars[0], brand[0], engine[0], speed[0]);




 const araba={
    car: "Audi",
    brand:"Q8",
    engine:4000,
    speed: 8,
    colors:["pink", "blue"]

 }
 console.log(araba.car);
 console.log(araba["car"]);
 console.log(araba.brand);
 console.log(araba.engine);
 console.log(araba.car)


//  const key= prompt("Aracın hangi bilgisini ööğrenmek istersiniz? marka model ")

//  console.log(araba[key]);



 //! 3 farkli yontem ile Object olusturulabilir

//* ---------------------------------------------------------
//* 1- Object literal (En cok tercih edilen yontem)
//* ---------------------------------------------------------

const arac = {
   marka: "Audi",
   model: "Q8",
   motor: 4000,
   vites: 8,
   colors: ["pink", "black", "gray"],
   power: { fosil: "Benzin", green: "Elektrik" },
 }
 
 //? Objelere erisim de 2 yontem vardir.
 //? (.) dot notasyonu
 console.log("**********")
 console.log(arac.marka)
 console.log(arac.motor)
 console.log(arac.Model) //? undefined
 console.log(arac.colors[2]) //? Gray
 console.log(arac.power.green) //? Elektrik
 
 //? Square bracket yontemi
 console.log(arac["model"])
 console.log(arac["power"]["fosil"])
 
 //! bu yontem key isimlerinin degiskenlerde saklanmasına izin verdigi icin dinamik olarak obje erisimlerinde kullanılabilir.
 // const key = prompt(
 //   "Aracin hangi bilgisini ogrenmek istersiniz, marka, model,motor,vites ?"
 // )
 
 // console.log(arac[key])
 
 arac.model = "Q3"
 arac["power"]["fosil"] = "Mazot"
 console.log(arac)
 
 //? Uncaught TypeError: Assignment to constant variable.
 // arac = [4, 3, 2]
 
 arac.sunroof = true
 console.log(arac)
 
//*************** */ OBJECT METHODLARI******************

const personel={
   ad:"ahmet",
   soyad: "can",
   dogum: 1990,
   maas: 15000,
   ehliyet: true,
   diller:["English", "German"],
   yasHesapla: function(){
      return new Date().getFullYear()-this.dogum

   },
   // ozet: ()=> {
   //    return `${this.ad} ${this.soyad} ${this.yasHesapla()} yasındadır`
   //  },
   ozet:function () {
      return `${this.ad} ${this.soyad} ${this.yasHesapla()} yasındadır`
   },
}
console.log(personel.yasHesapla());
console.log(personel.ozet());



//********************JSON*************** */

const people={
ahmet:{
ad: "Ahmet",
soyad: "Can"
},
   
}
console.log(people.ahmet.ad);



const peopleJSON=[
   {ad:"Ahmet",soyad:"Can"},
   
]
console.log(peopleJSON[0].ad);

const team = [
   { name: "Ahmet", surname: "Can", job: "Developer", age: 30 },
   { name: "Mary", surname: "Bary", job: "tester", age: 22 },
   { name: "Hazel", surname: "Nut", job: "developer", age: 20 },
 ]

 team.forEach((t)=>console.log(t.job))
 const names=team.map((n)=>(n.name))
 console.log(names);



 const toplamYas= team.reduce((sum, p)=>sum+p.age,0)
 console.log(toplamYas);

//* Ornek3: name ve surname'leri birlestirip buyuk harfe ceviren ve
//* bunu fullName key'i ile saklayan, ayni zamanda age degerlerini 5
//* arttirarak age key'ine saklayan ve olusan diziyi donduren kodu yazınız.


const cocatinatedNames=team.map((p)=>{
   return {
      fullName:`${p.name.toUpperCase()} ${p.surname.toUpperCase()}`,
      age: p.age +5,
   }
})
console.log(cocatinatedNames);
