// Defining variables to put into array
var numbersDef = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var lowercaseDef = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];
var uppercaseDef = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z"
];
var specialCharDef = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];

// Function to prompt user for password options
function getPasswordOptions() {
  // Variable to store length of password from user input
  var passLength = parseInt(
    prompt('How many characters would you like your password to contain?')
  );
  // Conditional statement to check if password length is a number. Prompts end if this evaluates false
  if (isNaN(passLength) === true) {
    alert('Password length must be provided as a number');
    return;
  }
  // Conditional statement to check if password length is at least 8 characters long. Prompts end if this evaluates false
  if (passLength < 8) {
    alert('Password length must be at least 8 characters');
    return;
  }
  // Conditional statement to check if password length is less than 128 characters long. Prompts end if this evaluates false
  if (passLength > 128) {
    alert('Password length must less than 129 characters');
    return;
  }
  // Variable to store boolean regarding the inclusion of special characters
  var specialChar = confirm(
    'Click OK to confirm including special characters.'
  );
  // Variable to store boolean regarding the inclusion of numeric characters
  var numbers = confirm(
    'Click OK to confirm including numeric characters.'
  );
  // Variable to store boolean regarding the inclusion of lowercase characters
  var lowercase = confirm(
    'Click OK to confirm including lowercase characters.'
  );
  // Variable to store boolean regarding the inclusion of uppercase characters
  var uppercase = confirm(
    'Click OK to confirm including uppercase characters.'
  );
  // Creating empty array to push into?
  var caseArray = [];
  // Defining which part of the array to use
  if (numbers === true) {
    caseArray.push(numbersDef);
  }
  if (lowercase === true) {
    caseArray.push(lowercaseDef);
  }
  if (uppercase === true) {
    caseArray.push(uppercaseDef);
  }
  if (specialChar === true) {
    caseArray.push(specialCharDef);
  }

  // THIS IS WHERE MY NEW CODE STARTS ALSO HI JAMES <3

  // Checking array, trying to make it a string so charAt works on line 123
  console.log("caseArray is: " + caseArray);
  caseArray.toString;
  console.log("caseArray is now: " + caseArray)
  // Executing the function
  function generatePassword(length) {
    result = '';
      var charactersLength = caseArray.length;
    for (var i = 0; i < length; i++) {
       var result = caseArray.charAt(Math.floor(Math.random() * charactersLength));
    }
  }
console.log(generatePassword(passLength));
}

var generate = document.getElementById("generate");
var password = document.getElementById("password");
generate.onclick = getPasswordOptions();

