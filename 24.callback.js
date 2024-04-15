//callback is a passed as an argument to another function

//synchronous callback
// 1) way to writing function
/*function sum(a, b){
    console.log(a + b);
}

function calculate(a, b, sumcallback){
    sumcallback(a, b);
}
calculate(1, 2, sum);

// 2) using arrow function

/*function myfun(x, y, mul){
  mul(x, y);
}
myfun(4, 2, (x, y) => {
    console.log(x * y);
});


//Asynchronous callback
/*const hello = () =>{
    console.log("hello");
}

setTimeout(hello, 2000);*/

function sum(a, b){
    console.log(a+b);
}

function calculate(a, b, sumcallback){
 sumcallback(a,b);
}
calculate(4, 5, sum);