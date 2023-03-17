var name = "Volkan"; // Global Scope
const pi = 3.14; // fix variable -> const

function print() {
  var name = "Yigit";
  var age = 21;
  console.log("function scope:", name, age);
}

console.log(name);

if(true) { //block -> let is always better for blocks. Because, it can only be used inside its own block.
  let name = "Mert";
  console.log(name);
}

console.log(name);

print();

// Functions create their own scopes.
// No new scope is created in the block. (let, const)