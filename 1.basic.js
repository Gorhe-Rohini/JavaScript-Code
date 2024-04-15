//1. variable Declaration

/*let x=10;
var y=20;

z = 30;

console.log(x,y,z);*/

//2.console -> Method in the browser to display data. 


/*
function sum(a,b){
    console.log(a+b);
}

function calculate(a,b, sumcallback){
    sumcallback(a, b);
}

calculate(2, 4, sum);*/

//callback Hell

function getData(dataId, getNextData){

    setTimeout( () => {
        console.log("data", dataId);
        if(getNextData);
    }, 2000);
}

//call-hell

/*getData(1, ()=>{
    console.log("getting data1...");
    getData(2, ()=>{
        console.log("getting data2...");
        getData(3, ()=>{
            console.log("getting data3...");
        });
    });
});*/


//Promises

let getPromise = () => {
    return new Promise((resolve, reject) =>{
        console.log("Promises");
        resolve("success");
        //reject("error");
    });
}