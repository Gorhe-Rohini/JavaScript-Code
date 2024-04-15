//1.String

str1= "Rani";
str2= "Komal";
console.log(str1,str2);

//2.Number -> stored as decimal numbers (floating point).

num1= 10;
num2=20.9;
console.log(num1, num2);

//3.BigInt -> stored in a 64-bit floating-point format.

let x=BigInt(12345678901234567890);
console.log(x);

//4.Boolean ->True or false
let x1=5;
let y1=5;
let z1=6;
console.log(x1==y1);
console.log(y1==z1);

//5.Null & 6.Undefine

let a=null;
let b=undefined;
console.log(a,b);

//7.symbol
//let sys=Symbol();
//console.log(sys);

//8.Object datatype
// Object:
const person = {firstName:"Nlesh", lastName:"Gorhe"};
console.log(person);


// Array object:
const fruits = ["kiwi", "Mango", "Banana"];
console.log(fruits);

// Date object:
const date = new Date("2024-04-10");
console.log(date);