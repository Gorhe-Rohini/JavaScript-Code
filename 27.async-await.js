function getData(dataId){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", dataId);
            resolve("success");
        },2000 );
    });
}

//Async-await

async function getAllData(){
    console.log("gatting data 1...");
    await getData(1);
    console.log("getting data 2...");
    await getData(2);
    console.log("getting data 3 ...");
    await gatData(3);
    console.log("gatting data 4 ...");
    await getData(4);
    console.log("getting data 5 ...");
    await getData(5);
}