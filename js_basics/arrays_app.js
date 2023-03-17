let fruits = ["Apple", "Pear", "Banana", "Strawberry"];

let l = fruits.length;
console.log(l);

let first = fruits[0];
let last = fruits[fruits.length-1];
console.log(`First ellement of the aray is: ${first}, and the last one is: ${last}.`);

console.log(fruits.includes("Apple"));

// fruits[fruits.length] = "Cherry";
// console.log(fruits);

fruits.push("Cherry");
console.log(fruits);

// fruits.pop();
// fruits.pop();

fruits.splice(fruits.length-2,2) 
console.log(fruits);

let s1 = ["Volkan", "Alkan", 2001, [70, 60, 80]];
let s2 = ["Yigit", "Doğan", 1999, [80, 80, 90]];
let s3 = ["Mert", "Akin", 2000, [60, 60, 70]];

let date = new Date();
year = date.getFullYear();
console.log(year);

let s1gpa = (s1[3][0]+s1[3][1]+s1[3][2])/3;
let s2gpa = (s2[3][0]+s2[3][1]+s2[3][2])/3;
let s3gpa = (s3[3][0]+s1[3][1]+s1[3][2])/3;

let p1 = `${s1[0]} ${s1[1]} is now ${(year-s1[2])} years old. His GPA: ${s1gpa}`;
console.log(p1);
let p2 = `${s2[0]} ${s2[1]}3 is now ${(year-s2[2])} years old. His GPA: ${s2gpa.toFixed(1)}`;
console.log(p2);
let p3 = `${s3[0]} ${s3[1]} is now ${(year-s3[2])} years old. His GPA: ${s3gpa.toFixed(1)}`;
console.log(p3);
