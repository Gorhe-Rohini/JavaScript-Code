
//1.function with parameter
function greet(name) {
    console.log("Hello, " + name);
  }
  
  greet("Rohini"); // print Hello, Rohini
  


  //2.function with return type
  function add(a, b) {
    return a + b;
  };
  
  console.log(add(2, 3)); // Output: 5


  //3.Anonymous function ->No name
  let show = function() {
    console.log("Anonymous function"); //Output: Anonymous function
};
show();



//4.Arrow function

let fun = (x,y,z) =>{
    console.log(x+y+z);
}
fun(10,20,30);


  //5.default Parameter
  function msg(){
    console.log("Hello JavaScript!"); //Output: Hello JavaScript
  }
  msg();