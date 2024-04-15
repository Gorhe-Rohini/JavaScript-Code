

//Pass by value 

let number = 10;
function increase(number){
    number++;
}

increase(number);
console.log(number);



//pass by reference

let obj = {value: 10};

function func(obj){
    obj.value++;
}
func(obj);
console.log(obj);