
// 1.zadatak
for (var i = 1; i < 101; i++){
    if (i%15 == 0) console.log("FizzBuzz");
    else if(i%3 == 0) console.log("Fizz");
    else if(i%5 == 0) console.log("Buzz");
    else console.log(i);

}

// 2.zadatak

function Zbroj(){
    let sum = 0;
    for(let i = 1; i<=100; i++){
        sum += i;
    }
    console.log("Zbroj: ", sum);
}
Zbroj();

// 3.zadatak
function Kvadriraj(parametar){
    return parametar * parametar;
}
console.log("Kvadrat: ", Kvadriraj(2));

// 4.zadatak
// Napisi rekurzivnu funkciju koja iterira sve dok ne dostigne vrijednost drugog parametra
function IWillSayWhenYouCanStop(step, base) {
    if(step == base) {
        return;
    }
    step++;
    return IWillSayWhenYouCanStop(step, base);
}
IWillSayWhenYouCanStop(0, 100);