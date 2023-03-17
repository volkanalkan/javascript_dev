let now = new Date(); // currently date - hour info

/* Get Methods */

r = now;
r = now.getDate(); // which day are we in this month (Number)
r = now.getDay(); // 0: sunday, 1: monday, 2: tuesday, 3: wednesday, 4: thursday, 5: friday, 6: saturday (Number)
r = now.getFullYear(); // year
r = now.getHours(); // hour
r = now.getMonth(); 
r = now.getTime();

/* Set Methods */

/*
now.setFullYear(2025);
now.setMonth(7); // 0: january - 11: december
now.setDate(17);
*/

r = now;

let bD = new Date(1990, 5, 15);

r = now.getFullYear() - bD.getFullYear();

let millisecond = now - bD;

let second = millisecond / 1000;
let minute = second / 60;
let hour = minute / 60;
let day = hour / 24;

r = day;

console.log(r);
console.log(typeof r);

/* Lil Ex */

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const d = new Date();
let month = months[d.getMonth()];
console.log(month);
