
// definiranje array-a
// let array_1 = [1, "dva" , 3.1];
// let array_2 = new Array(1, "dva" , 3.1);
// let array_3 = Array(1, "dva" , 3.1);

// console.log(array_1[4]);
// console.log(array_2);
// console.log(array_3);

// let array_11 = [10];
// let array_21 = Array(10);
// console.log(array_11);
// console.log(array_21);


const fruits = ["apple" , "banana" , "cherry"];

const fruits1 = {
    string1: "apple",
    string2: "banana",
    string3: "cherry"
}

for(let i = 0; i<fruits.length; i++){
    console.log(fruits[i])
}

for (const key in fruits) {
    console.log(key);
}

for(const iterator of fruits){
    console.log(iterator);
}


// const fruits = ["apple" , "banana" , "cherry"];
// fruits.forEach(x => console.log(x));

// fruits.push("apple2");
// fruits.pop("apple");

// let myArray = ["g", "b", "c", "d", "e"];
// let myArray2 = ["f" , "a", "h"];
// //myArray = myArray.slice(1,4);
// console.log(myArray.concat(myArray2).sort());

// let myArray = ["banana" , "apple"];
// let index = myArray.indexOf("apple");
// console.log(index)

// let myArray = ["banana" , "apple"];
// let myArray2 = myArray;
// myArray2[1] = "ananas";
// console.log(myArray2);


// ----------------
// const originalArray = [1, 2, 3];

// const shallowCopyArray = originalArray;
// const shallowCopyArray2 = Array.from(originalArray);

// const deepCopyArray = JSON.parse(JSON.stringify(originalArray))

// shallowCopyArray[0] = 4;
// shallowCopyArray2[0] = 4;
// deepCopyArray[0] = 5;


// console.log(originalArray);
// console.log(shallowCopyArray);
// console.log(deepCopyArray);
// console.log(originalArray)

// --------------------

// let numbers = [1, 2, 3, 4, 5];
// let squares = numbers.map((numb) => {
//     return numb * numb;
// })
// console.log(squares);

// let squares2 = []
// for(const numb of numbers){
//     squares.push(numb*numb)

// }
// console.log(squares2)

// -------
// 1. Kreiraj polje koje sadrži brojeve od 1 do 10 i ispiši sve parove brojeva ciji je zbroj jednak broju 10.

let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let target = 10;

for(let i = 0; i< number.length; i++){
    for(let j = i + 1; j < number.length; j++){
        if(number[i] + number[j] == target){
        console.log(number[i], number[j])
        }
    }
}

// 2. Sastavi listu 6 studenata na nekom kolegiju sa sljedećim svojstvima: name, age, gender, grade.
//Kreiraj funkciju koja vraća sve podatke najbolje studentice na kolegiju.

let students = [

    {name: 'John', age:21 , gender:'male' , grade:85 },
    {name: 'Mary', age:19 , gender:'female' , grade:92 },
    {name: 'David', age:25 , gender:'male', grade:78 },
    {name: 'Ana', age:22 , gender: 'female', grade:89 },
]

function findTopStudent(){
    let topGrade = 0;
    let topFemaleStudent = null;

    for(let student of students){
        if(student.gender === 'female' && student.grade > topGrade){
            topGrade = student.grade;
            topFemaleStudent = student;
        }
    }
    console.log(topFemaleStudent)
}


// 3. Svaki element u zadanom polju objekata transformiraju na način da mu dodas svojstvo "sales" koje ce sadrzavati random broj prodanih primjeraka 
// knjiga. 

const books = [
    {title: "The Great Gatsby", author:"F.Scott Fitzgerald" , publicationYear: 1925 },
    {title: "To Kill a Mockingbird", author: "Harper Lee", publicationYear: 1960 },
]

for(let book of books){
    book["sales"] = Math.floor(Math.random() * 100);
}
console.log(books)
//--------
const booksWithSales = books.map(book => {
    return {
        title: book.title,
        author: book.author,
        publicationYear: book.publicationYear,
        sales: Math.floor(Math.random() * 100)
    }

})
console.log(booksWithSales)

// ----------------
// 4. Naslov knjige koja je izdana 1925
let bookTitle = books.filter((book) => {
    return book.publicationYear == 1925
}).map((book) => {
    return book.title;
})

console.log(bookTitle);

// 5. Iskoristi funkciju reduce tako da ugnijezdeno polje pretvoris u jedinstveno.

const myArray = [[1, 2], [3,4] , [5,6]];

const flattenedArray = myArray.reduce((accumulator, currentValue) => {
    return accumulator.concat(currentValue);
}, []);

console.log(flattenedArray)

