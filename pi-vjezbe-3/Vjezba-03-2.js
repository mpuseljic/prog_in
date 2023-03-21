//1. UKOLIKO JE CINJENICA LAZNA, IZBRISI CINJENICU I POSTAVI SKRIVENO NA TRUE, ZATIM FILTRIRAJ ARRAY I PRIKAZI SAMO ONE CINJENICE KOJE SU ISTINITE
let randomFacts = [
    {
        factoid: "Previse vode te moze ubiti",
        istina: true,
        skriveno: null
    },
    {
        factoid: "RH je 57 na svijetu po indeksu koruptivne percepcije",
        istina: true,
        skriveno: null
    },
    {
        factoid: null,
        istina: false,
        skriveno: null
    },
    {
        factoid: "Medijalna placa je iznosila 6290kn, a prosjecna 7574kn u 2022.",
        istina: true,
        skriveno: null
    },
    {
        factoid: "Proslo je 20 godina otkad je Hajduk bio prvak",
        istina: false,
        skriveno: null
    },
]


randomFacts.forEach(element => {
    if(element.istina === false) {
        element.factoid = "";
        element.skriveno = true;
    }

    if(element.skriveno!=true){
        console.log(element.factoid);
    }
})


//2. AKO JE DRZAVA CLANICA SCHENGENSKOG PROSTORA, POSTAVI PROPERTY "slobodanProlazak" NA true I ANALOGNO TOME.
let europskeDrzave = [
    {
        drzava: "Austrija",
        uSchengenu: true,
        slobodanProlazak: null
    },
    {
        drzava: "Hrvatska",
        uSchengenu: true,
        slobodanProlazak: null
    },
    {
        drzava: "Srbija",
        uSchengenu: true,
        slobodanProlazak: null
    },
    {
        drzava: "Velika Britanija",
        uSchengenu: false,
        slobodanProlazak: null
    },
    {
        drzava: "Island",
        uSchengenu: true,
        slobodanProlazak: null
    }
];

randomFacts.forEach(element => {
    if(element.uSchengenu === false) {
        element.slobodanProlazak = true;
    }

    if(element.uSchengenu!=true){
        console.log(element.slobodanProlazak);
    }
})

//3. IZRACUNAJ PROSJEK JUNIORSKIH PLACA
//4. IZRACUNAJ MEDIJAN SVIH PLACA
let prosjekDeveloperskihPlaca = [
    { 
        placa: 1300,
        senioritet: "junior",
        area: "frontend",
        tech: "Vuejs",
    },
    {
        placa: 2600,
        senioritet: "senior",
        area: "frontend",
        tech: "React.js",
    },
    {
        placa: 1400,
        senioritet: "junior",
        area: "frontend",
        tech: "Angular.js",
    },
    {
        placa: 1900,
        senioritet: "medior",
        area: "backend",
        tech: ".NET",
    },
    {
        placa: 2300,
        senioritet: "senior",
        area: "backend",
        tech: "Django",
    }
];



//5. ISPISI
let levels = {
    prvaRazina: {
        printMe: () => console.log("1"),
        drugaRazina: {
            printMe: () => console.log("2"),
            trecaRazina: {
                printMe: () => console.log("3"),
                cetvrtaRazina: {
                    printMe: () => console.log("4"),
                    petaRazina: {
                        printMe: () => console.log("5"),
                        sestaRazina: {
                            printMe: () => console.log("6"),
                            sedmaRazina: {
                                printMe: () => console.log("7"),
                                osmaRazina: {
                                    printMe: () => console.log("8"),
                                    devetaRazina: {
                                        printMe: () => console.log("9"),
                                        desetaRazina: {
                                            printMe: () => console.log("10"),
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}