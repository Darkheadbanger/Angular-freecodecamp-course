let Lname: string;
Lname = "John"
let newName = Lname.toUpperCase();

console.log(newName)
let age: number;

age = 30;
age = 30.5;
let stringToNumber = parseInt("25");
console.log(stringToNumber)

let isValid : boolean;
console.log(isValid = true)

let empList : string[];
empList = ["sa", "saa", "saaz"];

let numList : Array<number>;
numList = [1,2,3,4,5];

//let newNum = numList[5];

// Quelques methodes
let result = numList.filter((number) => number > 2);
console.log(result);

let numFind = numList.find((num) => num === 2);
console.log(numFind);

let numReduce = numList.reduce((acc: number, num:number) => acc + num);
console.log(numReduce);// 1 +2 = 3, 3+3 = 6 etc

// Enumerateur
const enum  Color {
    Red,
    Green,
    Blue,
}

let c0: Color = Color.Blue;
let c1: Color = Color.Green;
let c2: Color = Color.Blue;

// Tupples

let swapNums: [firstNumber: number, secondNumber: number];
function swapNumbers(num1: number, num2: number) : [number, number] {
    return [num1, num2];
}

swapNums = swapNumbers(10, 20);
console.log("swapNums", swapNums);

swapNums[0];

// Function

function add(num1: number, num2: number, num3?: number): number{
    return num1 + num2;
}

let adding = add(1,2);
console.log("adding", adding);

const sub = (num1: number, num2: number): number => num1 - num2;
console.log("sub", sub(2,5));

const mult = function (num1: number, num2: number): number {
    return num1 - num2;
}

console.log("mult", mult(5,10))

// REST
function add2(num1: number, num2: number, ...num3: number[]): number{
    return num1+ num2 + num3.reduce((a, b) => a + b, 0);
}
let numbersArray: number[] = [3, 4, 5, 6, 7, 8, 9]
let adding2 = add2(1,2, ...numbersArray);
console.log("adding", adding2);

// swapNums[2];//Tuple type '[firstNumber: number, secondNumber: number]' of length '2' has no element at index '2'.

/*
Data types
String, number, boolean, array, enum, tuple, any, void, never
*/
