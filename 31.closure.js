//A closure gives access to an outer functions scope from an inner function.

function outer(){
 var x =10;
 function inner(){

    var y =20;

    console.log(x);

    console.log(y);

 }

inner();
console.log(x);

}
outer();


// 2) way to write closure function

var a =1;
function show(){
   var b = 2;
   console.log(a);
   console.log(b);

}
console.log(a);
show();