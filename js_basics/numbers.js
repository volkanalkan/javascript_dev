let result;

result = 10;
result = "10";
result = Number("10");
result = parseInt("10.6"); //Int, not float.
result = parseFloat("10.6");
result = parseInt("a2");

result = isNaN("10");

let n = 15.12393237;

// number methods
result = n.toPrecision(5);
result = n.toFixed(5);

result = Math.round(2.4); //2 or 3. Asks itself that is it closer to 2 or 3. 
result = Math.round(2.6);
result = Math.ceil(2.6); // always to a greater one.
result = Math.ceil(2.2);
result = Math.floor(2.6); // always to a lower one.
result = Math.floor(2.2);
result = Math.sqrt(25); // square root
result = Math.pow(2,3); // 2 to the 3
result = Math.abs(-10); //absolute value
result = Math.min(4,6,8,3,1); // which one is the minimum one
result = Math.max(4,6,8,3,1); // which one is the maximum one
result = Math.random(); //creates a random number between 0 to 1.
result = Math.random() * 10; //creates a random number between 0 to 9.
result = Math.floor(Math.random() * 10); //creates random INTEGER numbers between 0 to 9
result = Math.floor(Math.random() * 10) + 1; // 1 to 10

console.log(typeof result);
console.log(result);