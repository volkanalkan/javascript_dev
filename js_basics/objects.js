// dict, json

let userA = {
  "name": "Volkan",
  "last": "Alkan",
  "age": 21,
  "address": {
    "country": "Turkey",
    "city": "İstanbul",
    "district": "Besiktas"
  },
  "hobbies": ["music","sports"]
};

let userB = {
  "name": "Mert",
  "last": "Akin",
  "age": 22,
  "address": {
    "country": "France",
    "city": "Marseille"
  },
  "hobbies": ["drawing","sports"]
};

let result;

result = userA.name;
result = userA["age"];
result = userA.address.city;
result = userA.hobbies[0];

let users = [
  userA,
  userB
];

result = users[1].name;

let products = [
  {
    "name": "Samsung S22",
    "price": 20000
  },
  {
    "name": "Samsung S23",
    "price": 15000
  }
];

result = products[0].name;

console.log(result);