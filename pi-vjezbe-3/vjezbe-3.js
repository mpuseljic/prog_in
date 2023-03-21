//Primjer

const Osoba = {
    ime:"",
    prezime:"",
    dob:"",
    adresa:"",

    postaviOsobnePodatke: function(ime, prezime, dob, adresa){
        this.ime = ime;
        this.prezime = prezime;
        this.dob = dob;
        this.adresa = adresa
    

},

ispisiOsobnePodatke:() => {
    console.log(this.ime);
    console.log(this.prezime);
    console.log(this.dob);
    console.log(this.adresa);
}
}

Osoba.postaviOsobnePodatke("Jozo", "Curkovic", 50, "P14");
Osoba.ispisiOsobnePodatke();

Osoba.prezime = "Neko novo prezime";
console.log(Osoba.prezime);

Osoba["prezime"] = "Neko novo novo prezime";
console.log(Osoba.prezime);

let osoba = {
    ime: "Jozo",
    prezime: "Curkovic"
};


//3.Proto
//let temporaryString = "";

// JSON je JavaScript Object Notation


//console.log(JSON.stringify(osoba));


// console.log(JSON.parse(osoba));


//4.Methods
//5. JSON
//6. Fun-Fact

let staraVarijabla = {
    atribut: 1
}
novaVarijabla = {...staraVarijabla};
staraVarijabla.atribut = 2;

console.log(novaVarijabla);

// plitko kopiranje








