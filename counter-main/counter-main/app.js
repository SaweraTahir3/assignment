
//  EX 5.1 //
const maxValue = 5;
const solution = Math.floor(Math.random() * maxValue) + 1;
let isCorrect = false;

while (!isCorrect) {
    const userGuessString = prompt(`Enter a number between 1 and ${maxValue}:`);
    const userGuess = parseInt(userGuessString);

    if (userGuess === solution) {
        isCorrect = true;
        alert("Congratulations! Your guess is correct!");
    }
    else {
        if (userGuess > solution) {
            alert("Too high! Try again.");
        } else {
            alert("Too low! Try again.");
        }
    }
}
//---------------------------- EX 5.2------------------------------------ //
let count = 0
document.getElementById("onebtn").onclick = function () {
    count += 1;
    document.getElementById("countable").innerHTML = count;
}
document.getElementById("resetbtn").onclick = function () {
    count = 0;

    document.getElementById("countable").innerHTML = count;

}
document.getElementById("threebtn").onclick = function () {
    count -= 1;
    document.getElementById("countable").innerHTML = count;


}
//--------------------------complete-------------------------------------//




// ======================== EX =5.3=======================================//
// QUESTION NO . 1//
// let mywork = []
// // QUESTION NO .2 //
// for (let i = 0; i < 10; i++) {
// let are = x%2 ? true:false;
// let temp ={...
//     name ,lesson $ {x} ${ stat },
// }
// }






