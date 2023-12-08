
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
//////Practice 5.3
const myWork = [];
for (let x = 1; x < 10; x++) {
    let stat = x % 2 ? true : false;
    let temp = {
        name: `Lesson ${x}`, status: stat
    };
    myWork.push(temp);
}
console.log(myWork);


//practice 5.4
const myTable = [];
const rows = 4;
const cols = 7;
let counter = 0;
for (let y = 0; y < rows; y++) {
    let tempTable = [];
    for (let x = 0; x < cols; x++) {
        counter++;
        tempTable.push(counter);
    }
    myTable.push(tempTable);
}
console.table(myTable);

//practice 5.5
const grid = [];
const cells = 64;
letcounter = 0;
let row;
for (let x = 0; x < cells + 1; x++) {
    if (counter % 8 == 0) {
        if (row != undefined) {        
            grid.push(row);
        }
        row = [];
    }
    counter++;
    let temp = counter;
    row.push(temp);
}
console.table(grid);
//practice 5.6
const myArray = [];
for (let x = 0; x < 10; x++) {
    myArray.push(x + 1);
}
console.log(myArray);
 
for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
}
for (let val of myArray) {
    console.log(val);
}
//practice 5.7
const obj = {
    a: 1,
    b: 2,
    c: 3
};
for (let prop in obj) {
    console.log(prop, obj[prop]);
}
const arr = ["a", "b", "c"];
for (let w = 0; w < arr.length; w++) {
    console.log(w, arr[w]);
}
 
for (el in arr) {
    console.log(el, arr[el]);
} 
//practice 5.8

let output = "";
let skipThis = 7;
for (let i = 0; i < 10; i++) {
  if (i === skipThis) {
    break;
  }
  output += i;
}
 console.log(output); 
 //project

 const mytable = [];
const numm = 10;
for(let x=0; x<numm; x++){
    const temp = [];
    for(let y = 0; y<numm; y++){
        temp.push(x*y);
    }
    myTable.push(temp);
}
 
console.table(myTable); 


///practice chapter 6

//6.1
function adder(a, b) {
    return a + b;
}
const val1 = 10; 
const val2 = 20;
console.log(adder(val1, val2));
console.log(adder(20, 30));


//6.2
const adj = ["super", "wonderful", "bad", "angry", "careful"];
 
function myFun() {
    const question = prompt("What is your name?");
    const nameAdj = Math.floor(Math.random() * adj.length);
    console.log(adj[nameAdj] + " " + question );
}
myFun();

//6.3
constval1 = 10;
constval2 = 5;
let operat = "-";
function cal(a, b, op) {
  if (op == "-") {
    console.log(a + b);
  } else {
    console.log(a + b);
  }
}
cal(val1, val2, operat);

//6.4
const myArr = [];
 
for(let x=0; x<10; x++){
  let val1 = 5 * x;
  let val2 = x * x;
  let res = cal(val1, val2, "+");
  myArr.push(res);
}
console.log(myArr);
function cal(a, b, op) {
  if (op == "-") {
    return a - b;
  } else {
    return a + b;
  }
}

//6.5
let val = "1000";

(function () {
    let val = "100"; // scope variable
    console.log(val);
})();

let result = (function () {
    let val = "Laurence";
    return val;
})();
console.log(result);
console.log(val);

(function (val) {
    console.log(`My name is ${val}`);
})("Laurence");

//6.6

function calcFactorial(nr) { 
    console.log(nr);
    if (nr === 0) { 
        return 1; 
    } 
    else { 
        return nr * calcFactorial(--nr); 
    } 
} 
console.log(calcFactorial(4));

//6.7

let start = 10; 
function loop1(val) { 
    console.log(val); 
    if (val < 1) { 
        return; 
    } 
    return loop1(val - 1); 
} 
loop1(start); 
function loop2(val) { 
    console.log(val); 
    if (val > 0) { 
        val--; 
        return loop2(val); 
    } 
    return; 
} 
loop2(start);


//6.8
const test = function(val){
    console.log(val);
}
test('hello 1');
 
function test1(val){
    console.log(val);
}
test1("hello 2");
//project1

const main = function counter(i) {
    console.log(i);
    if (i < 10) {
        return counter(i + 1);
    }
    return;
    }
    main(0);

    //project2
    const one  = ()=> console.log('one'); 
const two  = ()=> console.log('two'); 
const three = () =>{
    console.log('three'); 
    one(); 
    two(); 
}
const four = () =>{
    console.log('four');  
    setTimeout(one,0); 
    three();
}
four();






