//Variable Scope

/*//1.var scope
function myFun() {
    let x1 = 1;
    if (true) {
        let x1 = 2;
        console.log(x1,"Variable first"); // will be print 2
    }
    console.log(x1, "Variable second"); // will be print 2
}
myFun();*/

/*//2.let scope
function fun() {
    let x = 1;
    if (true) {
        let x = 2;
        console.log(x); // will be print 2
    }
    console.log(x); // will be print 1
}
fun();*/

//3.const scope
function Constfun() {
   // const x = 1;
    if (true) {
        const x = 2;
        console.log(x); // will be print 2
    }
    console.log(x); // will be print 1
}
Constfun();

