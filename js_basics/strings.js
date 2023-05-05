let name = "Volkan";
let surname = "Alkan";
let age = 66;
let city = "Izmir";

let message = "My name is " + name + ', and my surname is ' + surname + `. I'm currently living in ` + city + ". " + (65 - age) + " years short for retirment."; //I can use both of "" or ''. It doesn't matter.
console.log(message);

// backtick (`)
message = `My name is ${name}, and my surname is ${surname}. I'm currently living in ${city}. ${(65-age)} years short for retirment.`

// ternary operators
let retirment = (65 - age > 0) ? (65 - age) + " years short for retirment." : "I am retired."; // after the'?' and before the ':', it's if block. After thet ':', it's else block.
message = `My name is ${name}, and my surname is ${surname}. I'm currently living in ${city}. ${retirment}`;

console.log(message);

/*******************************/

let n = "String clAss varIAble.";
let result;

result = n.toLowerCase();
result = n.toUpperCase();
result = n.length;
result = n[1];
result = n.slice(0, 6);
result = n.slice(10);
result = n.slice(-10);
result = n.slice(-5, -10);

result = n.substring(0, 6);
result = n.substring(10);

result = n.replace("clAss","class");
result = n.trim();
result = n.trimStart();

result = n.indexOf("clAss");
result = n.split(" ");
result = n.split(" ")[2];

console.log(result);

/**** Basic App ****/

let url = "https://www.volkanalkan.com";
let nameOfApp = "Basic App Creating";

r = url.length;
r = nameOfApp.split(" ").length;
r = url.startsWith("https");
r0 = nameOfApp.indexOf("App"); //let's turn this to boolean.
if (nameOfApp.indexOf("App") > -1) {
  console.log("true");
} else {
  console.log("false");
}

nameOfApp = nameOfApp.toLowerCase();
nameOfApp = nameOfApp.replaceAll(" ","-");

r = `${url}/${nameOfApp}`;

console.log(r);
