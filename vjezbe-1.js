
// 1.zadatak
for (var i = 1; i < 101; i++){
    if (i%15 == 0) console.log("FizzBuzz");
    else if(i%3 == 0) console.log("Fizz");
    else if(i%5 == 0) console.log("Buzz");
    else console.log(i);

}

// 2.zadatak

function Zbroj(){
    var total = 0;
    for(var i = 1; i<=100; i++){
        total += i;
    }
    return total;
}

var result = Zbroj.call();
console.log("Zbroj brojeva od 1 do 100 je: ", result);

// 3.zadatak