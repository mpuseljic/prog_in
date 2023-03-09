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

function checkPalindrome(string) {

    // find the length of a string
    const len = string.length;

    // loop through half of the string
    for (let i = 0; i < len / 2; i++) {

        // check if first and last string are same
        if (string[i] !== string[len - 1 - i]) {
            return 'It is not a palindrome';
        }
    }
    return 'It is a palindrome';
}

// take input
const string = prompt('Enter a string: ');

// call the function
const value = checkPalindrome(string);

console.log(value);

//3. Makni odredeno slovo iz stringa
// INPUT - f(abcdefghd, d) -> OUTPUT - (abcefgh)
var Str = "Hello World!!"

// removing character 'o'
var newStr = Str.replace(/o/g, '')

console.log(newStr);


//4.Makni vise odredenih slova
//INPUT - f(abbcdeefff); 