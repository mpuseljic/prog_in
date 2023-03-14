let popis = [
    {
        ime: "Marko",
        prezime: "Marković"
    },
    {
        ime: "Iva",
        prezime: "Ivić"
    },
    {
        ime: "Lucija",
        prezime: "Lucić"
    },
    {
        ime: "Nikola",
        prezime: "Nikolić"
    }
];

console.log(popis); // → vraća listu objekata
console.log(popis[0].ime); // → ime prvog objekta u listi
console.log(popis[3].prezime); // → prezime četvrtog objekta
// console.log(popis[10]) // undefined 
//console.log(popis[10].prezime); //greska
