
// operators in js
// 1.Relational Operator : <,>,<=,>=,==,!=,===,!==
/*if(4<5)
console.log('True')
else
console.log("False")


if(4>5)
console.log('True')
else
console.log("False")



if(4<=5)
console.log('True')
else
console.log("False")


if(4>=5)
console.log('True')
else
console.log("False")

if( 5==5)
console.log('True')
else
console.log("False")


if(5!=5)
console.log('True')
else
console.log("False")

if(5===5)                 //equal to, check type and data if both matches with each other returns true otherwise false
console.log('True')
else
console.log("False")


if(5!==5)                 //not equal to, return opposite result of equal to
console.log('True')
else
console.log("False") */


//2.Logical Operator  -   &&  ||  !  

let a=8, b=5;

console.log(!a<b);
/*
let x=4, y=5;
if(x<y && y>x)
console.log("True")
else
console.log("False")


if(x<y || y>x)
console.log("True")
else
console.log("False")

if(!x)
console.log("True")
else
console.log("False")




// 3.Bitwise Operator   -  &  |  !  ^  <<   >>
let a=4;
let b=5;
console.log(x&y);

/*Explation :

     x = 4  ,  y = 5

     4  ->  1 0 0           (as binary)           
     5  ->  1 0 1           (as binary)  
     -------------
     4  ->  1 0 0           ( 4 is answer)*/


// >>   right shift
 
//console.log(y>>2);

/* Explanations :

     y = 5

     5 -> 1 0 1     // It shifts last 2 bits then we will get
     ans = 1  (as binary)
     
*/


// <<   left shift
//console.log(y<<2);

/*

 Explanation :

   y = 5
   5 ->  1 0 1      ( It shifts more 2 zeros at the end)
   ans ->  1 0 1 0 0 ( as binary)

*/


// 4.Assignment  ->  = ( used to assign value to the variable)



// 5. unary operators ->   

// + , -  ->  Both are sign of digits therefore they are unary operators
// ++, -- -> increament & decrement operators
//typeof , delete -> Both are unary operators which take one operand to perform it's operations\




// 6. conditional operator OR Ternary Operator

// It takes 3 operands to perform it's operation

// check even or odd
/*x=5
console.log(x%2?"Odd":"Even"); */