//Array -> collection of items

// // 1) Ways of writing array 
//let nm =["Rohini", "Kranti", "Rani", "Komal", "Pallavi"];
//console.log(nm);
//console.log(nm.length);

// 2) Ways of writing array
//let marks = [89, 99, 70, 55, 67, 73];
//console.log(marks);

// 3) Ways of writing array using new keyword
//let marks = new Array(77, 88, 99, 66, 55);
//console.log(marks);

//typeof 
//console.log(typeof marks);

//index ->check the position
//console.log(marks[0]);

//change the value of array
//console.log(marks[3]=80);

// 4) Ways of writing array using for loop
//let fruits = ["Kiwi", "Banana", "Mango", "Orange", "Apple"];
//for(let i=0; i<fruits.length; i++){
//    console.log(fruits[i]);
//}

// 5) Ways of writing array using for of loop
//let cities = ["Nashik", "Pune", "Mumbai", "Sinnar", "Igtpuri"];
//for(let city of cities){
//   console.log(city);
//}

// 6) Methods of array
// 1) push() -> add to end
//let lang = ["Html", "CSS", "JS"];
//lang.push("React", "Angular", "Vue");
//console.log(lang); 

let arr =[1, 2, 3];
arr.shift(0);
console.log(arr);



// 2) pop() -> delete from end
//let lang = ["Html", "CSS", "JS"];
//console.log(lang);
//let del= lang.pop();
//console.log(lang);
//console.log("Deleted Value = " + del);

// 3) toString() -> converts array to string
//let arr = [1,2,3,4,5,6];
//console.log(arr);
//console.log(arr.toString());

// 4) concat() -> Joins multiple array
//let arr1 = ["Ram", "Rashi", "Kavita"];
//let arr2 = ["Mrug", "Ramesh"];
//console.log(arr1.concat(arr2));

// 5) Unshift() -> add to start
//let arr = ["Ram", "Rashi", "Kavita"];
//arr.unshift("Nilesh");
//console.log(arr);

// 6) shift() -> delete to start
//let num = [1,2,3,4,5,6];
//num.shift();
//console.log(num);

// 7) slice() -> returns a pieace of array
//let sub = ["DS", "Math", "IOT", "BI"];
//console.log(sub.slice(1, 3));
//console.log(sub.slice(1));

// 8) splice() -> change original array (add, rmove, replace)
//let arr = [1, 2, 3, 4, 5];
//arr.splice(0, 2, 101, 102);
//console.log(arr);
