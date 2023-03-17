let result;
let a = 10, b = 20, c = 30;

result = a + b;
result = a - b;
result = a * b;
result = a / b;
result = c % a;
// result = a++;
result = ++a;
result = --a;
result = a--;

result = a;
result += a; // result = result + a; 
result -= a;
result *= a;
result /= a;
result %= a;

result = (a == b); // boolean // if a equals to b?
result = (a != b);
result = (3 == "3"); // -> TRUE ("==" checks the value of content)
result = (3 === "3"); // -> FALSE ("===" checks the type of variable)

console.log(result);
console.log(a);