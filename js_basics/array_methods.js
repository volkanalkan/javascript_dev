let students = ["cat", "Berk", "Hatice", "Yiğit", "Volkan", "dog"];

result = students.length; // Counting starts from 1.

// array to string
result = students.toString();
result = students.join(" ");

// delete an element
result = students.pop(); // removes the last element from an array and returns that element. This method changes the length of the array.
result = students.shift(); // removes the first element from an array and returns that element. This method changes the length of the array.

// add an element
result = students.push("Sena"); // add an item to the end of an array.
result = students.unshift("Serra"); // add an item to the beginning of an array.

console.log(students);



let brandsFirst = ["Mazda", "Toyota"];
let brandsSecond = ["Opel", "Renault"];
let brandsThird = ["Mercedes"];

console.log(result);
console.log(`Brand First: ${brandsFirst.join(" ")}.
Brand Second: ${brandsSecond.join(" ")}.
Brand Third: ${brandsThird.join(" ")}.`);

// result = brandsFirst.concat(brandsSecond); // Combines the elements of 2 selected arrays and makes them a single array. The original array does not affect.

result = brandsFirst.splice(0, 0, brandsSecond); // accoring to Array<String>.splice(x,y,z); -> deletes the item from x and deletes as much as y items. After that, adds the array z to the end of the array. The original array is affected.

// OR I can also add some new array elements with z, accoring to Array<String>.splice(x,y,z); Such as:
result = brandsThird.splice(0, 1, "bmw", "audi");

// OR I can also use this method just for deleting an item. The same rules goes for it too.
result = brandsFirst.splice(0, 1);

console.log(result);

console.log(`Brand First: ${brandsFirst.toString()}.
Brand Second: ${brandsSecond.join(" ")}.
Brand Third: ${brandsThird.join(" ")}.`);