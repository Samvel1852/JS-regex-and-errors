// Convert the code using try...catch.

// function reverseString(s) {
//   typeof s !== "string"
//     ? console.log("s.split is not a function")
//     : (s = s.split("").reverse().join(""));
//   console.log(s);
// }

function reverseString(s) {
  try {
    return console.log(s.split("").reverse().join(""));
  } catch (err) {
    throw err;
  }
}

reverseString(1324);
