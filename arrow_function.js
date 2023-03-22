// function povecaj_za_100(broj){
//     return broj + 100
// }

//console.log(povecaj_za_100(2));


//ARROW FUNKCIJA 
var povecaj_za_100 = (broj) => broj + 100;

console.log(povecaj_za_100(2));

// MAP VRAĆA NOVO POLJE ALI MODIFICIRANO ONAKO KAKO MI ŽELIMO DA SE MODIFICIRA
// FILTER VRAĆA NOVO POLJE ALI UZ NEKI UVJET 

//MAP
let polje = [1, 2, 3, 4];

let polje2 = polje.map((el) => el + 100)
console.log(polje2);

// FILTER
let polje3 = polje.filter((el) => el > 2);
console.log(polje3);

//----------------
