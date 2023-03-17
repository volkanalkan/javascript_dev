function i_want_to_be_a_billionaire (word, number) {
  for (let i = 0; i < number; i++) {
    console.log(word);
  }
}

i_want_to_be_a_billionaire("I will definitely be a billionaire", 9);

function area_of_a_rectangle(a,b) {
  return a*b;
}

function perimeter_of_a_rectangle(a,b) {
  return (a+b)*2;
}

console.log(`The area of ​​a rectangle with sides of 2cm and 3cm is ${area_of_a_rectangle(2,3)} cm square. Also, the perimeter of that rectangle is ${perimeter_of_a_rectangle(2,3)} cm.`)

function heads_or_tails() {
  let date = new Date();
  let xD = new Date(1990, 5, 15);
  if ((date - xD)%2 == 0) {
    console.log("It's a heads.");
  } else { 
    console.log("It's a trails.");
  }
}

//The other way

function h_o_t() {
  let random = Math.random();

  if(random < 0.5) {
    console.log("heads");
  } else {
    console.log("trails");
  }
}

h_o_t();
heads_or_tails();


function perfect_divisions(number) {
  let numbers = [];
  
  for (let i = 2; i < number; i++) {
    if(number % i == 0) {
      numbers.push(i);
    }
  }

  return numbers;
}

console.log(perfect_divisions(10));    // 2, 5
console.log(perfect_divisions(15));    // 3, 5



function sum() {
  let total = 0;

  for(let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }

  return total;
}

console.log(sum(2,5));
console.log(sum(2,5,7));