
//Asynchronous doesn't block the flow

console.log("one");
console.log("two");

setTimeout(() =>{
    console.log("Hello");
}, 2000);
console.log("three");
console.log("four");