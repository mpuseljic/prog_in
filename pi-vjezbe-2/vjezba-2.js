//1. Function Definition
//primjer 1
//pomoću ključne riječi function koja se koristi za definiranje funk
//name squareMe
//params - numb - argumenti 
//body - return ... vraća rezultat ključnom riječi return
function SquareMe(numb){
    return numb * numb;
}
SquareMe();
// 2.Anonymous Function
// funkcije koje nemaju ime i obično se koristi kao izraz koji 
//se može dodijeliti varijavli ili koristiti kao argument za drugu 
//primjer 2

const kvadrat = function(numb){
    return numb * numb;
}

//3. Function Expression
//primjer 3.
//definiranje funkcije unutar varijable 
//definiramo funkciju ključnom riječi function, ali umjesto da nazivamo 
//funkciju dodjeljujemo joj varijablu 'zbroj'
const square = function(numb){
    return numb * numb;
}
console.log(square)

//primjer 4

//4. Immediately invoked function Expressions (IIFE)
// funkcija u JavaScriptu koja se izvršava odmah nakon definiranja
//Ovo se može koristiti za izbjegavanje stvaranja globalnih varijabli
// i funkcija te za zaštitu varijabli od curenja u globalni opseg
(function(){
    let numb = 3;
    console.log(numb * numb)

} )();

//5. Arrow Functions
// primjer 6.
//koristi se za kratke funkcije koje ne trebaju imati posebne nazive
//i koje često vraćaju neki izraz
//ovdje koristimo sintaksu strelice umjesto ključne riječi function

function squareMe3(numb){ return numb * numb; }
(numb) => {return numb * numb};

numb => number * number



// ---------------
//1. Intro
const noviString = new String("Ovo je nas string");
const noviPrimitivniString = "Ovo je nas string";
//Razlika između const noviString = new String("Ovo je nas string"); 
//i const noviPrimitivniString = "Ovo je nas string"; 
//je u tome što prvi primjer stvara objekt tipa String, 
//dok drugi primjer stvara primitivni tip string.

//Kada stvorimo objekt tipa String, koristimo konstruktor new String(), 
//koji stvara novi objekt Stringa. Objekti tipa String su složeni objekti 
//koji imaju svojstva i metode koji se mogu koristiti za manipulaciju 
//nizom znakova.

console.log(typeof noviString);
console.log(typeof noviPrimitivniString);

 //2. How to make a string
 let prviNacin = "";
 let drugiNacin = '';
 // let treciNacin = "";
 
 let world = "world";
 // let treciNacin ="Hello ${world}";

 let hello = "Hello";
 console.log(hello + world);


 //3. How to add a new piece of string
 let helloWorld = hello + world;

 //4. String methods, some of them 
 let stringMethods = "string";
 console.log(stringMethods.length);

 const odredenoSlovo = "odredenoSlovo";
 console.log(odredenoSlovo[3]);

 const danZena = "Danas je dan zena"; 
 if(danZena.includes ("dan")){
    console.log("ukljucuje")

 }
 
 // danZena.indexOf;
 //danZena.slice
 //danZena.toLowerCase;
 //danZena.toUpperCase;
 //danZena.replace;

 // sljedeci put -> objekti

 // Objekti 
 //koriste se za grupiranje povezanih vrijednosti i funkcija u jednu cjelinu 
 //sastoje se od svojstava i metoda 

 //svojstva su vrijednosti povezane s objektom i definiraju se kao parovi ime/vrijednost
 //ime svojstva je string, a vrijednost može biti bilo koja vrijednost uključujući i druge objekte
 //svojstva se mogu čitati i mijenjati pomoću notacije s točkom ili zagradama

 //Metode su funkcije povezane s objektom 
 //i definiraju se kao funkcije u okviru objekta 
 //metode se pozivaju pomoću notacije s točkom

 //svojstva - ime, prezime, godine
 //metoda pozdrav koja ispisuje poruku koja uključuje ime i prezime osobe 

 //svojstva se mogu čitati i mijenjati pomoću notacije s točkom 
 //metode se pozivaju pomoću notacije s točkom 

 //objekti se često koriste za modeliranje stvarnog svijeta, kao što 
 //su korisnički profili, proizvodi, automobili, kućni ljubimci 