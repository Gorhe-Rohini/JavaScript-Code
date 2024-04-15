//promise is for "eventual" completion of task.
//It is a solution of callback Hell.

/*

const cart = ["mobile", "electronics", "TVs"];

createOrder(cart, function (orderId){
   proceedToPayment(orderId);
});

showOrderSummary(paymentInfo);


const promise = createdOrder(cart);

promise.then(function (orderId){
    proceedToPayment(orderId);
});
*/
//let promise = new Promise((resolve, reject) => {
  // console.log("I am a promise");
   // reject("some error occurred");
//});

//create promise

/*function getData(dataId, getNextData){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            console.log("data", dataId);
            resolve("success");
            //reject("error");
            if(getNextData){
                getNextData();
            }
        }, 5000);
    });
}*/

//use promise .then & .catch

/*const getPromise = () => {
    return new Promise((resolve, reject) => {
        console.log("I am a promise");
        resolve("success");
       // reject("newtwork error");
    });
};

let promise = getPromise();
promise.then((res)=> {
    console.log("promise fulfilled", res);
});

promise.catch((err)=>{
    console.log("rejected", err);
});*/

//Promise chain

/*
function asyncfunc1(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data1");
            resolve("success");
        }, 4000);
    });
}

function asyncfunc2(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data2");
        },4000);
    });
}

console.log("fetching data 1........");
asyncfunc1().then((res)=> {
    console.log("fetching data 2......");
    asyncfunc2().then((res) => {

    });
});*/

function getData(dataId){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", dataId);
            resolve("succss");
        }, 3000);
    });
}

//promise chain
getData(1)
.then((res) => {
    return getData(2);
})
.then((res) => {
    return getData(3);
})
.then((res) => {
    console.log(res);
});
