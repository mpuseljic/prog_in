//1. Function Definition
//primjer 1
//function keyword 
//name squareMe
//params - numb
//body - return ...
function SquareMe(numb){
    return numb * numb;
}
SquareMe();
// 2.Anonymous Function
//primjer 2

// function(numb){
    // return numb * numb;
// }

//3. Function Expression
//primjer 3.
const square = function(numb){
    return numb * numb;
}
console.log(square)

//primjer 4

//4. Immediately invoked function Expressions (IIFE)
(function(){
    let numb = 3;
    console.log(numb * numb)

} )();

//5. Arrow Functions
// primjer 6.
function squareMe3(numb){ return numb * numb; }
(numb) => {return numb * numb};

numb => number * number



// ---------------
//1. Intro
const noviString = new String("Ovo je nas string");
const noviPrimitivniString = "Ovo je nas string";

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

 