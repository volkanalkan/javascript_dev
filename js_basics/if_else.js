let username = "volkanalkan";
let password = "123456";
let isLoggedIn = (username == "volkanalkan" && password == "123456");

if (isLoggedIn) {
  console.log("WELCOME, " + username + ".");
} 

else { //if (!isLoggedIn)
  console.log("Failed to login to the application!");
}


/* Easy App */

let x = 20;

let y = 21;

let z = 22;

// 1 //

if (x >= 10 && x <= 50) {
  console.log(x + " is between 10 and 50");
}

else {
  console.log(x + " is not between 10 and 50");
}

// 2 //

if (y > 0 && y != (y % 2 == 0)) {
  console.log(y + " is a positive odd number.");
}

else if (y > 0 && y == (y % 2 == 0)) {
  console.log(y + " is a positive even number.");
}

else {
  console.log(y + " is a negative number.");
}

// 3 //

console.log("x =" + x + ", y = " + y + ", z = " + z);

if (x > y && x > z && y > z) {
  console.log("x > y > z");
}

else if (x > y && x > z && z > y) {
  console.log("x > z > y");
}

else if (y > x && y > z && x > z) {
  console.log("y > x > z");
}

else if (y > x && y > z && z > x) {
  console.log("y > z > x");
}

else if (z > y && z > x && x > y) {
  console.log("z > x > y");
}

else if (z > y && z > x && y > x) {
  console.log("z > y > x");
}

// 4 //

let visa1 = 90;
let visa2 = 90;
let final = 49;
let avr = ((((visa1 + visa2) / 2) * 40) / 100) + ((final * 60) / 100);
console.log("Your average is: " + avr);

let pass;

if (final >= 70 || avr >= 50 && final >= 50) {
  pass = true;
}

else if (avr < 50 || final < 50) {
  pass = false;
}


if (!pass) {
  console.log("You have FAILED from that lecture!.");
}

else {
  console.log("You have successfully PASSED from that lecture. Congrats!");
}
