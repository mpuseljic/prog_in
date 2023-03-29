// 1. Preokreni string
// INPUT - f(abc); -> OUTPUT - cba
//-----
function stringReverse (inputString){
    let temporaryString = "";

    for(let i = inputString.length -1; i >= 0; i-- ){
        temporaryString += inputString[i];
    }

    return temporaryString;

}
console.log(stringReverse("abc"));


//2. Je li stirng palindrom?
// INPUT - f(ana); -> OUTPUT - true
// ------
function jePalindrom(str) {
    for (let i = 0; i < str.length / 2; i++){

      if(str[i] !== str[str.length - 1 - i]){
        return false;
      }
    }
      return true;
  }

console.log(jePalindrom('ana')); // Output: true
console.log(jePalindrom('hello')); // Output: false


//3. Makni odredeno slovo iz stringa
// INPUT - f(abcdefghd, d) -> OUTPUT - (abcefgh)
function makniSlovo (string, slovo){
  let novi = '';
  for(let i = 0; i<string.length; i++){
    if(string[i] !== slovo){
      novi += string[i];
    }

  }
  return novi;
}

console.log(makniSlovo('abcdefghd', 'd'))


// 4. Makni vise odredenih slova
// INPUT - f(abcdefghd, [c, d]); -> OUTPUT - (abefgh)
function ukloniSlova(string, slova){
  let novi_s = '';
  for(let i = 0; i < string.length; i++){
    if(!slova.includes(string[i])){
      novi_s += string[i];
    }
  }
  return novi_s;
}

  console.log(ukloniSlova('abcdefghd', ['c', 'd'])); // Output: 'abefgh'



// 5. Ispisi slova koja se ponavljaju
// INPUT - f(abbcdeefff); -> OUTPUT - (bcdef)
function ispisiPonavljajucaSlova(str) {
    let ponavljajuci = '';
    for (let i = 0; i < str.length; i++) {
      let count = 0;
      for(let j=0; j<str.length; j++){
        if(str[i]===str[j]){
          count++;
        }
      }
      if(count>1 && !ponavljajuci.includes(str[i])){
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
function pretraziRijec(string, rijec){
  if(string.includes(rijec)){
    return true;
  }
  else{
    return false;
  }
}

console.log(pretraziRijec('Ne pada mi nista pametno na pamet', 'na'));

// 7. Prvo i zadnje slovo prebaci iz malog u veliko ili iz velikog u malo
// INPUT - f(I dalje mi ne pada mi nista pametno na pamet); -> OUTPUT - (i dalje ... na pameT)
function promijeniSlova(recenica){
  let nova = '';
  for(let i = 0; i < recenica.length; i++){
    if(i === 0 && recenica[i] === recenica[i].toLowerCase()){
      nova += recenica[i].toUpperCase();
    }
    else if(i === 0 && recenica[i] === recenica[i].toUpperCase()){
      nova += recenica[i].toLowerCase();
    }
    else if(i === recenica.length -1 && recenica[i] === recenica[i].toLowerCase()){
      nova += recenica[i].toUpperCase();
    }
    else if(i === recenica.length -1 && recenica[i] === recenica[i].toUpperCase()){
      nova += recenica[i].toLowerCase();
    }
    else{
      nova += recenica[i];
    }
  }
  return nova;
}

console.log(promijeniSlova('I dalje mi ne pada mi nista pametno na pamet'));
  
