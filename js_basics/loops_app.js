let numbers = [1,5,7,15,3,25];

for (let i of numbers) {
  console.log(`${i} square is ${Math.pow(i,2)}`);
}

for (let x of numbers) {
  if (x%5 == 0) {
    console.log(`Number ${x}, is a multiple of 5.`);
  } else {
    console.log(`Number ${x}, is NOT a multiple of 5.`);
  }
}

let sum = 0;
let n = 0;
for (n of numbers) {
  if (n%2 == 0) {
    sum += n;
  }
}
console.log(sum);

let products  = ["iPhone 12", "Samsung S22", "iPhone 13", "Samsung S23"];

for (let p in products) {
  console.log(products[p].toUpperCase());
}

let amount = 0;
for (let pro of products) { // As you can see here, I can easily return the values in the array even if they're strings.
  if (pro.includes("Samsung")) {
    amount++;
  }
};

console.log(amount);

let students = [
  {
    "name": "xxx",
    "surname": "xxx",
    "grades": [60,70,60]
  },
  {
    "name": "yyy",
    "surname": "yyy",
    "grades": [80,70,80]
  },
  {
    "name": "zzz",
    "surname": "zzz",
    "grades": [70,70,60]
  }
]

let sumGrade;
let avr;
for (let i of students) {
  console.log(`${i.name} ${i.surname} GPA:`);
  sumGrade = 0;
  for(let grade of i.grades) {
    sumGrade += grade;
  }
  avr = parseInt(sumGrade / 3);
  console.log(avr);
  if (avr < 50) {
    console.log(i.name + " has failed this lecture.")
  } else {
    console.log(i.name + " has successfully passed this lecture.")
  }
}

let ovGpa = 0;
for (let st of students) {
  for (let gr of st.grades) {
    ovGpa += gr;
  }
}

console.log("The Overall GPA is: " + parseInt(ovGpa/9));