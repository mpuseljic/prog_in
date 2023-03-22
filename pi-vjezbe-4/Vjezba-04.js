
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


// const fruits = ["apple" , "banana" , "cherry"];

// const fruits1 = {
//     string1: "apple",
//     string2: "banana",
//     string3: "cherry"
// }

// for(let i = 0; i<fruits.length; i++){
//     console.log(fruits[i])
// }

// for (const key in fruits) {
//     console.log(key);
// }

// for(const iterator of fruits){
//     console.log(iterator);
// }


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

const originalArray = [1, 2, 3];

const shallowCopyArray = originalArray;
const shallowCopyArray2 = Array.from(originalArray);

const deepCopyArray = JSON.parse(JSON.stringify(originalArray))

shallowCopyArray[0] = 4;
shallowCopyArray2[0] = 4;
deepCopyArray[0] = 4;
deepCopyArray[0];

console.log(originalArray);
console.log(shallowCopyArray);
console.log(deepCopyArray);