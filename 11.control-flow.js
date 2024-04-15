
// control statement

// 1

x = 3
if(x%2)
console.log("Odd");
else
console.log("Even");


// 2
function divisible(a,b)
{
if(b==0)
throw "Divide By Zero";
return a/b;
}
console.log(divisible(7,0))


// 3. Ternary Operator

x= 29
console.log(x%2?"Odd":"Even");