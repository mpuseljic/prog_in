// 1. Preokreni string
// INPUT - f(abc); -> OUTPUT - cba
//-----
function stringReverse (inputString){
    let temporaryString = "";

    for(let i = inputString.length -1; i >= 0; i-- ){
        temporaryString = inputString[i];
    }

    return temporaryString;

}
console.log(stringReverse("abc"));


//2. Je li stirng palindrom?
// INPUT - f(ana); -> OUTPUT - true
// ------
// program to check if the string is palindrome or not
function jePalindrom(str) {
    const obrnuti = str.split('').reverse().join('');
    return str === obrnuti;
  }

console.log(jePalindrom('ana')); // Output: true
console.log(jePalindrom('hello')); // Output: false


//3. Makni odredeno slovo iz stringa
// INPUT - f(abcdefghd, d) -> OUTPUT - (abcefgh)
var Str = "Hello World!!"

// removing character 'o'
var newStr = Str.replace(/o/g, '')

console.log(newStr);


// 4. Makni vise odredenih slova
// INPUT - f(abcdefghd, [c, d]); -> OUTPUT - (abefgh)
function ukloniZnakove(str, znakovi) {
    for (let i = 0; i < znakovi.length; i++) {
      str = str.split(znakovi[i]).join('');
    }
    return str;
  }

  console.log(ukloniZnakove('abcdefghd', ['c', 'd'])); // Output: 'abefgh'



// 5. Ispisi slova koja se ponavljaju
// INPUT - f(abbcdeefff); -> OUTPUT - (bcdef)
function ispisiPonavljajucaSlova(str) {
    let ponavljajuci = '';
    for (let i = 0; i < str.length; i++) {
      if (str.lastIndexOf(str[i]) !== i && ponavljajuci.indexOf(str[i]) === -1) {
        ponavljajuci += str[i];
      }
    }
    return ponavljajuci;
  }
  //Ova funkcija prolazi kroz niz i provjerava da li se znak ponavlja u nizu koristeći lastIndexOf() metodu niza. 
  // Ako se znak ponavlja i nije već dodan u varijablu ponavljajuci, tada će se znak dodati u tu varijablu.

  console.log(ispisiPonavljajucaSlova('abbcdeefff')); // Output: 'bcdef'


// 6. Pretrazi rijec u recenici
// INPUT - f(Ne pada mi nista pametno na pamet, na); -> OUTPUT - (true)
function provjeriRijec(recenica, rijec) {
    return recenica.toLowerCase().indexOf(rijec.toLowerCase()) !== -1;
  }
  
  console.log(provjeriRijec('Ne pada mi nista pametno na pamet', 'na')); // Output: true

// 7. Prvo i zadnje slovo prebaci iz malog u veliko ili iz velikog u malo
// INPUT - f(I dalje mi ne pada mi nista pametno na pamet); -> OUTPUT - (i dalje ... na pameT)
function promijeniSlova(str) {
    const rijeci = str.split(' ');
    let novaRecenica = '';
    for (let i = 0; i < rijeci.length; i++) {
      const prvoSlovo = rijeci[i].charAt(0);
      const zadnjeSlovo = rijeci[i].charAt(rijeci[i].length - 1);
      let novaRijec = '';
      if (prvoSlovo === prvoSlovo.toUpperCase()) {
        novaRijec += prvoSlovo.toLowerCase();
      } else {
        novaRijec += prvoSlovo.toUpperCase();
      }
      novaRijec += rijeci[i].slice(1, -1);
      if (zadnjeSlovo === zadnjeSlovo.toUpperCase()) {
        novaRijec += zadnjeSlovo.toLowerCase();
      } else {
        novaRijec += zadnjeSlovo.toUpperCase();
      }
      novaRecenica += novaRijec + ' ';
    }
    return novaRecenica.trim();
  }
  
//Ova funkcija dijeli rečenicu na riječi pomoću split() metode niza, a zatim prolazi kroz svaku riječ. 
//Za svaku riječ, uzima prvo i zadnje slovo pomoću charAt() metode niza, 
//a zatim stvara novu riječ dodavanjem promijenjenih slova na preostali dio riječi koji se obrađuje pomoću 
//slice() metode.

//Ako je prvo slovo veliko, tada se mijenja u malo, a ako je malo, tada se mijenja u veliko. 
//Isto se radi i za zadnje slovo.

console.log(promijeniSlova('I dalje mi ne pada mi nista pametno na pamet')); // Output: 'i dalje ... na pameT'

