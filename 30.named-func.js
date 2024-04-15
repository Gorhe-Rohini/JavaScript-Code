//Named fuction used as a callback to that function

//Normal function

function myfunc(a,b){
    console.log("add= ", a+b);
}
myfunc(3,5);


//Named fuction

let func = function(x, y){
    console.log("mul= " ,x * y);
}

func(5,4);