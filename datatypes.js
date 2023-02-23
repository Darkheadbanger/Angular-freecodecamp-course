"use strict";
let Lname;
Lname = "John";
let newName = Lname.toUpperCase();
console.log(newName);
let age;
age = 30;
age = 30.5;
let stringToNumber = parseInt("25");
console.log(stringToNumber);
let isValid;
console.log(isValid = true);
let empList;
empList = ["sa", "saa", "saaz"];
let numList;
numList = [1, 2, 3, 4, 5];
//let newNum = numList[5];
// Quelques methodes
let result = numList.filter((number) => number > 2);
console.log(result);
let numFind = numList.find((num) => num === 2);
console.log(numFind);
let numReduce = numList.reduce((acc, num) => acc + num);
console.log(numReduce); // 1 +2 = 3, 3+3 = 6 etc
let c0 = 2 /* Color.Blue */;
let c1 = 1 /* Color.Green */;
let c2 = 2 /* Color.Blue */;
// Tupples
let swapNums;
function swapNumbers(num1, num2) {
    return [num1, num2];
}
swapNums = swapNumbers(10, 20);
console.log("swapNums", swapNums);
swapNums[0];
// Function
function add(num1, num2, num3) {
    return num1 + num2;
}
let adding = add(1, 2);
console.log("adding", adding);
const sub = (num1, num2) => num1 - num2;
console.log("sub", sub(2, 5));
const mult = function (num1, num2) {
    return num1 - num2;
};
console.log("mult", mult(5, 10));
// swapNums[2];//Tuple type '[firstNumber: number, secondNumber: number]' of length '2' has no element at index '2'.
/*
Data types
String, number, boolean, array, enum, tuple, any, void, never
*/
