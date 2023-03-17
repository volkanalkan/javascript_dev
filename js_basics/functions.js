function greeting(msg) {
  console.log(msg);
}

greeting("Hi There.");
greeting("Greetings.");
greeting("How is it going?");
greeting("Yo!");
greeting();

function calculateAge(birthYear) {
  return new Date().getFullYear() - birthYear;
}

let ageVolkan = calculateAge(2001);
let ageHuseyin = calculateAge(1982);

console.log(ageVolkan, ageHuseyin);

function retirmentRemaining(birthYear, name) {
  let age = calculateAge(birthYear);
  let ageRemain = 65 - age;


  if (ageRemain > 0) {
    console.log(`Dear ${name}, you have ${ageRemain} years for retirment.`);
  } else {
    console.log("You're already retire.");
  }
}

retirmentRemaining(2001, "Volkan");
retirmentRemaining(1982, "Huseyin");