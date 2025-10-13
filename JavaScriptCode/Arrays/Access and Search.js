// Interview-Level Questions on Access & Search

// How to check if a substring exists in a string?
// → Use includes() (or indexOf() before ES6).
const mainString = "Hello, world!";
const subString1 = "world";
const subString2 = "JavaScript";

console.log(mainString.includes(subString1)); // true
console.log(mainString.includes(subString2)); // false

// What’s the difference between indexOf() and includes()?
// → indexOf() returns position; includes() returns Boolean.


// How to find all positions of a substring?
// → Use a while loop with indexOf().
function findAllPositions(str, subStr) {
  const positions = [];
  let pos = str.indexOf(subStr); // find first occurrence

  while (pos !== -1) {           // loop until no match
    positions.push(pos);         // store position
    pos = str.indexOf(subStr, pos + 1); // search next occurrence
  }

  return positions;
}

// Example:
console.log(findAllPositions("hello world, hello JS, hello again", "hello"));
// Output: [0, 13, 24]


// How to check if a string starts or ends with a substring?
// → Use startsWith() and endsWith().

// What’s the difference between charAt() and [] access?
// → charAt() returns empty string if invalid index; [] returns undefined.

// Is includes() case-sensitive?
// → Yes, all string search methods are case-sensitive by default.