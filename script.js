// Defining variables to put into array
var numbersDef = ["1234567890"];
var lowercaseDef = ["abcdefghijklmnopqrstuvwxyz"];
var uppercaseDef = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var specialCharDef = ["!@#$%^&*()"];

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
  var caseString = caseArray.toString();
  console.log("caseArray is now: " + caseString)
  // Executing the function

  /* This currently works! It sends all of the characters for the password
  to the console log, but just only displays the most recently pulled one in the box */
  function generatePassword(length) {
    result = '';
    var charactersLength = caseString.length;
    for (var i = 0; i < length; i++) {
      var randPos = (Math.floor(Math.random() * charactersLength));
      var result = caseString.charAt(randPos);
      console.log(result);
      resultArray.push(result);
    }
  }
  resultArray = [];
  console.log(resultArray);


  // invoking function
  generatePassword(passLength);

  var completedPassword = resultArray.join("");
alert('Your password is: ' + completedPassword);
}

var generate = document.getElementById("generate");
var password = document.getElementById("password");
generate.onclick = getPasswordOptions();

