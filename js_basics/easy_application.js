let st1_name = "Ada";
let st1_surname = "Bilgi";
let st1_bday = "2010";
let st1_math1 = 70;
let st1_math2 = 70;
let st1_math3 = 80;
let st1_gpa = (st1_math1 + st1_math2 + st1_math3) / 3;
console.log(parseFloat(st1_gpa));
console.log(st1_gpa >= 50);

let st2_name = "Yiğit";
let st2_surname = "Bilgi";
let st2_bday = "2012";
let st2_math1 = 40;
let st2_math2 = 40;
let st2_math3 = 50;
let st2_gpa = (st2_math1 + st2_math2 + st2_math3) / 3;
console.log(st2_gpa);
console.log(st2_gpa >= 50);

let currentYear = new Date().getFullYear();

let st1_age = currentYear - parseInt(st1_bday); // Aditionally of the precious lecture, we can also use parseInt or parseFloat or sth. for converting variables. 
let st2_age = currentYear - parseInt(st2_bday);
console.log(st1_age); 
console.log(st2_age); 