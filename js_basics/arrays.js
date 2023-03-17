// let p1 = "iPhone 14";
// let p2 = "iPhone 14 Pro";
// let p3 = "iPhone 14 Pro Max";

let products = ["iPhone 14","iPhone 14 Pro","iPhone 14 Pro Max"];
let prices = [800, 1000, 1100];
let colours = ["Gold", "Deep Purple", "Space Gray", "White"];

let p1 = ["iPhone 14", 800, "Product Red"]; // I can also define an array consisting of different types of variables.

let p2 = [];
p2[0] = "iPhone 14 Pro";
p2[1] = 1000;
p2[2] = "White";

let p3 = [
  "iPhone 14 Pro Max",
  1100,
  ["Space Gray", "Deep Purple", "Gold", "White"]
];

console.log(p3);
console.log(p3[2]);
console.log(typeof p3[2]);

console.log(products[0]);
console.log(products[1]);
console.log(products[2]);

console.log(`${products[0]} - ${prices[0]} - ${colours[0]}`);
console.log(`${products[1]} - ${prices[1]} - ${colours[1]}`);
console.log(`${products[2]} - ${prices[2]} - ${colours[2]}`);

let n = "Volkan Alkan Studies Java Script";
console.log(n[5]);
console.log(n.split(" "));
console.log(n.split(" ")[3]);
console.log(n.split(" ")[3][2]);