console.log("Hello World!");

/* Variables */

// Var


var salaryAli = 5000;
var salaryCan = 6000;

var raise = 0.35;

console.log(salaryAli + (salaryAli * raise)); // Salary Ali
console.log(salaryCan + (salaryCan * raise)); // Salary Can

// Let

var nameOfProduct = "iPhone 14 Pro Max"; //string
let price = 1100

// type of = print to console that which type of your variable. Ex: String, Number, ...
console.log(typeof nameOfProduct);
console.log(typeof price);

let number1 = "10";
let number2 = "20";

console.log(number1 + number2); // which means string + string. So there's no any mathematical equations. It should be (String) number1 + (String) number2.

var n1 = 10;
var n2 = 20;

console.log(n1 + n2);

// Actually there's another way here. I can easily transform the variables from string to number just if I can. For instance:

console.log(Number(number1) + Number(number2));

// Or I can also do the same thing for from number to string. As you can see down below:

console.log(String(n1) + String(n2)); /* OR */ console.log(n1.toString() + n2.toString());

let name = "Volkan";
let surname = "Alkan";

console.log(name + " " + surname);

let grade = 70;
let ifSuccess = (grade >= 50);

console.log(ifSuccess);
console.log(typeof ifSuccess); //boolean

let age;
console.log(age);
console.log(typeof age);

age = "" // age makes itself a string.

console.log(age);
console.log(typeof age);
