let sum = 0;
for (let i = 1; i <= 10; i++) {
  sum += i;
}
console.log(sum);

let numbers = [1,4,7,2,4,5,9,3];

let i;

let x = 0;
for (i = 0; i < numbers.length; i++) {
  x += numbers[i];
}
console.log(x);


x = 0;
for (let index in numbers) { // index numbers in this array called numbers. <-- "in"
  x += numbers[index];
}
console.log(x);

x=0;
for (let numb of numbers) { // the own numbers in this array called numbers. <-- "of"
  x += numb;
}
console.log(x);

let user = {
  "name": "Volkan Alkan",
  "username": "volkanalkan",
  "password": "123456",
  "e-mail": "info@volkanalkan.com"
};

for (let key in user) { // I can simply use this loop in the objects.
  console.log(user[key]);
}

// console.log(user[0]); --> I can't use this one 'cause [0] is a number. But in the example up there, our "key" keyword is used as the first element in the array. That's not a number.