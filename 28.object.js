
// 1) object literal -> literal are constant

let person = {
  firstname: "Nilesh",
  lastname: "Gorhe",
  address: "Nashik",
  age: 21,
 show:function(){
  console.log("firstname:",this.firstname  +"\n"+ this.lastname +"\n"+ this.address+"\n" + this.age);
 }
}
person.show();


// 2) way to write object

const course = {
  name: "Rahul kumar",
  age: 20,
  cgpa: 8.9
}

//name change
course["name"] = "Ramesh sharma";
console.log(course.name);

//console.log(course);
//console.log(course.name);
//console.log(course["age"]);



